document.addEventListener("contextmenu", function(event) { event.preventDefault(); });

const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const points = [];
const pointCount = 100;
const waveHeight = 100;
const waveSpeed = 0.02;

for (let i = 0; i < pointCount; i++) {
    points.push({
        x: (i / (pointCount - 1)) * canvas.width,
        y: canvas.height / 2,
        baseY: canvas.height / 2,
        offset: Math.random() * 1000
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        point.y = point.baseY + Math.sin((i + waveSpeed * point.offset) * 0.05) * waveHeight;
        ctx.lineTo(point.x, point.y);
    }

    ctx.strokeStyle = 'rgba(255, 165, 0, 0.8)';  // Orangish color
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < points.length; i++) {
        points[i].x = (i / (pointCount - 1)) * canvas.width;
        points[i].baseY = canvas.height / 2;
    }
});

