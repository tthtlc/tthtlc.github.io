document.addEventListener(contextmenu, function(event) { event.preventDefault(); });

const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waveCount = 3;  // Number of wave layers
const pointsPerWave = 150;
const waves = [];

for (let j = 0; j < waveCount; j++) {
    const points = [];
    const waveHeight = 100 + Math.random() * 50;
    const waveSpeed = 0.01 + Math.random() * 0.02;

    for (let i = 0; i < pointsPerWave; i++) {
        points.push({
            x: (i / (pointsPerWave - 1)) * canvas.width,
            y: canvas.height / 2,
            baseY: canvas.height / 2,
            offset: Math.random() * 1000
        });
    }

    waves.push({ points, waveHeight, waveSpeed });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(wave.points[0].x, wave.points[0].y);

        for (let i = 1; i < wave.points.length; i++) {
            const point = wave.points[i];
            point.y = point.baseY + Math.sin((i + wave.waveSpeed * point.offset) * 0.05) * wave.waveHeight;
            ctx.lineTo(point.x, point.y);
        }

        // Change color and transparency for each wave
        ctx.strokeStyle = `rgba(255, 165, 0, ${0.3 / (index + 1)})`;  // Orangish color with decreasing opacity
        ctx.lineWidth = 3;
        ctx.stroke();
    });

    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    waves.forEach(wave => {
        for (let i = 0; i < wave.points.length; i++) {
            wave.points[i].x = (i / (pointsPerWave - 1)) * canvas.width;
            wave.points[i].baseY = canvas.height / 2;
        }
    });
});

