const ANGLE = 60;
const START_X = 100;
const START_Y = 200;
const START_ANGLE = 0;
let START_LENGTH = 600;
const COLORS = ["black", "blue", "green", "magenta", "cyan", "pink", "red"];
let colorIndex = 0;
let iter = 6;  // Hardcoded the iterations value to 6
let x = START_X, y = START_Y, angle = START_ANGLE;

const canvas = document.getElementById("gosperCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.8;

function drawLine(length) {
    ctx.strokeStyle = COLORS[colorIndex];
    ctx.beginPath();
    ctx.moveTo(x, y);
    x += length * Math.cos(toRadians(angle));
    y += length * Math.sin(toRadians(angle));
    ctx.lineTo(x, y);
    ctx.stroke();
    colorIndex = (colorIndex + 1) % COLORS.length;
}

function toRadians(deg) {
    return (deg * Math.PI) / 180;
}

function curve(currIter, type, length) {
    if (currIter > 0) {
        length /= Math.sqrt(7);
        currIter--;
        if (type === 'a') {
            curve(currIter, 'a', length);
            angle += ANGLE;
            curve(currIter, 'b', length);
            angle += 2 * ANGLE;
            curve(currIter, 'b', length);
            angle -= ANGLE;
            curve(currIter, 'a', length);
            angle -= 2 * ANGLE;
            curve(currIter, 'a', length);
            curve(currIter, 'a', length);
            angle -= ANGLE;
            curve(currIter, 'b', length);
            angle += ANGLE;
        } else {
            angle -= ANGLE;
            curve(currIter, 'a', length);
            angle += ANGLE;
            curve(currIter, 'b', length);
            curve(currIter, 'b', length);
            angle += 2 * ANGLE;
            curve(currIter, 'b', length);
            angle += ANGLE;
            curve(currIter, 'a', length);
            angle -= 2 * ANGLE;
            curve(currIter, 'a', length);
            angle -= ANGLE;
            curve(currIter, 'b', length);
        }
    } else {
        drawLine(length);
    }
}

function renderGosperCurve() {
    x = START_X;
    y = START_Y;
    angle = START_ANGLE - (iter * Math.degrees(Math.atan(Math.sqrt(3) / 5)));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    START_LENGTH = canvas.width/3;
    curve(iter, 'a', START_LENGTH);
}

renderGosperCurve();

