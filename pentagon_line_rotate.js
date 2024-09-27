document.addEventListener(contextmenu, function(event) { event.preventDefault(); });
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const nPoints = 60; // Number of points to place along the pentagon
const sideLength = 300; // Length of each pentagon side
let step = 1;
let rotationAngle = 0; // Initialize rotation angle

function getPoints() {
    const points = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const rotationRadians = rotationAngle * Math.PI / 180; // Convert degrees to radians

    // Pentagon vertices
    const vertices = [];
    const angleIncrement = (2 * Math.PI) / 5; // 5 sides for a pentagon
    for (let i = 0; i < 5; i++) {
        const angle = i * angleIncrement - Math.PI / 2; // Start from the top
        const x = centerX + sideLength * Math.cos(angle) / 2;
        const y = centerY + sideLength * Math.sin(angle) / 2;
        vertices.push({ x, y });
    }

    // Divide pentagon perimeter into nPoints
    for (let i = 0; i < nPoints; i++) {
        const t = i / nPoints;
        let x, y;
        const edgeIndex = Math.floor(t * 5); // 5 edges for pentagon
        const tEdge = (t * 5) - edgeIndex;
        const vertex1 = vertices[edgeIndex];
        const vertex2 = vertices[(edgeIndex + 1) % 5];

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

