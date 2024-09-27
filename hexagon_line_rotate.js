document.addEventListener("contextmenu", function(event) { event.preventDefault(); });
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const nPoints = 60; // Number of points to place along the hexagon
const sideLength = 150; // Length of each hexagon side
let step = 1;
let rotationAngle = 0; // Initialize rotation angle

function getPoints() {
    const points = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const rotationRadians = rotationAngle * Math.PI / 180; // Convert degrees to radians

    // Hexagon vertices (calculated in polar coordinates)
    const vertices = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = centerX + sideLength * Math.cos(angle);
        const y = centerY + sideLength * Math.sin(angle);
        vertices.push({ x, y });
    }

    // Divide hexagon perimeter into nPoints
    for (let i = 0; i < nPoints; i++) {
        const t = i / nPoints;
        let x, y;
        if (t < 1 / 6) {
            // First edge (vertex 0 to vertex 1)
            const tEdge = t * 6;
            x = (1 - tEdge) * vertices[0].x + tEdge * vertices[1].x;
            y = (1 - tEdge) * vertices[0].y + tEdge * vertices[1].y;
        } else if (t < 2 / 6) {
            // Second edge (vertex 1 to vertex 2)
            const tEdge = (t - 1 / 6) * 6;
            x = (1 - tEdge) * vertices[1].x + tEdge * vertices[2].x;
            y = (1 - tEdge) * vertices[1].y + tEdge * vertices[2].y;
        } else if (t < 3 / 6) {
            // Third edge (vertex 2 to vertex 3)
            const tEdge = (t - 2 / 6) * 6;
            x = (1 - tEdge) * vertices[2].x + tEdge * vertices[3].x;
            y = (1 - tEdge) * vertices[2].y + tEdge * vertices[3].y;
        } else if (t < 4 / 6) {
            // Fourth edge (vertex 3 to vertex 4)
            const tEdge = (t - 3 / 6) * 6;
            x = (1 - tEdge) * vertices[3].x + tEdge * vertices[4].x;
            y = (1 - tEdge) * vertices[3].y + tEdge * vertices[4].y;
        } else if (t < 5 / 6) {
            // Fifth edge (vertex 4 to vertex 5)
            const tEdge = (t - 4 / 6) * 6;
            x = (1 - tEdge) * vertices[4].x + tEdge * vertices[5].x;
            y = (1 - tEdge) * vertices[4].y + tEdge * vertices[5].y;
        } else {
            // Sixth edge (vertex 5 to vertex 0)
            const tEdge = (t - 5 / 6) * 6;
            x = (1 - tEdge) * vertices[5].x + tEdge * vertices[0].x;
            y = (1 - tEdge) * vertices[5].y + tEdge * vertices[0].y;
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

