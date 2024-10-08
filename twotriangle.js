document.addEventListener("contextmenu", function(event) { event.preventDefault(); });
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const sideLength = 100; // Length of each triangle side
let step = 1;

class Triangle {
    constructor(x, y) {
        this.centerX = x;
        this.centerY = y;
        this.rotationAngle = Math.random() * 360; // Start with a random rotation angle
        this.velocityX = (Math.random() - 0.5) * 4; // Random horizontal velocity
        this.velocityY = (Math.random() - 0.5) * 4; // Random vertical velocity
        this.rotationSpeed = (Math.random() - 0.5) * 5; // Random rotation speed
    }

    updatePosition() {
        // Update position with velocity
        this.centerX += this.velocityX;
        this.centerY += this.velocityY;

        // Bounce off the canvas edges
        if (this.centerX - sideLength / 2 < 0 || this.centerX + sideLength / 2 > canvas.width) {
            this.velocityX *= -1;
        }
        if (this.centerY - sideLength / 2 < 0 || this.centerY + sideLength / 2 > canvas.height) {
            this.velocityY *= -1;
        }

        // Update rotation angle
        this.rotationAngle = (this.rotationAngle + this.rotationSpeed) % 360;
    }

    getPoints() {
        const points = [];
        const rotationRadians = this.rotationAngle * Math.PI / 180; // Convert degrees to radians

        // Triangle vertices (equilateral triangle)
        const vertices = [
            { x: this.centerX, y: this.centerY - sideLength / Math.sqrt(3) }, // Top vertex
            { x: this.centerX - sideLength / 2, y: this.centerY + sideLength / (2 * Math.sqrt(3)) }, // Bottom left
            { x: this.centerX + sideLength / 2, y: this.centerY + sideLength / (2 * Math.sqrt(3)) }  // Bottom right
        ];

        // Rotate the triangle around its center
        for (const vertex of vertices) {
            const rotatedX = this.centerX + (vertex.x - this.centerX) * Math.cos(rotationRadians) - (vertex.y - this.centerY) * Math.sin(rotationRadians);
            const rotatedY = this.centerY + (vertex.x - this.centerX) * Math.sin(rotationRadians) + (vertex.y - this.centerY) * Math.cos(rotationRadians);
            points.push({ x: rotatedX, y: rotatedY });
        }

        return points;
    }

    draw() {
        const points = this.getPoints();
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 0, 255, 0.3)'; // Semi-transparent fill for the triangle
        ctx.fill();
    }
}

// Create two triangles at random starting positions
const triangle1 = new Triangle(Math.random() * canvas.width, Math.random() * canvas.height);
const triangle2 = new Triangle(Math.random() * canvas.width, Math.random() * canvas.height);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update positions and rotations of both triangles
    triangle1.updatePosition();
    triangle2.updatePosition();

    // Draw both triangles
    triangle1.draw();
    triangle2.draw();

    requestAnimationFrame(animate); // Continue the animation
}

animate();

