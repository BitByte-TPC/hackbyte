"use client";

import { useEffect, useRef, useCallback, RefObject } from "react";

const CONFIG = {
  maxCracks: 12,  
  healDelay: 2000,
  fadeSpeed: 0.015,
  drawSpeed: 2.5,
  shake: { max: 12, ease: 0.2 } 
};

interface Props {
  targetRef: RefObject<HTMLDivElement | null>;
}

type Point = { x: number; y: number };
type CrackLine = {
  points: Point[];
  startTime: number;
  duration: number;
  color: string;
  width: number;
};
type CrackSystem = {
  id: number;
  x: number;
  y: number;
  lines: CrackLine[];
  opacity: number;
  createdAt: number;
  isFading: boolean;
};

function generateCrackPoints(ox: number, oy: number, angle: number, length: number, jitter: number, segs: number): Point[] {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  const pts: Point[] = [{ x: ox, y: oy }];
  for (let s = 1; s <= segs; s++) {
    const frac = s / segs;
    let nx = ox + cosA * length * frac;
    let ny = oy + sinA * length * frac;
    if (s < segs) {
      nx += -sinA * (Math.random() - 0.5) * jitter;
      ny += cosA * (Math.random() - 0.5) * jitter;
    }
    pts.push({ x: nx, y: ny });
  }
  return pts;
}

