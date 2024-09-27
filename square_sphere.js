document.addEventListener("contextmenu", function(event) { event.preventDefault(); });
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const numDots = 100; // Number of points along each shape
const sphereRadius = 150; // Radius of the projected sphere (circle)
const squareSideLength = 200; // Side length of the square
const centerX = canvas.width / 2; // Fixed center X
const centerY = canvas.height / 2; // Fixed center Y
let rotationAngleSquare = 0;
let rotationAngleSphere = 0;

// Function to generate points along the edge of a sphere (2D projection of a 3D sphere)
function getSpherePoints(centerX, centerY, radius, rotationAngle, numDots) {
    const points = [];
    const rotationRadians = rotationAngle * Math.PI / 180; // Convert degrees to radians

    // Distribute points evenly around the circle (2D sphere projection)
    for (let i = 0; i < numDots; i++) {
        const theta = (2 * Math.PI * i) / numDots; // Angle for each point
        const x = centerX + radius * Math.cos(theta);
        const y = centerY + radius * Math.sin(theta);

        // Apply rotation to the points (for visualization)
        const rotatedX = centerX + (x - centerX) * Math.cos(rotationRadians) - (y - centerY) * Math.sin(rotationRadians);
        const rotatedY = centerY + (x - centerX) * Math.sin(rotationRadians) + (y - centerY) * Math.cos(rotationRadians);

        points.push({ x: rotatedX, y: rotatedY });
    }

    return points;
}

// Function to generate points along the edge of a square
function getSquarePoints(centerX, centerY, sideLength, rotationAngle, numDots) {
    const points = [];
    const halfSide = sideLength / 2;
    const rotationRadians = rotationAngle * Math.PI / 180; // Convert degrees to radians

    // Square vertices (top-left, top-right, bottom-right, bottom-left)
    const vertices = [
        { x: centerX - halfSide, y: centerY - halfSide }, // Top-left
        { x: centerX + halfSide, y: centerY - halfSide }, // Top-right
        { x: centerX + halfSide, y: centerY + halfSide }, // Bottom-right
        { x: centerX - halfSide, y: centerY + halfSide }  // Bottom-left
    ];

    // Divide square perimeter into numDots
    for (let i = 0; i < numDots; i++) {
        const t = i / numDots;
        let x, y;
        if (t < 1 / 4) {
            // First edge (top-left to top-right)
            const tEdge = t * 4;
            x = (1 - tEdge) * vertices[0].x + tEdge * vertices[1].x;
            y = (1 - tEdge) * vertices[0].y + tEdge * vertices[1].y;
        } else if (t < 2 / 4) {
            // Second edge (top-right to bottom-right)
            const tEdge = (t - 1 / 4) * 4;
            x = (1 - tEdge) * vertices[1].x + tEdge * vertices[2].x;
            y = (1 - tEdge) * vertices[1].y + tEdge * vertices[2].y;
        } else if (t < 3 / 4) {
            // Third edge (bottom-right to bottom-left)
            const tEdge = (t - 2 / 4) * 4;
            x = (1 - tEdge) * vertices[2].x + tEdge * vertices[3].x;
            y = (1 - tEdge) * vertices[2].y + tEdge * vertices[3].y;
        } else {
            // Fourth edge (bottom-left to top-left)
            const tEdge = (t - 3 / 4) * 4;
            x = (1 - tEdge) * vertices[3].x + tEdge * vertices[0].x;
            y = (1 - tEdge) * vertices[3].y + tEdge * vertices[0].y;
        }

        // Apply rotation
        const rotatedX = centerX + (x - centerX) * Math.cos(rotationRadians) - (y - centerY) * Math.sin(rotationRadians);
        const rotatedY = centerY + (x - centerX) * Math.sin(rotationRadians) + (y - centerY) * Math.cos(rotationRadians);

        points.push({ x: rotatedX, y: rotatedY });
    }

    return points;
}

// Function to draw lines between points of a sphere and a square
function drawLines(points1, points2) {
    ctx.strokeStyle = 'blue';
    for (let i = 0; i < points1.length; i++) {
        ctx.beginPath();
        ctx.moveTo(points1[i].x, points1[i].y);
        ctx.lineTo(points2[i].x, points2[i].y);
        ctx.stroke();
    }
}

// Function to animate the sphere and the square
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Get points for the sphere and the square
    const spherePoints = getSpherePoints(centerX, centerY, sphereRadius, rotationAngleSphere, numDots);
    const squarePoints = getSquarePoints(centerX, centerY, squareSideLength, rotationAngleSquare, numDots);

    // Draw lines between corresponding points of the sphere and square
    drawLines(spherePoints, squarePoints);

    // Update rotation angles
    rotationAngleSphere = (rotationAngleSphere + 2) % 360; // Rotate the sphere counterclockwise
    rotationAngleSquare = (rotationAngleSquare - 2) % 360; // Rotate the square clockwise

    requestAnimationFrame(animate); // Continue the animation
}

// Start the animation
animate();

