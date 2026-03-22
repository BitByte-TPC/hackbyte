"use client";

import { useEffect, useRef, useCallback, RefObject } from "react";
import gsap from "gsap";

/* ────────────────────────────────────────────
   Tunable crack configuration
   Tweak these values to change the look/feel
   ──────────────────────────────────────────── */
const CRACK_CONFIG = {
  scaleBreakpoints: { sm: 600, md: 900, lg: 1400, factors: [0.7, 1, 1.25, 1.5] },
  reachMultiplier: 0.42,
  mainLength: { min: 0.5, spread: 0.35 },
  sharpCorners: true,
  mainJitter: 42,
  mainSegments: 8,
  branchOffsetJitter: 18,
  branchLength: { min: 0.14, spread: 0.22 },
  branchJitter: 34,
  branchSegments: 7,
  radialCount: { base: 5, extra: 4 },
  radialLength: { min: 0.18, spread: 0.4 },
  radialJitter: 38,
  radialSegmentsBase: 7,
  radialBranchChance: 0.55,
  radialBranchLength: { min: 0.16, spread: 0.25 },
  radialBranchJitter: 28,
  radialBranchSegments: 6,
  ringRadius: { min: 20, spread: 30 },
  glowRadius: { min: 40, spread: 35 },
  impactRadius: { base: 50, spread: 40 },
  centerCore: { startR: 1.2, peakR: 7, settleR: 4.2, settleOpacity: 0.85 },
  dimming: { start: 0.2, step: 0.12, max: 0.65, duration: 0.4 },
  heal: { delayMs: 1800, reverseSpeed: 1.2, stagger: 0.08 },
  maxGroups: 25,
};

/* ────────────────────────────────────────────
   Types
   ──────────────────────────────────────────── */
interface Props {
  targetRef: RefObject<HTMLDivElement | null>;
}

/* ────────────────────────────────────────────
  Build a jagged SVG crack path
  Supports sharp corners for pronounced zig-zag
  ──────────────────────────────────────────── */
function buildCrackPath(
  ox: number,
  oy: number,
  angle: number,
  length: number,
  jitter: number,
  segs: number
): string {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  const points: [number, number][] = [[ox, oy]];
  for (let s = 1; s <= segs; s++) {
    const frac = s / segs;
    let nx = ox + cosA * length * frac;
    let ny = oy + sinA * length * frac;
    if (s < segs) {
      nx += -sinA * (Math.random() - 0.5) * jitter;
      ny += cosA * (Math.random() - 0.5) * jitter;
    }
    points.push([nx, ny]);
  }

  let d = `M${points[0][0]},${points[0][1]}`;

  if (CRACK_CONFIG.sharpCorners) {
    for (let i = 1; i < points.length; i++) {
      d += ` L${points[i][0]},${points[i][1]}`;
    }
    return d;
  }

  if (points.length === 2) {
    d += ` L${points[1][0]},${points[1][1]}`;
  } else {
    for (let i = 1; i < points.length - 1; i++) {
      const cpx = points[i][0];
      const cpy = points[i][1];
      const mx = (points[i][0] + points[i + 1][0]) / 2;
      const my = (points[i][1] + points[i + 1][1]) / 2;
      d += ` Q${cpx},${cpy} ${mx},${my}`;
    }
    const last = points[points.length - 1];
    d += ` L${last[0]},${last[1]}`;
  }
  return d;
}

/* ────────────────────────────────────────────
   Persistent interactive glass-crack effect
   Renders behind hero content; each click
   spawns cracks that stay and accumulate.
   ──────────────────────────────────────────── */
