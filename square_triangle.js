document.addEventListener(contextmenu, function(event) { event.preventDefault(); });
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const numDots = 100; // Number of points along each shape
const triangleSideLength = 450; // Side length of the triangle
const squareSideLength = 200; // Side length of the square
const centerX = canvas.width / 2; // Fixed center X
const centerY = canvas.height / 2; // Fixed center Y
let rotationAngleTriangle = 0;
let rotationAngleSquare = 0;

// Function to generate points along the edge of a triangle
function getTrianglePoints(centerX, centerY, sideLength, rotationAngle, numDots) {
    const points = [];
    const rotationRadians = rotationAngle * Math.PI / 180; // Convert degrees to radians

    // Triangle vertices (equilateral triangle)
    const vertices = [
        { x: centerX, y: centerY - sideLength / Math.sqrt(3) }, // Top vertex
        { x: centerX - sideLength / 2, y: centerY + sideLength / (2 * Math.sqrt(3)) }, // Bottom left
        { x: centerX + sideLength / 2, y: centerY + sideLength / (2 * Math.sqrt(3)) }  // Bottom right
    ];

    // Divide triangle perimeter into numDots
    for (let i = 0; i < numDots; i++) {
        const t = i / numDots;
        let x, y;
        if (t < 1 / 3) {
            // First edge (vertex 0 to vertex 1)
            const tEdge = t * 3;
            x = (1 - tEdge) * vertices[0].x + tEdge * vertices[1].x;
            y = (1 - tEdge) * vertices[0].y + tEdge * vertices[1].y;
        } else if (t < 2 / 3) {
            // Second edge (vertex 1 to vertex 2)
            const tEdge = (t - 1 / 3) * 3;
            x = (1 - tEdge) * vertices[1].x + tEdge * vertices[2].x;
            y = (1 - tEdge) * vertices[1].y + tEdge * vertices[2].y;
        } else {
            // Third edge (vertex 2 to vertex 0)
            const tEdge = (t - 2 / 3) * 3;
            x = (1 - tEdge) * vertices[2].x + tEdge * vertices[0].x;
            y = (1 - tEdge) * vertices[2].y + tEdge * vertices[0].y;
        }

        // Apply rotation
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

// Function to draw lines between points of a triangle and a square
function drawLines(points1, points2) {
    ctx.strokeStyle = 'blue';
    for (let i = 0; i < points1.length; i++) {
        ctx.beginPath();
        ctx.moveTo(points1[i].x, points1[i].y);
        ctx.lineTo(points2[i].x, points2[i].y);
        ctx.stroke();
    }
}

// Function to animate the triangle and square
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Get points for the triangle and the square
    const trianglePoints = getTrianglePoints(centerX, centerY, triangleSideLength, rotationAngleTriangle, numDots);
    const squarePoints = getSquarePoints(centerX, centerY, squareSideLength, rotationAngleSquare, numDots);

    // Draw lines between corresponding points of the triangle and square
    drawLines(trianglePoints, squarePoints);

    // Update rotation angles
    rotationAngleTriangle = (rotationAngleTriangle + 2) % 360; // Rotate the triangle counterclockwise
    rotationAngleSquare = (rotationAngleSquare - 2) % 360; // Rotate the square clockwise

    requestAnimationFrame(animate); // Continue the animation
}

// Start the animation
animate();

