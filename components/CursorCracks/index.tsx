"use client";

import { useEffect, RefObject } from "react";

interface Props {
  targetRef: RefObject<HTMLDivElement | null>;
}

export default function CursorCracks({ targetRef }: Props) {
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const svgCursor = `
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <polyline points="20,10 24,14 17,19 25,22 16,26 26,30 18,34 24,38" stroke="rgba(180, 100, 255, 0.15)" stroke-width="6" fill="none" stroke-linecap="square" />
        <polyline points="20,10 24,14 17,19 25,22 16,26 26,30 18,34 24,38" stroke="rgba(200, 150, 255, 0.3)" stroke-width="3" fill="none" stroke-linecap="square" />
        <polyline points="20,10 24,14 17,19 25,22 16,26 26,30 18,34 24,38" stroke="rgba(230, 200, 255, 0.9)" stroke-width="1" fill="none" stroke-linecap="square" />
      </svg>
    `.replace(/\n/g, '').replace(/\s+/g, ' ').trim();


    const encodedSvg = encodeURIComponent(svgCursor);
    const cursorStyle = `url("data:image/svg+xml;charset=utf-8,${encodedSvg}") 20 20, auto`;


    target.style.cursor = cursorStyle;

    return () => {
      target.style.cursor = "none"; 
    };
  }, [targetRef]);


  return null;
}