export default function RealityGlitch({ targetRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cracksRef = useRef<CrackSystem[]>([]);
  const nextId = useRef(0);
  const rafId = useRef<number | null>(null);
  const throttleTimer = useRef(0);
  const healTimeout = useRef<NodeJS.Timeout | null>(null);
  
 
  const shakeIntensity = useRef(0);

  /* ─── Main Render Loop ─── */
  const renderLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const now = Date.now();
    let hasActiveAnimations = false;

    
    cracksRef.current = cracksRef.current.filter((c) => c.opacity > 0);

    let targetShake = 0;
    cracksRef.current.forEach((system) => {
      let isDrawing = false;
      system.lines.forEach((line) => {
        const elapsed = Math.max(0, now - line.startTime);
        const progress = Math.min(1, elapsed / line.duration);
        if (progress > 0 && progress < 1) isDrawing = true;
      });

      if (isDrawing) {
        targetShake += 5; 
      } else if (!system.isFading) {
        targetShake += 1; 
      } else if (system.opacity > 0) {
        targetShake += system.opacity * 3; 
      }
    });

   
    targetShake = Math.min(CONFIG.shake.max, targetShake);

    
    shakeIntensity.current += (targetShake - shakeIntensity.current) * CONFIG.shake.ease;

   
    if (shakeIntensity.current > 0.2) {
      const rx = (Math.random() - 0.5) * 2 * shakeIntensity.current;
      const ry = (Math.random() - 0.5) * 2 * shakeIntensity.current;
      if (targetRef.current) {
        targetRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      hasActiveAnimations = true; 
    } else if (targetRef.current && targetRef.current.style.transform !== "translate3d(0px, 0px, 0px)") {
      
      targetRef.current.style.transform = `translate3d(0px, 0px, 0px)`;
    }

    
    cracksRef.current.forEach((system) => {
      ctx.globalAlpha = system.opacity;

      
      const glowGrad = ctx.createRadialGradient(system.x, system.y, 0, system.x, system.y, 70);
      glowGrad.addColorStop(0, "rgba(230, 180, 255, 0.7)"); 
      glowGrad.addColorStop(1, "rgba(180, 140, 255, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(system.x, system.y, 70, 0, Math.PI * 2);
      ctx.fill();

      system.lines.forEach((line) => {
        const elapsed = Math.max(0, now - line.startTime);
        const progress = Math.min(1, elapsed / line.duration);

        if (progress > 0) {
          if (progress < 1) hasActiveAnimations = true;

          ctx.beginPath();
          ctx.strokeStyle = line.color;
          ctx.lineWidth = line.width;
          ctx.lineCap = "square";
          ctx.lineJoin = "miter";
          
          ctx.moveTo(line.points[0].x, line.points[0].y);

          const totalPoints = line.points.length;
          const currentPointIndex = (totalPoints - 1) * progress;
          const safeIndex = Math.floor(currentPointIndex);

          for (let i = 1; i <= safeIndex; i++) {
            ctx.lineTo(line.points[i].x, line.points[i].y);
          }

         
          if (safeIndex < totalPoints - 1) {
            const p1 = line.points[safeIndex];
            const p2 = line.points[safeIndex + 1];
            const remainder = currentPointIndex - safeIndex;
            const interpX = p1.x + (p2.x - p1.x) * remainder;
            const interpY = p1.y + (p2.y - p1.y) * remainder;
            ctx.lineTo(interpX, interpY);
          }

          ctx.stroke();
        }
      });

      if (system.isFading) {
        system.opacity = Math.max(0, system.opacity - CONFIG.fadeSpeed);
        hasActiveAnimations = true;
      }
    });

   
    const activeCount = cracksRef.current.filter(c => !c.isFading).length;
    if (activeCount > 0) {
      ctx.globalAlpha = Math.min(0.65, 0.2 + activeCount * 0.1);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
    }

    if (hasActiveAnimations || cracksRef.current.length > 0) {
      rafId.current = requestAnimationFrame(renderLoop);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [targetRef]);

  
  const spawnCrack = useCallback((clientX: number, clientY: number) => {
      const now = Date.now();
      if (now - throttleTimer.current < 150) return;
      throttleTimer.current = now;

      const canvas = canvasRef.current;
      const target = targetRef.current;
      if (!canvas || !target) return;

      const rect = target.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const maxReach = Math.min(canvas.width, canvas.height) * 0.55;
      const newLines: CrackLine[] = [];

      const addPath = (points: Point[], delay: number, dur: number, color: string, width: number) => {
        newLines.push({ points, startTime: now + delay, duration: dur, color, width });
      };

      
      const mainAngle = Math.random() * Math.PI * 2;
      const mainLen = maxReach * (0.6 + Math.random() * 0.4);
      const mainPts = generateCrackPoints(x, y, mainAngle, mainLen, 35, 6);
      
     
      addPath(mainPts, 0, 400 / CONFIG.drawSpeed, "rgba(220, 180, 255, 0.6)", 8); // Wide Glow
      addPath(mainPts, 0, 400 / CONFIG.drawSpeed, "rgba(255, 255, 255, 1)", 3.5); // Solid Core

      
      const numBranches = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < numBranches; i++) {
        const p1 = mainPts[1 + Math.floor(Math.random() * (mainPts.length - 2))];
        const ba = mainAngle + (Math.random() > 0.5 ? 1 : -1) * (0.4 + Math.random() * 0.4);
        const bl = mainLen * (0.2 + Math.random() * 0.4);
        const bPts = generateCrackPoints(p1.x, p1.y, ba, bl, 20, 4);
        // Brighter branches
        addPath(bPts, 80 + i * 20, 300 / CONFIG.drawSpeed, "rgba(245, 230, 255, 0.95)", 2);
      }

      // Increased Radial Cracks (4 to 7 instead of 2 to 4)
      const numRadial = 4 + Math.floor(Math.random() * 4);
      for (let i = 0; i < numRadial; i++) {
        const angle = (i / numRadial) * Math.PI * 2 + (Math.random() - 0.5);
        if (Math.abs(angle - mainAngle) < 0.3) continue; 
        const rLen = maxReach * (0.3 + Math.random() * 0.5);
        const rPts = generateCrackPoints(x, y, angle, rLen, 25, 5);
        addPath(rPts, 40 + i * 15, 350 / CONFIG.drawSpeed, "rgba(240, 225, 255, 0.95)", 2.5);

        
        if (Math.random() > 0.5) {
            const pMid = rPts[Math.floor(rPts.length / 2)];
            if (pMid) {
                const rba = angle + (Math.random() > 0.5 ? 1 : -1) * 0.5;
                const rbl = rLen * 0.4;
                const rbPts = generateCrackPoints(pMid.x, pMid.y, rba, rbl, 20, 4);
                addPath(rbPts, 100 + i * 15, 250 / CONFIG.drawSpeed, "rgba(220, 190, 255, 0.8)", 1.5);
            }
        }
      }

     
      if (cracksRef.current.length >= CONFIG.maxCracks) {
        cracksRef.current[0].isFading = true;
      }

      cracksRef.current.push({
        id: nextId.current++,
        x, y,
        lines: newLines,
        opacity: 1,
        createdAt: now,
        isFading: false
      });

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(renderLoop);

      if (healTimeout.current) clearTimeout(healTimeout.current);
      healTimeout.current = setTimeout(() => {
        cracksRef.current.forEach(c => c.isFading = true);
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(renderLoop);
      }, CONFIG.healDelay);

  }, [renderLoop]);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handler = (e: MouseEvent) => spawnCrack(e.clientX, e.clientY);
    target.addEventListener("click", handler);
    return () => target.removeEventListener("click", handler);
  }, [targetRef, spawnCrack]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const target = targetRef.current;
    if (!canvas || !target) return;

    const updateSize = () => {
      const rect = target.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      if (cracksRef.current.length > 0) {
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(renderLoop);
      }
    };
    
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(target);
    
    return () => ro.disconnect();
  }, [targetRef, renderLoop]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }} 
    />
  );
}