
'use strict';
const $ = id => document.getElementById(id);
const canvas = $('canvas'), ctx = canvas.getContext('2d');
const TAU = Math.PI * 2, STEPS = 200, DELTA = TAU / STEPS;
let width = 1, height = 1, dpr = 1, S = 1600, s = 1, globalAngle = 0, lastTime = 0, spriteDirty = true;
const sprite = document.createElement('canvas');
sprite.width = sprite.height = S;
const sctx = sprite.getContext('2d');

document.addEventListener('contextmenu', e => e.preventDefault());

// Rotate a hex colour by `deg` (HSL hue rotation); used to derive the
// three rotated copies from the base colour at 0/90/180/270 degrees.
function hueShift(hex, deg) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn, l = (mx + mn) / 2;
  let h = 0;
  const sat = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (d) {
    if (mx === r) h = ((g - b) / d) % 6;
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60; if (h < 0) h += 360;
  }
  h = (h + deg) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * sat;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  const [R, G, B] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return `rgb(${Math.round((R + m) * 255)},${Math.round((G + m) * 255)},${Math.round((B + m) * 255)})`;
}

function resize() {
  const box = canvas.parentElement.getBoundingClientRect();
  width = box.width; height = box.height;
  dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  // Sprite stays at least as sharp as the largest zoom on this canvas.
  const S2 = Math.max(1600, Math.ceil(Math.min(width, height) * 1.63 * dpr));
  if (S2 !== S) { S = S2; sprite.width = sprite.height = S; spriteDirty = true; }
}

function rotatePoint(x, y, cx, cy, angle) {
  const cosA = Math.cos(angle), sinA = Math.sin(angle);
  const dx = x - cx, dy = y - cy;
  return { x: cx + dx * cosA - dy * sinA, y: cy + dx * sinA + dy * cosA };
}

// Draw the base curve, rotated by `rot` about the origin, in `color`
function drawLayer(color, rot) {
  sctx.strokeStyle = color;
  sctx.lineWidth = Math.max(1, S / 800);
  sctx.beginPath();
  let first = true;
  const a = +$('a').value, b = +$('b').value, c = +$('c').value, d = +$('d').value, e = +$('e').value, f = +$('f').value;
  const r = S / 8;
  const phases = Math.ceil(TAU / (a * DELTA));       // number of φ sweeps
  const innerSteps = Math.ceil(TAU * b * d / DELTA); // θ samples per sweep
  // Sampling guard: extreme settings would freeze the redraw; beyond
  // ~200k points per layer the polyline is dense enough to skip samples.
  const maxPts = 200000;
  const step = phases * innerSteps > maxPts ? DELTA * (phases * innerSteps / maxPts) : DELTA;
  for (let phasea = 0; phasea <= TAU; phasea += a * DELTA) {
    for (let theta = 0; theta <= TAU * b * d; theta += step) {
      const phaseb = f * DELTA;
      const x = r * (1 - Math.sin(b / c * theta + phasea)) * Math.cos(d / e * theta + phaseb) * Math.cos(theta);
      const y = r * (1 - Math.cos(b / c * theta + phasea)) * Math.sin(d / e * theta + phaseb) * Math.sin(theta);
      const p = rotatePoint(S / 2 + x, S / 2 + y, S / 2, S / 2, rot);
      if (first) { sctx.moveTo(p.x, p.y); first = false; } else sctx.lineTo(p.x, p.y);
    }
  }
  sctx.closePath();
  sctx.stroke();
}

// Render base design + three copies rotated 90° apart about (0,0)
function renderSprite() {
  sctx.clearRect(0, 0, S, S);
  const base = $('color').value;
  for (let k = 0; k < 4; k++) drawLayer(hueShift(base, k * 90), k * Math.PI / 2);
}

// Micro-font formula strip below the curves, inside the canvas
function strip() {
  ctx.fillStyle = 'rgba(16,21,29,.85)';
  ctx.fillRect(0, height - 44, width, 44);
  ctx.font = '9px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#a4e3d4';
  ctx.fillText('x(θ) = r·(1 − sin((b/c)θ + φ))·cos((d/e)θ + fΔ)·cos(θ)', width / 2, height - 34);
  ctx.fillText('y(θ) = r·(1 − cos((b/c)θ + φ))·sin((d/e)θ + fΔ)·sin(θ)', width / 2, height - 24);
  ctx.fillStyle = '#91a5bf';
  ctx.fillText(`a=${$('a').value} b=${$('b').value} c=${$('c').value} d=${$('d').value} e=${$('e').value} f=${$('f').value} · 4 copies rotated 90° about (0,0)`, width / 2, height - 12);
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  s = 1.0177 * Math.min(width, height) * (+$('zoom').value) / S;
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.rotate(globalAngle);
  ctx.drawImage(sprite, -S * s / 2, -S * s / 2, S * s, S * s);
  ctx.restore();
  // Marker for the rotation centre (the 0,0 point)
  ctx.fillStyle = '#eef2f8';
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 3, 0, TAU);
  ctx.fill();
  strip();
}

