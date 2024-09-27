document.addEventListener("contextmenu", function(event) { event.preventDefault(); });
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const nPoints = 40; // Number of points to place along the square
const outerSideLength = 300; // Length of each outer square side
const innerSideLength = 150; // Length of each inner square side
let step = 1;
let outerRotationAngle = 0; // Initialize outer square rotation angle (anticlockwise)
let innerRotationAngle = 0; // Initialize inner square rotation angle (clockwise)

function getPoints(sideLength, rotationAngle, clockwise = true) {
    const points = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const rotationRadians = (rotationAngle * Math.PI) / 180 * (clockwise ? 1 : -1); // Convert degrees to radians

    // Square vertices
    const vertices = [
        { x: centerX - sideLength / 2, y: centerY - sideLength / 2 }, // Top left
        { x: centerX + sideLength / 2, y: centerY - sideLength / 2 }, // Top right
        { x: centerX + sideLength / 2, y: centerY + sideLength / 2 }, // Bottom right
        { x: centerX - sideLength / 2, y: centerY + sideLength / 2 }  // Bottom left
    ];

    // Divide square perimeter into nPoints
    for (let i = 0; i < nPoints; i++) {
        const t = i / nPoints;
        let x, y;
        const edgeIndex = Math.floor(t * 4); // 4 edges for square
        const tEdge = (t * 4) - edgeIndex;
        const vertex1 = vertices[edgeIndex];
        const vertex2 = vertices[(edgeIndex + 1) % 4];

        // Interpolate between two vertices of the current edge
        x = (1 - tEdge) * vertex1.x + tEdge * vertex2.x;
        y = (1 - tEdge) * vertex1.y + tEdge * vertex2.y;

        // Apply rotation
        const rotatedX = centerX + (x - centerX) * Math.cos(rotationRadians) - (y - centerY) * Math.sin(rotationRadians);
        const rotatedY = centerY + (x - centerX) * Math.sin(rotationRadians) + (y - centerY) * Math.cos(rotationRadians);

        points.push({ x: rotatedX, y: rotatedY });
    }

    return points;
}

function drawPoints(points) {
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
    // Get points for outer square (anticlockwise)
    const outerPoints = getPoints(outerSideLength, outerRotationAngle, false);

    // Get points for inner square (clockwise)
    const innerPoints = getPoints(innerSideLength, innerRotationAngle, true);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Draw and animate outer square
    drawPoints(outerPoints);
    drawLines(outerPoints, step);

    // Draw and animate inner square
    drawPoints(innerPoints);
    drawLines(innerPoints, step);

    step = (step % (nPoints - 1)) + 1; // Increment step
    outerRotationAngle += 10; // Rotate outer square anticlockwise
    innerRotationAngle += 10; // Rotate inner square clockwise

    setTimeout(animate, 200); // Control animation speed
}

animate();

