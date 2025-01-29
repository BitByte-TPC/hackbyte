// components/DotBackground.js
"use client";
import { useRef, useEffect } from "react";

const InteractiveBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const hexes = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let cw = window.innerWidth;
    let ch = window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;

    let offsetX, offsetY;

    const reOffset = () => {
      const BB = canvas.getBoundingClientRect();
      offsetX = BB.left;
      offsetY = BB.top;
    };

    const initHexes = () => {
      const hexRadius = 1.5;
      const hexPadding = 50;
      hexes.current = [];

      for (let y = hexRadius; y < ch; y += hexRadius * 2 + hexPadding) {
        for (let x = hexRadius; x < cw; x += hexRadius * 2 + hexPadding) {
          hexes.current.push({ startingX: x, startingY: y, x: x, y: y });
        }
      }
    };

    let mouseIsDown = false;
    let mx, my;
    const mouseRadius = 75;
    const mouseRadiusSquared = mouseRadius * mouseRadius;
    let ticktick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = "#848282";
      ctx.beginPath();

      hexes.current.forEach((h) => {
        ctx.moveTo(h.x, h.y);
        ctx.arc(h.x, h.y, 2, 0, Math.PI * 2);
      });

      ctx.closePath();
      ctx.fill();
    };

    const tick = () => {
      hexes.current.forEach((h) => {
        const dx = h.x - mx;
        const dy = h.y - my;

        if (mouseIsDown && dx * dx + dy * dy < mouseRadiusSquared) {
          h.x += dx / 30;
          h.y += dy / 30;
          ticktick++;
          if (ticktick > 20) {
            mouseIsDown = false;
            ticktick = 0;
          }
        } else if (h.x === h.startingX && h.y === h.startingY) {
          // Do nothing
        } else {
          const ddx = h.x - h.startingX;
          const ddy = h.y - h.startingY;
          h.x -= ddx / 20;
          h.y -= ddy / 20;
        }
      });

      draw();
      requestAnimationFrame(tick);
    };

    const handleMouseDown = (e) => {
      e.preventDefault();
      e.stopPropagation();

      mx = e.clientX - offsetX;
      my = e.clientY - offsetY;

      mouseIsDown = true;
      ticktick = 0;
    };

    const handleMouseUp = () => {
      mouseIsDown = false;
    };

    const handleResize = () => {
      cw = window.innerWidth;
      ch = window.innerHeight;
      canvas.width = cw;
      canvas.height = ch;
      initHexes();
      reOffset();
    };

    reOffset();
    initHexes();
    draw();
    requestAnimationFrame(tick);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -100,
          pointerEvents: "none",
        }}
        className="sm:px-12 py-8 px-1"
      />
      {children}
    </div>
  );
};

export default InteractiveBackground;