function status() {
  const a = +$('a').value, b = +$('b').value, c = +$('c').value, d = +$('d').value, e = +$('e').value;
  $('status').textContent = `b/c ${(b / c).toFixed(2)} : 1 · d/e ${(d / e).toFixed(2)} : 1 · ${Math.ceil(TAU / (a * DELTA))} phase curves · θ sweep ${b * d}·2π · 4 copies at 90°`;
}

function refreshOutputs() {
  for (const id of ['a', 'b', 'c', 'd', 'e', 'f']) $(id + 'Out').value = $(id).value;
  $('zoomOut').value = (+$('zoom').value).toFixed(2);
}

// Slow rotation of the whole design
function animate(t) {
  const dt = Math.min((t - lastTime) / 1000, .05);
  lastTime = t;
  if (spriteDirty) { renderSprite(); spriteDirty = false; }
  if ($('spin').checked && !document.hidden) globalAngle += dt * .12;
  draw();
  requestAnimationFrame(animate);
}

for (const id of ['a', 'b', 'c', 'd', 'e', 'f']) $(id).addEventListener('input', () => {
  $(id + 'Out').value = $(id).value;
  spriteDirty = true; status();
});
$('zoom').addEventListener('input', () => { $('zoomOut').value = (+$('zoom').value).toFixed(2); });
$('color').addEventListener('input', () => { spriteDirty = true; });

$('reset').onclick = () => {
  Object.entries({ a: 12, b: 6, c: 1, d: 1, e: 1, f: 1, zoom: 1, color: '#ff0000' }).forEach(([id, v]) => $(id).value = v);
  $('spin').checked = true;
  globalAngle = 0;
  refreshOutputs(); spriteDirty = true; status();
};

$('export').onclick = () => {
  draw();
  const out = document.createElement('canvas');
  out.width = canvas.width; out.height = canvas.height;
  const c = out.getContext('2d');
  c.fillStyle = '#10151d'; c.fillRect(0, 0, out.width, out.height);
  c.drawImage(canvas, 0, 0);
  out.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url;
    a.download = `sin_cos_abstract_explore_a${$('a').value}_b${$('b').value}_c${$('c').value}_d${$('d').value}_e${$('e').value}_f${$('f').value}_zoom${(+$('zoom').value).toFixed(2)}_${$('color').value.slice(1)}.png`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/png');
};

const gallery = $('galleryItems');
const FALLBACK_PNG_NAMES = []; // mirrors the committed sin_cos_abstract_explore_*.png files; the GitHub API path below is preferred
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
    w.href = item.url; w.target = '_blank'; w.rel = 'noopener';
    w.title = 'Open ' + item.name;
    const img = document.createElement('img');
    img.src = item.url; img.alt = item.name; img.loading = 'lazy';
    w.appendChild(img);
    const l = document.createElement('span');
    l.textContent = item.name;
    w.appendChild(l);
    gallery.appendChild(w);
  }
}
fetch('https://api.github.com/repos/tthtlc/tthtlc.github.io/contents/').then(r => {
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return r.json();
}).then(files => {
  if (!Array.isArray(files)) throw new Error('unexpected response');
  renderGallery(files.filter(f => f.type === 'file' && f.name.startsWith('sin_cos_abstract_explore_') && f.name.toLowerCase().endsWith('.png')).map(f => ({ name: f.name, url: f.download_url })).sort((a, b) => a.name < b.name ? -1 : 1));
}).catch(() => renderGallery(FALLBACK_PNG_NAMES.map(n => ({ name: n, url: n }))));

new ResizeObserver(resize).observe(canvas.parentElement);
if (matchMedia('(prefers-reduced-motion: reduce)').matches) $('spin').checked = false;
refreshOutputs(); status(); resize(); requestAnimationFrame(animate);