export default function RealityGlitch({ targetRef }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const crackGroups = useRef<SVGGElement[]>([]);
  const crackTimelines = useRef<Map<SVGGElement, gsap.core.Timeline>>(new Map());
  const crackCount = useRef(0);
  const healTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Auto-heal: reverse every crack timeline so they "un-crack" */
  const healAll = useCallback(() => {
    const dim = dimRef.current;
    const groups = [...crackGroups.current];
    const timelines = crackTimelines.current;

    groups.forEach((g, i) => {
      const tl = timelines.get(g);
      if (tl) {
        /* Stagger the reversal slightly per group */
        gsap.delayedCall(i * CRACK_CONFIG.heal.stagger, () => {
          tl.timeScale(CRACK_CONFIG.heal.reverseSpeed);   /* reverse a bit faster than it cracked */
          tl.reverse();
          /* Remove the group once reversed */
          tl.eventCallback("onReverseComplete", () => {
            g.remove();
            timelines.delete(g);
          });
        });
      } else {
        /* Fallback — just fade */
        gsap.to(g, {
          opacity: 0,
          duration: 0.5,
          delay: i * 0.04,
          onComplete: () => g.remove(),
        });
      }
    });
    crackGroups.current = [];
    crackCount.current = 0;

    /* Restore dim overlay to transparent */
    if (dim) {
      gsap.to(dim, {
        opacity: 0,
        duration: 1.0,
        ease: "power2.inOut",
      });
    }
  }, []);

  /* Schedule a heal — resets timer on each new crack */
  const scheduleHeal = useCallback(() => {
    if (healTimer.current) clearTimeout(healTimer.current);
    healTimer.current = setTimeout(() => {
      healAll();
      healTimer.current = null;
    }, CRACK_CONFIG.heal.delayMs);           /* inactivity → auto-heal */
  }, [healAll]);

  /* ══════════════════════════════════════════
     Spawn cracks at a point
     ══════════════════════════════════════════ */
  const spawnCrack = useCallback(
    (clientX: number, clientY: number) => {
      const svg = svgRef.current;
      const target = targetRef.current;
      if (!svg || !target) return;

      const rect = target.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const W = rect.width;
      const H = rect.height;

      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

      /* Responsive scale: bigger cracks on bigger screens */
      const baseSize = Math.min(W, H);
      const { sm, md, lg, factors } = CRACK_CONFIG.scaleBreakpoints;
      const scale = baseSize < sm ? factors[0] : baseSize < md ? factors[1] : baseSize < lg ? factors[2] : factors[3];

      /* Remove oldest group if over limit */
      if (crackGroups.current.length >= CRACK_CONFIG.maxGroups) {
        const oldest = crackGroups.current.shift();
        if (oldest) {
          const oldTl = crackTimelines.current.get(oldest);
          if (oldTl) { oldTl.kill(); crackTimelines.current.delete(oldest); }
          gsap.to(oldest, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => oldest.remove(),
          });
        }
      }

      /* Create group for this click */
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svg.appendChild(g);
      crackGroups.current.push(g);

      /* Helper — create SVG path with stroke-dash reveal */
      const makePath = (d: string, cls: string, withCore = true) => {
        const el = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        el.setAttribute("d", d);
        /* Set bright defaults immediately to avoid any black flash before CSS class styling applies */
        el.setAttribute("fill", "none");
        el.setAttribute("stroke", "rgba(225, 210, 255, 0.95)");
        el.setAttribute("stroke-linecap", "square");
        el.setAttribute("stroke-linejoin", "miter");
        el.setAttribute("class", cls);
        g.appendChild(el);
        const len = el.getTotalLength();
        el.style.strokeDasharray = `${len}`;
        el.style.strokeDashoffset = `${len}`;

        let coreEl: SVGPathElement | null = null;
        if (withCore) {
          coreEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
          coreEl.setAttribute("d", d);
          coreEl.setAttribute("fill", "none");
          coreEl.setAttribute("stroke", "rgba(250, 245, 255, 0.98)");
          coreEl.setAttribute("stroke-linecap", "square");
          coreEl.setAttribute("stroke-linejoin", "miter");
          coreEl.setAttribute("class", "crack-core-line");
          g.appendChild(coreEl);
          coreEl.style.strokeDasharray = `${len}`;
          coreEl.style.strokeDashoffset = `${len}`;
        }

        return { el, coreEl, len };
      };

      const diagonal = Math.sqrt(W * W + H * H);
      /* Shorter overall cracks so the pattern feels tighter */
      const maxReach = diagonal * CRACK_CONFIG.reachMultiplier * scale;

      /* ─── 1. MAIN CRACK — thicker / brighter ─── */
      const mainAngle = Math.random() * Math.PI * 2;
      const mainLen = maxReach * (CRACK_CONFIG.mainLength.min + Math.random() * CRACK_CONFIG.mainLength.spread);
      const mainCrack = makePath(
        buildCrackPath(
          x,
          y,
          mainAngle,
          mainLen,
          CRACK_CONFIG.mainJitter * scale,
          CRACK_CONFIG.mainSegments + Math.round(scale)
        ),
        "crack-line crack-main"
      );

      /* Main crack branches */
      const mainBranches: ReturnType<typeof makePath>[] = [];
      const numMainBr = 2 + Math.floor(Math.random() * 2);
      for (let b = 0; b < numMainBr; b++) {
        const frac = 0.2 + (b / numMainBr) * 0.6;
        const bx =
          x +
          Math.cos(mainAngle) * mainLen * frac +
          (Math.random() - 0.5) * CRACK_CONFIG.branchOffsetJitter * scale;
        const by =
          y +
          Math.sin(mainAngle) * mainLen * frac +
          (Math.random() - 0.5) * CRACK_CONFIG.branchOffsetJitter * scale;
        const ba =
          mainAngle +
          (Math.random() > 0.5 ? 1 : -1) * (0.35 + Math.random() * 0.55);
        const bl = mainLen * (CRACK_CONFIG.branchLength.min + Math.random() * CRACK_CONFIG.branchLength.spread);
        mainBranches.push(
          makePath(
            buildCrackPath(
              bx,
              by,
              ba,
              bl,
              CRACK_CONFIG.branchJitter * scale,
              CRACK_CONFIG.branchSegments + Math.round(scale)
            ),
            "crack-branch crack-main-branch"
          )
        );
      }

      /* ─── 2. RADIAL CRACKS ─── */
      const numRadial = CRACK_CONFIG.radialCount.base + Math.floor(Math.random() * CRACK_CONFIG.radialCount.extra);
      const radialCracks: ReturnType<typeof makePath>[] = [];
      const radialBranches: ReturnType<typeof makePath>[] = [];

      for (let i = 0; i < numRadial; i++) {
        const angle =
          (i / numRadial) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;

        /* Skip if too close to main crack direction */
        const diff = Math.abs(
          ((angle - mainAngle + Math.PI * 3) % (Math.PI * 2)) - Math.PI
        );
        if (diff < 0.3) continue;

        const len = maxReach * (CRACK_CONFIG.radialLength.min + Math.random() * CRACK_CONFIG.radialLength.spread);
        radialCracks.push(
          makePath(
            buildCrackPath(
              x,
              y,
              angle,
              len,
              CRACK_CONFIG.radialJitter * scale,
              CRACK_CONFIG.radialSegmentsBase + Math.floor(Math.random() * 2 + scale)
            ),
            "crack-line"
          )
        );

        /* Some radial branches */
        if (Math.random() > CRACK_CONFIG.radialBranchChance) {
          const mx =
            x + Math.cos(angle) * len * (0.35 + Math.random() * 0.3);
          const my =
            y + Math.sin(angle) * len * (0.35 + Math.random() * 0.3);
          const ba =
            angle +
            (Math.random() > 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.5);
          const bl = len * (CRACK_CONFIG.radialBranchLength.min + Math.random() * CRACK_CONFIG.radialBranchLength.spread);
          radialBranches.push(
            makePath(
              buildCrackPath(
                mx,
                my,
                ba,
                bl,
                CRACK_CONFIG.radialBranchJitter * scale,
                CRACK_CONFIG.radialBranchSegments + Math.round(scale * 0.5)
              ),
              "crack-branch"
            )
          );
        }
      }

      /* ─── 3. SMALL RING FRAGMENTS around impact ─── */
      const ringR = (CRACK_CONFIG.ringRadius.min + Math.random() * CRACK_CONFIG.ringRadius.spread) * scale;
      const ringSegs = 4 + Math.floor(Math.random() * 3);
      let ringD = "";
      for (let j = 0; j < ringSegs; j++) {
        const a1 = (j / ringSegs) * Math.PI * 2;
        const a2 =
          ((j + 0.35 + Math.random() * 0.5) / ringSegs) * Math.PI * 2;
        if (Math.random() > 0.35) {
          const r1 = ringR * (0.9 + Math.random() * 0.2);
          const r2 = ringR * (0.9 + Math.random() * 0.2);
          ringD += `M${x + Math.cos(a1) * r1},${y + Math.sin(a1) * r1} `;
          ringD += `A${ringR},${ringR} 0 0 1 `;
          ringD += `${x + Math.cos(a2) * r2},${y + Math.sin(a2) * r2} `;
        }
      }
      const ring = ringD ? makePath(ringD, "crack-ring", false) : null;

      /* ─── 4. IMPACT FLASH CIRCLE ─── */
      const impactCircle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      impactCircle.setAttribute("cx", `${x}`);
      impactCircle.setAttribute("cy", `${y}`);
      impactCircle.setAttribute("r", "0");
      impactCircle.setAttribute("class", "crack-impact");
      g.appendChild(impactCircle);

      /* ─── 5. RADIAL GLOW at impact center ─── */
      const glowId = `crack-glow-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const glowR =
        (CRACK_CONFIG.glowRadius.min + Math.random() * CRACK_CONFIG.glowRadius.spread) * scale;

      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const radGrad = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
      radGrad.setAttribute("id", glowId);
      const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", "rgba(180, 140, 255, 0.7)");
      const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop2.setAttribute("offset", "45%");
      stop2.setAttribute("stop-color", "rgba(98, 0, 155, 0.3)");
      const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop3.setAttribute("offset", "100%");
      stop3.setAttribute("stop-color", "rgba(98, 0, 155, 0)");
      radGrad.appendChild(stop1);
      radGrad.appendChild(stop2);
      radGrad.appendChild(stop3);
      defs.appendChild(radGrad);
      g.appendChild(defs);

      const glowBlob = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      glowBlob.setAttribute("cx", `${x}`);
      glowBlob.setAttribute("cy", `${y}`);
      glowBlob.setAttribute("r", `${glowR}`);
      glowBlob.setAttribute("fill", `url(#${glowId})`);
      glowBlob.setAttribute("class", "crack-center-glow");
      g.appendChild(glowBlob);

      /* Persistent glow chip — the "chipped glass" mark */
      const glowCircle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      glowCircle.setAttribute("cx", `${x}`);
      glowCircle.setAttribute("cy", `${y}`);
      glowCircle.setAttribute("r", `${3 * scale}`);
      glowCircle.setAttribute("class", "crack-glow");
      g.appendChild(glowCircle);

      /* Thick center node where the crack originates */
      const centerCore = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      centerCore.setAttribute("cx", `${x}`);
      centerCore.setAttribute("cy", `${y}`);
      centerCore.setAttribute("fill", "rgba(250, 245, 255, 0.95)");
      centerCore.setAttribute("stroke", "rgba(195, 145, 255, 0.98)");
      centerCore.setAttribute("r", `${CRACK_CONFIG.centerCore.startR * scale}`);
      centerCore.setAttribute("class", "crack-center-core");
      g.appendChild(centerCore);

      /* ═══════════════════════════════════════
         GSAP Timelines
         ═══════════════════════════════════════ */

      /* Fire-and-forget: impact flash (don't reverse this) */
      gsap.to(impactCircle, {
        attr: { r: (CRACK_CONFIG.impactRadius.base + Math.random() * CRACK_CONFIG.impactRadius.spread) * scale },
        opacity: 0,
        duration: 0.5,
        ease: "circ.out",
        onComplete: () => impactCircle.remove(),
      });

      /* Reversible timeline — this is what un-cracks on heal */
      const tl = gsap.timeline();
      crackTimelines.current.set(g, tl);

      /* Center glow — flash bright then settle to persistent soft glow */
      tl.fromTo(
        glowBlob,
        { opacity: 0, attr: { r: glowR * 0.3 } },
        { opacity: 1, attr: { r: glowR * 1.4 }, duration: 0.2, ease: "power2.out" },
        0
      );
      tl.to(
        glowBlob,
        {
          opacity: 0.35,
          attr: { r: glowR },
          duration: 1.5,
          ease: "power3.out",
        },
        0.2
      );

      /* Glow chip — flash bright then settle to subtle glow */
      tl.fromTo(
        glowCircle,
        { opacity: 0, attr: { r: 1 * scale } },
        { opacity: 1, attr: { r: 6 * scale }, duration: 0.1, ease: "power2.out" },
        0
      );
      tl.to(
        glowCircle,
        {
          opacity: 0.3,
          attr: { r: 3 * scale },
          duration: 1.2,
          ease: "power3.out",
        },
        0.1
      );

      tl.fromTo(
        centerCore,
        {
          opacity: 0,
          attr: { r: CRACK_CONFIG.centerCore.startR * scale },
        },
        {
          opacity: 1,
          attr: { r: CRACK_CONFIG.centerCore.peakR * scale },
          duration: 0.12,
          ease: "power2.out",
        },
        0
      );
      tl.to(
        centerCore,
        {
          opacity: CRACK_CONFIG.centerCore.settleOpacity,
          attr: { r: CRACK_CONFIG.centerCore.settleR * scale },
          duration: 1.1,
          ease: "power3.out",
        },
        0.12
      );

      /* Dim background aggressively — noticeable from the first crack */
      crackCount.current++;
      const n = crackCount.current;
      const { start, step, max, duration } = CRACK_CONFIG.dimming;
      const dimOpacity = Math.min(start + n * step, max);
      if (dimRef.current) {
        gsap.to(dimRef.current, {
          opacity: dimOpacity,
          duration,
          ease: "power2.out",
        });
      }

      /* Main crack travels */
      tl.to(
        mainCrack.coreEl ? [mainCrack.el, mainCrack.coreEl] : mainCrack.el,
        {
          strokeDashoffset: 0,
          duration: 0.45 + Math.random() * 0.2,
          ease: "power2.out",
        },
        0.02
      );

      /* Main branches emerge */
      mainBranches.forEach((b, i) => {
        tl.to(
          b.coreEl ? [b.el, b.coreEl] : b.el,
          {
            strokeDashoffset: 0,
            duration: 0.25 + Math.random() * 0.15,
            ease: "power1.out",
          },
          0.1 + i * 0.07
        );
      });

      /* Radial cracks — staggered */
      radialCracks.forEach((c, i) => {
        tl.to(
          c.coreEl ? [c.el, c.coreEl] : c.el,
          {
            strokeDashoffset: 0,
            duration: 0.3 + Math.random() * 0.25,
            ease: "power2.out",
          },
          0.02 + i * 0.03
        );
      });

      /* Radial branches */
      radialBranches.forEach((b, i) => {
        tl.to(
          b.coreEl ? [b.el, b.coreEl] : b.el,
          {
            strokeDashoffset: 0,
            duration: 0.2 + Math.random() * 0.15,
            ease: "power1.out",
          },
          0.15 + i * 0.04
        );
      });

      /* Ring fragment */
      if (ring) {
        tl.to(
          ring.el,
          {
            strokeDashoffset: 0,
            duration: 0.35,
            ease: "power1.out",
          },
          0.08
        );
      }

      /* Subtle hero shake on each crack */
      if (target) {
        tl.fromTo(
          target,
          { x: 0, y: 0 },
          {
            keyframes: [
              { x: 2, y: -1, duration: 0.02 },
              { x: -1.5, y: 0.5, duration: 0.02 },
              { x: 0.5, duration: 0.015 },
              { x: 0, y: 0, duration: 0.035, ease: "power3.out" },
            ],
          },
          0
        );
      }

      /* Dim older cracks so fresh ones stand out */
      crackGroups.current.slice(0, -1).forEach((oldG) => {
        const cur = parseFloat(oldG.style.opacity || "1");
        gsap.to(oldG, {
          opacity: Math.max(cur * 0.88, 0.15),
          duration: 0.3,
        });
      });

      /* Reset the auto-heal timer */
      scheduleHeal();
    },
    [targetRef, scheduleHeal]
  );

  /* ── Attach click listener to hero section ── */
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handler = (e: MouseEvent) => {
      spawnCrack(e.clientX, e.clientY);
    };

    target.addEventListener("click", handler);
    return () => target.removeEventListener("click", handler);
  }, [targetRef, spawnCrack]);

  /* ── Keep viewBox in sync on resize ── */
  useEffect(() => {
    const svg = svgRef.current;
    const target = targetRef.current;
    if (!svg || !target) return;

    const update = () => {
      const rect = target.getBoundingClientRect();
      svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(target);
    return () => ro.disconnect();
  }, [targetRef]);

   return (
  <>
    <div ref={dimRef} className="crack-dim-overlay" style={{ zIndex: -1 }} />
    <div className="glass-pane" style={{ zIndex: -1 }} />
    <svg ref={svgRef} className="crack-canvas" style={{ zIndex: -1 }} />
  </>
);
}
