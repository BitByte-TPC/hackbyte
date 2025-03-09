"use client";
import React, { useRef, useEffect } from "react";
import tape from "@/public/HomePageLogo/tape.svg";

const BannerAnim = () => {
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const scale = Math.min(window.devicePixelRatio || 1, 1.5);
        const aspectRatio = 1616 / 500;
        const logicalWidth = window.innerWidth * 1.2;
        const newLogicalHeight = logicalWidth / aspectRatio;

        canvas.width = logicalWidth * scale;
        canvas.height = newLogicalHeight * scale;
        canvas.style.width = `${logicalWidth}px`;
        canvas.style.height = `${newLogicalHeight}px`;

        ctx.scale(scale, scale);

        const tearVariation = 25;
        const tearSegments = 30;
        const animationSpeed = 4;
        const healingSpeed = 0.1;
        const maxSeparation = 70;
        const maxTiltAngle = 4;
        const lineWidth = 35;
        const svgScale = logicalWidth / 1616;
        const ribbonWidth = 400 * svgScale;
        const diffinHeight = (newLogicalHeight - ribbonWidth) / 2;
        const gridColWidth = 30;

        async function loadSVGasPath2D(url) {
            try {
                const response = await fetch(url);
                const svgText = await response.text();
                const blob = new Blob([svgText], { type: "image/svg+xml" });
                const blobURL = URL.createObjectURL(blob);
                const img = new Image();

                return new Promise((resolve, reject) => {
                    img.onload = () => resolve({ path: new Path2D(svgText), image: img, url: blobURL });
                    img.onerror = () => reject(new Error("Failed to load SVG"));
                    img.src = blobURL;
                });
            } catch (error) {
                console.error("Error loading SVG:", error);
                throw error;
            }
        }

        async function loadSVG() {
            try {
                const svgData = await loadSVGasPath2D(tape.src);
                setupTearEffect(svgData.image);
                URL.revokeObjectURL(svgData.url);
            } catch (error) {
                console.warn("Using fallback image:", error);
            }
        }

        loadSVG();

        function setupTearEffect(img) {
            const activeColumns = {};
            let currentColumn = null;
            let previousColumn = null;
            let isHovering = false;
            let animationRunning = false;

            const imgWidth = img.width * svgScale;
            const imgHeight = img.height * svgScale;
            const centerX = (logicalWidth - imgWidth) / 2;
            const centerY = (newLogicalHeight - imgHeight) / 2;

            const originalCanvas = document.createElement("canvas");
            originalCanvas.width = canvas.width;
            originalCanvas.height = canvas.height;
            const originalCtx = originalCanvas.getContext("2d");
            originalCtx.scale(scale, scale);
            originalCtx.drawImage(img, centerX, centerY, imgWidth, imgHeight);

            ctx.drawImage(img, centerX, centerY, imgWidth, imgHeight);

            canvas.addEventListener("mousemove", (e) => {
                const rect = canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const colX = Math.floor(mouseX / gridColWidth);
                const colKey = `col_${colX}`;

                previousColumn = currentColumn;
                currentColumn = colKey;

                const anyActiveTears = Object.keys(activeColumns).some((key) => {
                    const tear = activeColumns[key];
                    return !(tear.animationPhase === "healing" && tear.healingProgress >= 1);
                });

                if (isHovering && previousColumn !== currentColumn && !anyActiveTears) {
                    if (previousColumn && activeColumns[previousColumn]) {
                        activeColumns[previousColumn].healing = true;
                    }

                    if (!activeColumns[colKey]) {
                        const tearCenterX = colX * gridColWidth + gridColWidth / 2;
                        const tearPoints = [];

                        for (let i = 0; i <= tearSegments; i++) {
                            const y = (newLogicalHeight / tearSegments) * i;
                            const variance = tearVariation * Math.sin((i / tearSegments) * Math.PI);
                            const x = tearCenterX + (Math.random() * variance * 2 - variance);
                            tearPoints.push({ x, y, originalX: x });
                        }

                        const leftTearPath = new Path2D();
                        leftTearPath.moveTo(0, 0);
                        tearPoints.forEach(point => leftTearPath.lineTo(point.x, point.y));
                        leftTearPath.lineTo(0, newLogicalHeight);
                        leftTearPath.closePath();

                        const rightTearPath = new Path2D();
                        rightTearPath.moveTo(logicalWidth, 0);
                        tearPoints.forEach(point => rightTearPath.lineTo(point.x, point.y));
                        rightTearPath.lineTo(logicalWidth, newLogicalHeight);
                        rightTearPath.closePath();

                        activeColumns[colKey] = {
                            centerX: tearCenterX,
                            points: tearPoints,
                            leftPath: leftTearPath,
                            rightPath: rightTearPath,
                            animationProgress: 0,
                            healing: false,
                            healingProgress: 0,
                            separationAmount: 0,
                            tiltAngle: 0,
                            animationPhase: "tearing",
                        };
                    } else {
                        activeColumns[colKey].healing = false;
                        activeColumns[colKey].animationPhase = "tearing";
                        if (activeColumns[colKey].healingProgress > 0) {
                            activeColumns[colKey].animationProgress = 1 - activeColumns[colKey].healingProgress;
                            activeColumns[colKey].healingProgress = 0;
                        }
                    }

                    if (!animationRunning) {
                        animationRunning = true;
                        requestAnimationFrame(drawScene);
                    }
                }
            });

            canvas.addEventListener("mouseenter", () => {
                isHovering = true;
            });

            canvas.addEventListener("mouseleave", () => {
                isHovering = false;
                Object.keys(activeColumns).forEach((key) => {
                    if (activeColumns[key]) {
                        activeColumns[key].healing = true;
                    }
                });

                if (!animationRunning) {
                    animationRunning = true;
                    requestAnimationFrame(drawScene);
                }
            });

            function drawScene() {
                let needsMoreFrames = false;

                ctx.clearRect(0, 0, logicalWidth, newLogicalHeight);
                ctx.drawImage(originalCanvas, 0, 0, logicalWidth, newLogicalHeight);

                Object.keys(activeColumns).forEach((key) => {
                    const tear = activeColumns[key];

                    if (tear.healing) {
                        if (tear.animationPhase === "tearing" || tear.animationPhase === "torn") {
                            tear.animationPhase = "healing";
                            tear.healingProgress = 0;
                        }

                        if (tear.healingProgress < 1) {
                            tear.healingProgress += healingSpeed;
                            needsMoreFrames = true;
                            tear.separationAmount = maxSeparation * (1 - tear.healingProgress);
                            tear.tiltAngle = maxTiltAngle * (1 - tear.healingProgress);

                            if (tear.healingProgress >= 1) {
                                tear.healingProgress = 1;
                                tear.separationAmount = 0;
                                tear.tiltAngle = 0;
                            }
                        }
                    } else {
                        if (tear.animationPhase === "tearing" && tear.animationProgress < 1) {
                            tear.animationProgress += animationSpeed / 30;
                            needsMoreFrames = true;
                            tear.separationAmount = maxSeparation * tear.animationProgress;
                            tear.tiltAngle = maxTiltAngle * tear.animationProgress;

                            if (tear.animationProgress >= 1) {
                                tear.animationProgress = 1;
                                tear.separationAmount = maxSeparation;
                                tear.tiltAngle = maxTiltAngle;
                                tear.animationPhase = "torn";
                            }
                        }
                    }

                    if (tear.animationPhase === "healing" && tear.healingProgress >= 1) {
                        return;
                    }

                    ctx.clearRect(0, 0, logicalWidth, newLogicalHeight);
                    const tearProgress = tear.animationPhase === "healing" ? 1 - tear.healingProgress : tear.animationProgress;
                    const activePoints = Math.ceil(tear.points.length * tearProgress);

                    const leftCanvas = document.createElement("canvas");
                    leftCanvas.width = canvas.width;
                    leftCanvas.height = canvas.height;
                    const leftCtx = leftCanvas.getContext("2d");
                    leftCtx.scale(scale, scale);

                    const rightCanvas = document.createElement("canvas");
                    rightCanvas.width = canvas.width;
                    rightCanvas.height = canvas.height;
                    const rightCtx = rightCanvas.getContext("2d");
                    rightCtx.scale(scale, scale);

                    const leftActivePath = new Path2D();
                    const rightActivePath = new Path2D();

                    leftActivePath.moveTo(0, 0);
                    rightActivePath.moveTo(logicalWidth, 0);

                    for (let i = 0; i < tear.points.length; i++) {
                        const point = tear.points[i];
                        if (i <= activePoints) {
                            leftActivePath.lineTo(point.x, point.y);
                            rightActivePath.lineTo(point.x, point.y);
                        } else {
                            const lastActive = tear.points[Math.min(activePoints, tear.points.length - 1)];
                            leftActivePath.lineTo(lastActive.x, point.y);
                            rightActivePath.lineTo(lastActive.x, point.y);
                        }
                    }

                    leftActivePath.lineTo(0, newLogicalHeight);
                    leftActivePath.closePath();

                    rightActivePath.lineTo(logicalWidth, newLogicalHeight);
                    rightActivePath.closePath();

                    leftCtx.save();
                    leftCtx.clip(leftActivePath);
                    leftCtx.drawImage(img, centerX, centerY, imgWidth, imgHeight);
                    leftCtx.restore();

                    rightCtx.save();
                    rightCtx.clip(rightActivePath);
                    rightCtx.drawImage(img, centerX, centerY, imgWidth, imgHeight);
                    rightCtx.restore();

                    const baseSep = tear.separationAmount / 2;
                    const tiltAngleRad = (tear.tiltAngle * Math.PI) / 180;

                    ctx.clearRect(0, 0, logicalWidth, newLogicalHeight);

                    ctx.save();
                    ctx.translate(tear.centerX + baseSep, newLogicalHeight / 2);
                    ctx.rotate(tiltAngleRad);
                    ctx.drawImage(rightCanvas, -tear.centerX, -newLogicalHeight / 2, logicalWidth, newLogicalHeight);
                    ctx.restore();

                    ctx.save();
                    ctx.translate(tear.centerX - baseSep, newLogicalHeight / 2);
                    ctx.rotate(-tiltAngleRad);
                    ctx.drawImage(leftCanvas, -tear.centerX, -newLogicalHeight / 2, logicalWidth, newLogicalHeight);
                    ctx.restore();

                    ctx.save();

                    if (activePoints > 0) {
                        const leftEdge = new Path2D();
                        let startPointIndex = 0;
                        while (startPointIndex < activePoints && tear.points[startPointIndex].y < diffinHeight) {
                            startPointIndex++;
                        }

                        let endPointIndex = activePoints - 1;
                        while (endPointIndex > 0 && tear.points[endPointIndex].y > newLogicalHeight - diffinHeight) {
                            endPointIndex--;
                        }

                        if (startPointIndex < activePoints && endPointIndex >= 0 && startPointIndex <= endPointIndex) {
                            const firstPoint = tear.points[startPointIndex];
                            const yFirst = firstPoint.y - newLogicalHeight / 2;
                            const leftXFirst = firstPoint.x - baseSep;
                            const leftRotatedXFirst = tear.centerX - baseSep + Math.cos(-tiltAngleRad) * (leftXFirst - (tear.centerX - baseSep)) - Math.sin(-tiltAngleRad) * yFirst;
                            const leftRotatedYFirst = newLogicalHeight / 2 + Math.sin(-tiltAngleRad) * (leftXFirst - (tear.centerX - baseSep)) + Math.cos(-tiltAngleRad) * yFirst;

                            leftEdge.moveTo(leftRotatedXFirst, leftRotatedYFirst);

                            for (let i = startPointIndex + 1; i <= endPointIndex; i++) {
                                const point = tear.points[i];
                                const y = point.y - newLogicalHeight / 2;
                                const leftX = point.x - baseSep;
                                const leftRotatedX = tear.centerX - baseSep + Math.cos(-tiltAngleRad) * (leftX - (tear.centerX - baseSep)) - Math.sin(-tiltAngleRad) * y;
                                const leftRotatedY = newLogicalHeight / 2 + Math.sin(-tiltAngleRad) * (leftX - (tear.centerX - baseSep)) + Math.cos(-tiltAngleRad) * y;

                                leftEdge.lineTo(leftRotatedX, leftRotatedY);
                            }
                        }

                        const rightEdge = new Path2D();

                        if (startPointIndex < activePoints && endPointIndex >= 0 && startPointIndex <= endPointIndex) {
                            const firstPoint = tear.points[startPointIndex];
                            const yFirst = firstPoint.y - newLogicalHeight / 2;
                            const rightXFirst = firstPoint.x + baseSep;
                            const rightRotatedXFirst = tear.centerX + baseSep + Math.cos(tiltAngleRad) * (rightXFirst - (tear.centerX + baseSep)) - Math.sin(tiltAngleRad) * yFirst;
                            const rightRotatedYFirst = newLogicalHeight / 2 + Math.sin(tiltAngleRad) * (rightXFirst - (tear.centerX + baseSep)) + Math.cos(tiltAngleRad) * yFirst;

                            rightEdge.moveTo(rightRotatedXFirst, rightRotatedYFirst);

                            for (let i = startPointIndex + 1; i <= endPointIndex; i++) {
                                const point = tear.points[i];
                                const y = point.y - newLogicalHeight / 2;
                                const rightX = point.x + baseSep;
                                const rightRotatedX = tear.centerX + baseSep + Math.cos(tiltAngleRad) * (rightX - (tear.centerX + baseSep)) - Math.sin(tiltAngleRad) * y;
                                const rightRotatedY = newLogicalHeight / 2 + Math.sin(tiltAngleRad) * (rightX - (tear.centerX + baseSep)) + Math.cos(tiltAngleRad) * y;

                                rightEdge.lineTo(rightRotatedX, rightRotatedY);
                            }

                            ctx.strokeStyle = "rgba(16, 16, 16, 0.5)";
                            ctx.lineWidth = lineWidth;
                            ctx.stroke(rightEdge);
                        }
                    }

                    ctx.restore();
                });

                if (needsMoreFrames || isHovering) {
                    requestAnimationFrame(drawScene);
                } else {
                    animationRunning = false;
                }
            }
        }
    }, []);

    return (
        <div
            className="flex w-full justify-center items-center overflow-visible md:w-full md:pt-16 lg:scale-100 md:scale-[1.3] scale-[2] pt-40"
        >
            <canvas
                id="tearCanvas"
                width="1280"
                height="500"
                className="rotate-[-10deg]"
                ref={canvasRef}
            ></canvas>
        </div>
    );
};

export default BannerAnim;
