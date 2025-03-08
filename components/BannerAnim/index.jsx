"use client";
import React, { useRef, useEffect } from "react";
import tape from "@/public/HomePageLogo/tape.svg";

const BannerAnim = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Handle high DPI displays
        const scale = Math.min(window.devicePixelRatio || 1, 1.5);
        const aspectRatio = 1616 / 500;

        const logicalWidth = window.innerWidth * 1.2;
        const newLogicalHeight = logicalWidth / aspectRatio;

        canvas.width = logicalWidth * scale;
        canvas.height = newLogicalHeight * scale;
        canvas.style.width = logicalWidth + "px";
        canvas.style.height = newLogicalHeight + "px";

        ctx.scale(scale, scale);

        // Parameters for tear effect
        const tearVariation = 25;
        const tearSegments = 30;
        const animationSpeed = 4;
        const healingSpeed = 0.1;
        const maxSeparation = 70;
        const maxTiltAngle = 4;
        const lineWidth = 35;

        // Scale factor for the SVG (1.5x larger)
        const svgScale = logicalWidth / 1616;
        const ribbonWidth = 400*svgScale;
        const diffinHeight = (newLogicalHeight - ribbonWidth) / 2;
        console.log(diffinHeight);

        // Function to load SVG directly as a Path2D
        async function loadSVGasPath2D(url) {
            console.log("Loading SVG:", url);
            try {
                const response = await fetch(url);
                const svgText = await response.text();

                // Create a Blob from the SVG text
                const blob = new Blob([svgText], { type: "image/svg+xml" });
                const blobURL = URL.createObjectURL(blob);

                // Load SVG as image first (needed for drawing)
                const img = new Image();

                return new Promise((resolve, reject) => {
                    img.onload = function () {
                        // Create a Path2D from the SVG
                        const svgPath = new Path2D(svgText);
                        resolve({ path: svgPath, image: img, url: blobURL });
                    };

                    img.onerror = function () {
                        reject(new Error("Failed to load SVG"));
                    };

                    img.src = blobURL;
                });
            } catch (error) {
                console.error("Error loading SVG:", error);
                throw error;
            }
        }

        // Load SVG or fallback
        let svgData;
        async function loadSVG() {
            try {
                svgData = await loadSVGasPath2D(tape.src);
            } catch (error) {
                console.warn("Using fallback image:", error);
            }

            // Set up the tear effect with the image
            setupTearEffect(svgData.image);

            // Clean up blob URL if it exists
            if (svgData.url) {
                URL.revokeObjectURL(svgData.url);
            }
        }

        loadSVG();

        function setupTearEffect(img) {
            // Grid to track active tears
            const activeColumns = {};
            let currentColumn = null;
            let previousColumn = null;
            let isHovering = false;
            let animationRunning = false;
            const gridColWidth = 30;

            // Calculate dimensions for centered and scaled image
            const imgWidth = img.width * svgScale;
            const imgHeight = img.height * svgScale;
            const centerX = (logicalWidth - imgWidth) / 2;
            const centerY = (newLogicalHeight - imgHeight) / 2;

            // Create offscreen canvas for original image
            const originalCanvas = document.createElement("canvas");
            originalCanvas.width = canvas.width;
            originalCanvas.height = canvas.height;
            const originalCtx = originalCanvas.getContext("2d");
            originalCtx.scale(scale, scale);

            // Draw the image centered and scaled
            originalCtx.drawImage(img, centerX, centerY, imgWidth, imgHeight);

            // Set up the main canvas with the image
            ctx.drawImage(img, centerX, centerY, imgWidth, imgHeight);

            // Track mouse movements
            canvas.addEventListener("mousemove", function (e) {
                const rect = canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;

                // Determine which column the mouse is in
                const colX = Math.floor(mouseX / gridColWidth);
                const colKey = `col_${colX}`;

                previousColumn = currentColumn;
                currentColumn = colKey;

                // Check if any tears are still active
                const anyActiveTears = Object.keys(activeColumns).some((key) => {
                    const tear = activeColumns[key];
                    return !(
                        tear.animationPhase === "healing" && tear.healingProgress >= 1
                    );
                });

                // If moved to a new column and no active tears exist
                if (isHovering && previousColumn !== currentColumn && !anyActiveTears) {
                    // Heal previous tear if it exists
                    if (previousColumn && activeColumns[previousColumn]) {
                        activeColumns[previousColumn].healing = true;
                    }

                    // Create or reactivate a tear
                    if (!activeColumns[colKey]) {
                        // Generate a path for the tear using Path2D
                        const tearCenterX = colX * gridColWidth + gridColWidth / 2;
                        const tearPoints = [];

                        // Create jagged tear points
                        for (let i = 0; i <= tearSegments; i++) {
                            const y = (newLogicalHeight / tearSegments) * i;
                            const variance =
                                tearVariation * Math.sin((i / tearSegments) * Math.PI);
                            const x = tearCenterX + (Math.random() * variance * 2 - variance);
                            tearPoints.push({ x, y, originalX: x });
                        }

                        // Create tear path
                        const leftTearPath = new Path2D();
                        leftTearPath.moveTo(0, 0);
                        for (const point of tearPoints) {
                            leftTearPath.lineTo(point.x, point.y);
                        }
                        leftTearPath.lineTo(0, newLogicalHeight);
                        leftTearPath.closePath();

                        const rightTearPath = new Path2D();
                        rightTearPath.moveTo(logicalWidth, 0);
                        for (const point of tearPoints) {
                            rightTearPath.lineTo(point.x, point.y);
                        }
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
                        // Reactivate existing tear
                        activeColumns[colKey].healing = false;
                        activeColumns[colKey].animationPhase = "tearing";

                        // If healing, reverse from current state
                        if (activeColumns[colKey].healingProgress > 0) {
                            activeColumns[colKey].animationProgress =
                                1 - activeColumns[colKey].healingProgress;
                            activeColumns[colKey].healingProgress = 0;
                        }
                    }

                    // Start animation if needed
                    if (!animationRunning) {
                        animationRunning = true;
                        requestAnimationFrame(drawScene);
                    }
                }
            });

            canvas.addEventListener("mouseenter", function () {
                isHovering = true;
            });

            canvas.addEventListener("mouseleave", function () {
                isHovering = false;

                // Heal all tears when mouse leaves
                Object.keys(activeColumns).forEach((key) => {
                    if (activeColumns[key]) {
                        activeColumns[key].healing = true;
                    }
                });

                // Start animation if needed
                if (!animationRunning) {
                    animationRunning = true;
                    requestAnimationFrame(drawScene);
                }
            });

            // Draw the scene with tears using Path2D
            function drawScene() {
                let needsMoreFrames = false;

                // Clear canvas with transparency
                ctx.clearRect(0, 0, logicalWidth, newLogicalHeight);

                // Draw the original image as base
                ctx.drawImage(originalCanvas, 0, 0, logicalWidth, newLogicalHeight);

                // Process each active column tear
                Object.keys(activeColumns).forEach((key) => {
                    const tear = activeColumns[key];

                    // Update animation state
                    if (tear.healing) {
                        // Healing animation
                        if (
                            tear.animationPhase === "tearing" ||
                            tear.animationPhase === "torn"
                        ) {
                            tear.animationPhase = "healing";
                            tear.healingProgress = 0;
                        }

                        if (tear.healingProgress < 1) {
                            tear.healingProgress += healingSpeed;
                            needsMoreFrames = true;

                            // Update effects during healing
                            tear.separationAmount =
                                maxSeparation * (1 - tear.healingProgress);
                            tear.tiltAngle = maxTiltAngle * (1 - tear.healingProgress);

                            if (tear.healingProgress >= 1) {
                                tear.healingProgress = 1;
                                tear.separationAmount = 0;
                                tear.tiltAngle = 0;
                            }
                        }
                    } else {
                        // Tearing animation
                        if (
                            tear.animationPhase === "tearing" &&
                            tear.animationProgress < 1
                        ) {
                            tear.animationProgress += animationSpeed / 30;
                            needsMoreFrames = true;

                            // Update effects during tearing
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

                    // Skip drawing if fully healed
                    if (tear.animationPhase === "healing" && tear.healingProgress >= 1) {
                        return;
                    }

                    // Clear canvas for the tear effect
                    ctx.clearRect(0, 0, logicalWidth, newLogicalHeight);

                    // Create tear segments with Path2D
                    const tearProgress =
                        tear.animationPhase === "healing"
                            ? 1 - tear.healingProgress
                            : tear.animationProgress;

                    // Calculate active points based on tear progress
                    const activePoints = Math.ceil(tear.points.length * tearProgress);

                    // Create offscreen canvases for left and right sides
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

                    // Generate the tear paths for current animation state
                    const leftActivePath = new Path2D();
                    const rightActivePath = new Path2D();

                    leftActivePath.moveTo(0, 0);
                    rightActivePath.moveTo(logicalWidth, 0);

                    // Only use active points for the tear
                    for (let i = 0; i < tear.points.length; i++) {
                        const point = tear.points[i];
                        if (i <= activePoints) {
                            leftActivePath.lineTo(point.x, point.y);
                            rightActivePath.lineTo(point.x, point.y);
                        } else {
                            // For inactive points, use a straight line
                            const lastActive =
                                tear.points[Math.min(activePoints, tear.points.length - 1)];
                            leftActivePath.lineTo(lastActive.x, point.y);
                            rightActivePath.lineTo(lastActive.x, point.y);
                        }
                    }

                    leftActivePath.lineTo(0, newLogicalHeight);
                    leftActivePath.closePath();

                    rightActivePath.lineTo(logicalWidth, newLogicalHeight);
                    rightActivePath.closePath();

                    // Draw the original image with clipping paths
                    leftCtx.save();
                    leftCtx.clip(leftActivePath);
                    leftCtx.drawImage(img, centerX, centerY, imgWidth, imgHeight);
                    leftCtx.restore();

                    rightCtx.save();
                    rightCtx.clip(rightActivePath);
                    rightCtx.drawImage(img, centerX, centerY, imgWidth, imgHeight);
                    rightCtx.restore();

                    // Calculate the separation and tilt
                    const baseSep = tear.separationAmount / 2;
                    const tiltAngleRad = (tear.tiltAngle * Math.PI) / 180;

                    // Draw both sides with rotation and separation
                    ctx.clearRect(0, 0, logicalWidth, newLogicalHeight);

                    // Draw right side with rotation
                    ctx.save();
                    ctx.translate(tear.centerX + baseSep, newLogicalHeight / 2);
                    ctx.rotate(tiltAngleRad);
                    ctx.drawImage(
                        rightCanvas,
                        -tear.centerX,
                        -newLogicalHeight / 2,
                        logicalWidth,
                        newLogicalHeight
                    );
                    ctx.restore();

                    // Draw left side with rotation
                    ctx.save();
                    ctx.translate(tear.centerX - baseSep, newLogicalHeight / 2);
                    ctx.rotate(-tiltAngleRad);
                    ctx.drawImage(
                        leftCanvas,
                        -tear.centerX,
                        -newLogicalHeight / 2,
                        logicalWidth,
                        newLogicalHeight
                    );
                    ctx.restore();

                    // Add edge effects (highlights and shadows)
                    ctx.save();

                    // Only draw edge effects for active points
                    if (activePoints > 0) {
                        // Left edge highlight
                        ctx.beginPath();
                        const leftEdge = new Path2D();

                        // Start drawing the edge with a margin
                        let startPointIndex = 0;
                        while (
                            startPointIndex < activePoints &&
                            tear.points[startPointIndex].y < diffinHeight
                        ) {
                            startPointIndex++;
                        }

                        // End drawing the edge with a margin
                        let endPointIndex = activePoints - 1;
                        while (
                            endPointIndex > 0 &&
                            tear.points[endPointIndex].y > newLogicalHeight - diffinHeight
                        ) {
                            endPointIndex--;
                        }

                        if (
                            startPointIndex < activePoints &&
                            endPointIndex >= 0 &&
                            startPointIndex <= endPointIndex
                        ) {
                            const firstPoint = tear.points[startPointIndex];
                            const yFirst = firstPoint.y - newLogicalHeight / 2;

                            // Calculate rotated positions for left edge
                            const leftXFirst = firstPoint.x - baseSep;
                            const leftRotatedXFirst =
                                tear.centerX -
                                baseSep +
                                Math.cos(-tiltAngleRad) *
                                    (leftXFirst - (tear.centerX - baseSep)) -
                                Math.sin(-tiltAngleRad) * yFirst;
                            const leftRotatedYFirst =
                                newLogicalHeight / 2 +
                                Math.sin(-tiltAngleRad) *
                                    (leftXFirst - (tear.centerX - baseSep)) +
                                Math.cos(-tiltAngleRad) * yFirst;

                            leftEdge.moveTo(leftRotatedXFirst, leftRotatedYFirst);

                            for (let i = startPointIndex + 1; i <= endPointIndex; i++) {
                                const point = tear.points[i];
                                const y = point.y - newLogicalHeight / 2;

                                // Calculate rotated positions for left edge
                                const leftX = point.x - baseSep;
                                const leftRotatedX =
                                    tear.centerX -
                                    baseSep +
                                    Math.cos(-tiltAngleRad) * (leftX - (tear.centerX - baseSep)) -
                                    Math.sin(-tiltAngleRad) * y;
                                const leftRotatedY =
                                    newLogicalHeight / 2 +
                                    Math.sin(-tiltAngleRad) * (leftX - (tear.centerX - baseSep)) +
                                    Math.cos(-tiltAngleRad) * y;

                                leftEdge.lineTo(leftRotatedX, leftRotatedY);
                            }

                            // Set styles for the left edge highlight
                        //   ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"; // Shadow color
                        //   ctx.lineWidth = lineWidth; // Adjust as needed
                            //   ctx.stroke(leftEdge);
                        }

                        // Right edge shadow
                        const rightEdge = new Path2D();

                        if (
                            startPointIndex < activePoints &&
                            endPointIndex >= 0 &&
                            startPointIndex <= endPointIndex
                        ) {
                            const firstPoint = tear.points[startPointIndex];
                            const yFirst = firstPoint.y - newLogicalHeight / 2;

                            // Calculate rotated positions for right edge
                            const rightXFirst = firstPoint.x + baseSep;
                            const rightRotatedXFirst =
                                tear.centerX +
                                baseSep +
                                Math.cos(tiltAngleRad) *
                                    (rightXFirst - (tear.centerX + baseSep)) -
                                Math.sin(tiltAngleRad) * yFirst;
                            const rightRotatedYFirst =
                                newLogicalHeight / 2 +
                                Math.sin(tiltAngleRad) *
                                    (rightXFirst - (tear.centerX + baseSep)) +
                                Math.cos(tiltAngleRad) * yFirst;

                            rightEdge.moveTo(rightRotatedXFirst, rightRotatedYFirst);

                            for (let i = startPointIndex + 1; i <= endPointIndex; i++) {
                                const point = tear.points[i];
                                const y = point.y - newLogicalHeight / 2;

                                // Calculate rotated positions for right edge
                                const rightX = point.x + baseSep;
                                const rightRotatedX =
                                    tear.centerX +
                                    baseSep +
                                    Math.cos(tiltAngleRad) * (rightX - (tear.centerX + baseSep)) -
                                    Math.sin(tiltAngleRad) * y;
                                const rightRotatedY =
                                    newLogicalHeight / 2 +
                                    Math.sin(tiltAngleRad) * (rightX - (tear.centerX + baseSep)) +
                                    Math.cos(tiltAngleRad) * y;

                                rightEdge.lineTo(rightRotatedX, rightRotatedY);
                            }

                            // Set styles for the right edge shadow
                            ctx.strokeStyle = "rgba(16, 16, 16, 0.5)"; // Shadow color
                            ctx.lineWidth = lineWidth; // Adjust as needed
                            ctx.stroke(rightEdge);
                        }
                    }

                    ctx.restore();
                });

                // Continue animation if needed
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
            className="flex w-full justify-center items-center overflow-visible md:w-full md:pt-16  lg:scale-100 md:scale-[1.3] scale-[2] pt-40"
            style={{ aspectRatio: "2.1" }}
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
