const canvas = document.getElementById('dodecahedronCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const vertices = [];
const edges = [];

// Golden ratio for dodecahedron construction
const phi = (1 + Math.sqrt(5)) / 2;

// Add vertices
vertices.push([1, 1, 1]);
vertices.push([1, 1, -1]);
vertices.push([1, -1, 1]);
vertices.push([1, -1, -1]);
vertices.push([-1, 1, 1]);
vertices.push([-1, 1, -1]);
vertices.push([-1, -1, 1]);
vertices.push([-1, -1, -1]);

vertices.push([0, 1 / phi, phi]);
vertices.push([0, 1 / phi, -phi]);
vertices.push([0, -1 / phi, phi]);
vertices.push([0, -1 / phi, -phi]);

vertices.push([1 / phi, phi, 0]);
vertices.push([1 / phi, -phi, 0]);
vertices.push([-1 / phi, phi, 0]);
vertices.push([-1 / phi, -phi, 0]);

vertices.push([phi, 0, 1 / phi]);
vertices.push([phi, 0, -1 / phi]);
vertices.push([-phi, 0, 1 / phi]);
vertices.push([-phi, 0, -1 / phi]);

// Add edges
const edgePairs = [
    [0, 8], [0, 12], [0, 16], [1, 9], [1, 13], [1, 17],
    [2, 10], [2, 12], [2, 16], [3, 11], [3, 13], [3, 17],
    [4, 8], [4, 14], [4, 18], [5, 9], [5, 15], [5, 19],
    [6, 10], [6, 14], [6, 18], [7, 11], [7, 15], [7, 19],
    [8, 12], [8, 14], [9, 13], [9, 15], [10, 12], [10, 14],
    [11, 13], [11, 15], [16, 18], [16, 17], [17, 19], [18, 19]
];

// Add edges from vertex pairs
for (const pair of edgePairs) {
    edges.push([vertices[pair[0]], vertices[pair[1]]]);
}

// Rotation parameters
let angleX = 0;
let angleY = 0;

// Project 3D point to 2D
function project3D(x, y, z) {
    const scale = 300;
    const distance = 3;
    const factor = scale / (distance + z);
    const x2d = x * factor + canvas.width / 2;
    const y2d = y * factor + canvas.height / 2;
    return [x2d, y2d];
}

// Rotate points in 3D
function rotateX(point, angle) {
    const [x, y, z] = point;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    return [x, y * cosA - z * sinA, y * sinA + z * cosA];
}

function rotateY(point, angle) {
    const [x, y, z] = point;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    return [x * cosA + z * sinA, y, -x * sinA + z * cosA];
}

// Draw the dodecahedron edges
function drawDodecahedron() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (const edge of edges) {
        const [p1, p2] = edge;
        
        // Apply rotation
        const rotatedP1 = rotateY(rotateX(p1, angleX), angleY);
        const rotatedP2 = rotateY(rotateX(p2, angleX), angleY);
        
        // Project to 2D
        const [x1, y1] = project3D(...rotatedP1);
        const [x2, y2] = project3D(...rotatedP2);
        
        // Draw line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// Animation loop
function animate() {
    angleX += 0.01;
    angleY += 0.01;
    drawDodecahedron();
    requestAnimationFrame(animate);
}

// Resize canvas when the window size changes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize and start animation
animate();

