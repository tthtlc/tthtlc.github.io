
'use strict';
const $ = id => document.getElementById(id);
const canvas = $('canvas'), ctx = canvas.getContext('2d');
let width = 1, height = 1, dpr = 1;

// Per-curve configuration: parameters, PNG filename prefix, animation target.
const CONFIG = {
    prefix: 'parametric_curve2_generalized_explore',
    params: [
        { id: 'aaaa', min: 1, max: 20, step: 0.1, value: 7, decimals: 1 },
        { id: 'bbbb', min: -2, max: 100, step: 0.01, value: 0.56, decimals: 2 },
        { id: 'cccc', min: 0, max: 20, step: 0.5, value: 3, decimals: 1 },
        { id: 'dddd', min: 0, max: 100, step: 0.1, value: 2.02, decimals: 2 },
    ],
    animParam: 'bbbb',
    animRange: 2.0,
    animStep: 0.01,
};
const params = CONFIG.params.map(p => p.id);
const state = {};
const decimals = {};
const defs = {};
for (const p of CONFIG.params) { state[p.id] = p.value; decimals[p.id] = p.decimals; defs[p.id] = p; }

const STEP = Math.PI / 800;   // sampling resolution along the curve
const BANDS = 64;             // number of centre-to-edge colour steps
const COPIES = 4;             // the 90°-rotated copies that make the rosette

// Parametric equations.
function x(t) {
    return state.aaaa * Math.pow(Math.sin(-state.bbbb * t), 2) * Math.pow(2, Math.cos(Math.cos(state.dddd * t)));
}
function y(t) {
    return state.aaaa * Math.sin(Math.sin(-state.bbbb * t)) * Math.pow(Math.cos(state.dddd * t), 2);
}

// Colour for a normalized radius f (0 = centre, 1 = rim): bright and warm
// near the centre, cooler and dimmer toward the edge.
function colorFor(f) {
    const hue = 50 + 160 * f;       // gold centre -> blue rim
    const lightness = 82 - 34 * f;  // bright centre -> dimmer edge
    return `hsl(${hue}, 95%, ${lightness}%)`;
}

function resize() {
    const box = canvas.parentElement.getBoundingClientRect();
    width = box.width; height = box.height;
    dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
}

function draw() {
    ctx.clearRect(0, 0, width, height);

    // Sample the raw curve once; the max radius drives both the fit-to-view
    // scale and the centre-to-edge colour gradient.
    const pts = [];
    let maxR = 0;
    for (let t = -state.cccc; t <= state.cccc; t += STEP) {
        const rx = x(t), ry = y(t);
        const r = Math.hypot(rx, ry);
        if (r > maxR) maxR = r;
        pts.push([rx, ry]);
    }
    if (maxR <= 0 || pts.length < 2) return;

    const drawScale = Math.min(width, height) * 0.42 / maxR;
    const cx = width / 2, cy = height / 2;
    ctx.lineWidth = 1;

    // Draw the same curve four times, rotating 90° between copies.
    for (let rot = 0; rot < COPIES; rot++) {
        const a = rot * Math.PI / 2;
        const cosA = Math.cos(a), sinA = Math.sin(a);
        const r0x = pts[0][0], r0y = pts[0][1];
        let prevX = cx + drawScale * (r0x * cosA - r0y * sinA);
        let prevY = cy + drawScale * (r0x * sinA + r0y * cosA);
        let bucket = -1;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < pts.length; i++) {
            const rx = pts[i][0], ry = pts[i][1];
            const newX = cx + drawScale * (rx * cosA - ry * sinA);
            const newY = cy + drawScale * (rx * sinA + ry * cosA);
            const norm = Math.min(1, Math.hypot(rx, ry) / maxR);
            const b = Math.min(BANDS - 1, Math.floor(norm * BANDS));

            // Only re-stroke when the colour band changes, so the gradient
            // stays gradual without issuing one stroke() per segment.
            if (b !== bucket) {
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                bucket = b;
                ctx.strokeStyle = colorFor(b / (BANDS - 1));
            }
            ctx.lineTo(newX, newY);
            prevX = newX; prevY = newY;
        }
        ctx.stroke();
    }
}

function updateStatus() {
    let s = params.map(id => `${id} ${state[id].toFixed(decimals[id])}`).join(' · ');
    if (animating) s += ` — animating ${CONFIG.animParam}`;
    $('status').textContent = s;
}

function syncOutputs() {
    for (const id of params) $(id + 'Out').value = state[id].toFixed(decimals[id]);
}

