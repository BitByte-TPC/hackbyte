"use client";

import { useEffect, useRef, RefObject } from "react";

interface Props {
  targetRef: RefObject<HTMLDivElement | null>;
}

export default function CursorGeometry({ targetRef }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    const svg = svgRef.current;
    const group = groupRef.current;
    if (!target || !svg || !group) return;

    const handler = (e: MouseEvent) => {
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      /* Move the group to follow cursor */
      group.setAttribute("transform", `translate(${x} ${y})`);
    };

    target.addEventListener("mousemove", handler);
    return () => target.removeEventListener("mousemove", handler);
  }, [targetRef]);

  /* Sync viewBox on mount and resize */
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
    <svg
      ref={svgRef}
      className="cursor-geometry-svg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 32,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <g ref={groupRef} className="cursor-geometry-group">
        {/* Zig-zag glowing line */}
        <polyline
          points="0,-10 4,-6 -3,-1 5,2 -4,6 6,10 -2,14 4,18"
          stroke="rgba(230, 200, 255, 0.9)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          style={{
            filter:
              "drop-shadow(0 0 5px rgba(200, 150, 255, 0.7)) drop-shadow(0 0 12px rgba(180, 100, 255, 0.4))",
          }}
        />
      </g>
    </svg>
  );
}
