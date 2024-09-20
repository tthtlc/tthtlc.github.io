const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const nPoints = 60; // Number of points to place along the square
const sideLength = 300; // Length of each square side
let step = 1;
let rotationAngle = 0; // Initialize rotation angle

function getPoints() {
    const points = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const halfSide = sideLength / 2;
    const rotationRadians = rotationAngle * Math.PI / 180; // Convert degrees to radians

    // Square vertices
    const vertices = [
        { x: centerX - halfSide, y: centerY - halfSide }, // Top-left
        { x: centerX + halfSide, y: centerY - halfSide }, // Top-right
        { x: centerX + halfSide, y: centerY + halfSide }, // Bottom-right
        { x: centerX - halfSide, y: centerY + halfSide }  // Bottom-left
    ];

    // Divide square perimeter into nPoints
    for (let i = 0; i < nPoints; i++) {
        const t = i / nPoints;
        let x, y;
        if (t < 1 / 4) {
            // First edge (top-left to top-right)
            const tEdge = t * 4;
            x = (1 - tEdge) * vertices[0].x + tEdge * vertices[1].x;
            y = (1 - tEdge) * vertices[0].y + tEdge * vertices[1].y;
        } else if (t < 1 / 2) {
            // Second edge (top-right to bottom-right)
            const tEdge = (t - 1 / 4) * 4;
            x = (1 - tEdge) * vertices[1].x + tEdge * vertices[2].x;
            y = (1 - tEdge) * vertices[1].y + tEdge * vertices[2].y;
        } else if (t < 3 / 4) {
            // Third edge (bottom-right to bottom-left)
            const tEdge = (t - 1 / 2) * 4;
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

function drawPoints(points) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';

    for (const point of points) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function drawLines(points, step) {
    ctx.strokeStyle = 'blue';

    for (let i = 0; i < points.length; i++) {
        const j = (i + step) % points.length;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
    }
}

function animate() {
    const points = getPoints();
    drawPoints(points);
    drawLines(points, step);
    step = (step % (nPoints - 1)) + 1; // Increment step from 1 to 59
    rotationAngle += 5; // Rotate by 5 degrees for the next frame

    setTimeout(animate, 200); // Control animation speed
}

animate();