// Build the sliders from the configuration.
const controlsEl = $('controls');
for (const p of CONFIG.params) {
    const label = document.createElement('label');
    const row = document.createElement('span');
    row.className = 'row';
    const name = document.createElement('span');
    name.textContent = p.id;
    const out = document.createElement('output');
    out.id = p.id + 'Out';
    row.appendChild(name); row.appendChild(out);
    label.appendChild(row);
    const input = document.createElement('input');
    input.id = p.id;
    input.type = 'range';
    input.min = p.min; input.max = p.max; input.step = p.step; input.value = p.value;
    label.appendChild(input);
    controlsEl.appendChild(label);
}

for (const id of params) {
    $(id).addEventListener('input', () => {
        state[id] = parseFloat($(id).value);
        $(id + 'Out').value = state[id].toFixed(decimals[id]);
        updateStatus();
        draw();
    });
}

$('reset').onclick = () => {
    for (const p of CONFIG.params) { state[p.id] = p.value; $(p.id).value = p.value; }
    syncOutputs();
    updateStatus();
    draw();
};

// Save PNG — the filename records the parameter values so each capture is
// self-describing and shows up in the gallery once committed to the repo.
$('export').onclick = () => {
    draw();
    const out = document.createElement('canvas');
    out.width = canvas.width;
    out.height = canvas.height;
    const c = out.getContext('2d');
    c.fillStyle = '#10151d';
    c.fillRect(0, 0, out.width, out.height);
    c.drawImage(canvas, 0, 0);
    out.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = CONFIG.prefix + '_' + CONFIG.params.map(p => p.id + state[p.id].toFixed(p.decimals)).join('_') + '.png';
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
};

// Animate: sweep a chosen parameter up and down around its current value.
const animateBtn = $('animate');
let animating = false;
let animTimer = null;
let animBase = 0;
let animTarget = 0;

function animTick() {
    if (!animating) return;
    const p = defs[CONFIG.animParam];
    const hi = Math.min(p.max, animBase + CONFIG.animRange);
    const lo = Math.max(p.min, animBase - CONFIG.animRange);
    const cur = state[CONFIG.animParam];
    if (Math.abs(animTarget - cur) <= CONFIG.animStep / 2) {
        state[CONFIG.animParam] = animTarget;
        animTarget = animTarget >= hi ? lo : hi;
    } else {
        state[CONFIG.animParam] += (cur < animTarget ? 1 : -1) * CONFIG.animStep;
    }
    $(CONFIG.animParam).value = state[CONFIG.animParam];
    syncOutputs();
    updateStatus();
    draw();
}

animateBtn.onclick = () => {
    if (animating) {
        animating = false;
        clearInterval(animTimer);
        animTimer = null;
        animateBtn.textContent = 'Animate';
        updateStatus();
        return;
    }
    animating = true;
    animateBtn.textContent = 'Stop animating';
    animBase = state[CONFIG.animParam];
    animTarget = Math.min(defs[CONFIG.animParam].max, animBase + CONFIG.animRange);
    animTick();
    animTimer = setInterval(animTick, 80);
};

// Gallery: list committed <prefix>_*.png files via the GitHub API so they
// appear automatically.
const gallery = $('galleryItems');
const FALLBACK_PNG_NAMES = []; // mirrors committed PNGs; the GitHub API path below is preferred
function renderGallery(items) {
    gallery.innerHTML = '';
    if (!items.length) {
        const e = document.createElement('div');
        e.className = 'gallery-empty';
        e.textContent = 'No saved PNGs yet.';
        gallery.appendChild(e);
        return;
    }
    for (const item of items) {
        const w = document.createElement('a');
        w.className = 'gallery-item';
        w.href = item.url;
        w.target = '_blank';
        w.rel = 'noopener';
        w.title = 'Open ' + item.name;
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.name;
        img.loading = 'lazy';
        w.appendChild(img);
        const l = document.createElement('span');
        l.textContent = item.name;
        w.appendChild(l);
        gallery.appendChild(w);
    }
}
fetch('https://api.github.com/repos/tthtlc/tthtlc.github.io/contents/')
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(files => {
        if (!Array.isArray(files)) throw new Error('unexpected response');
        renderGallery(files
            .filter(f => f.type === 'file' && f.name.startsWith(CONFIG.prefix + '_') && f.name.toLowerCase().endsWith('.png'))
            .map(f => ({ name: f.name, url: f.download_url }))
            .sort((a, b) => a.name < b.name ? -1 : 1));
    })
    .catch(() => renderGallery(FALLBACK_PNG_NAMES.map(n => ({ name: n, url: n }))));

new ResizeObserver(resize).observe(canvas.parentElement);
syncOutputs();
updateStatus();
resize();
