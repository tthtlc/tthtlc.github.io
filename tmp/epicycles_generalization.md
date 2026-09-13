# Generalizing the Curves in `triple_rotating_circle_animated*.html`

Every curve drawn by the four files in this folder is of the form

$$
x(t) = c_x + r_0 \cos(\omega_0 t) + r_1 \cos(\omega_1 t) + r_2 \cos(\omega_2 t),
\qquad
y(t) = c_y + r_0 \sin(\omega_0 t) + r_1 \sin(\omega_1 t) + r_2 \sin(\omega_2 t),
$$

where the code's `radius, radius1, radius2` are the amplitudes $r_0, r_1, r_2$ and `freq, freq1, freq2` are the angular frequencies $\omega_0, \omega_1, \omega_2$. In complex notation this is a single clean expression:

$$
z(t) = c + r_0 e^{i\omega_0 t} + r_1 e^{i\omega_1 t} + r_2 e^{i\omega_2 t}.
$$

This is an **epicycle**: a point sitting on the end of a chain of rotating arms, or equivalently a **truncated Fourier series of a closed curve**. Ptolemy's deferent-plus-epicycle model and the classic *Spirograph* are the same object.

---

## Part 1: The General N-Arm Epicycle

The natural generalization of all the curves drawn here is a sum of $N$ uniform circular motions, each with its own radius $r_k \ge 0$, (signed) frequency $\omega_k \in \mathbb{R}$, and phase $\phi_k \in \mathbb{R}$:

$$
\boxed{\; z(t) \;=\; \sum_{k=0}^{N-1} r_k \, e^{i(\omega_k t + \phi_k)} \;}
$$

In Cartesian form:

$$
x(t) = \sum_{k=0}^{N-1} r_k \cos(\omega_k t + \phi_k),
\qquad
y(t) = \sum_{k=0}^{N-1} r_k \sin(\omega_k t + \phi_k).
$$

The four HTML files are the special case $N = 3$ with **all phases $\phi_k = 0$** — which is why every drawing starts at its rightmost point, $x = c_x + r_0 + r_1 + r_2$, and every arm points due east at $t = 0$.

Mechanical interpretation: arm $k$ is a circle of radius $r_k$ turning at rate $\omega_k$, mounted at the tip of arm $k-1$ (Ptolemy) or all mounted at the common center (flat superposition). The two realize the same trace.

---

## Part 2: Named Subfamilies

| Arms | Condition | Curve |
|---|---|---|
| $N=1$ | — | Circle of radius $r_0$, traced $\lvert\omega_0\rvert$ times per period |
| $N=2$, $\omega_1/\omega_0 > 0$ | $r_0 \ne r_1$ | **Epitrochoid** (Spirograph curve) |
| $N=2$, $\omega_1/\omega_0 < 0$ | $r_0 \ne r_1$ | **Hypotrochoid** |
| $N=2$, same direction, $\omega_1 = \omega_0$, $r_0 = r_1$ | — | **Cardioid**: $z = r e^{it} + r e^{i2t}$ |
| $N=2$, $\omega_1 = 2\omega_0$, $r_0 = 2r_1$ | — | **Nephroid** |
| $N=2$, $\omega_1 = -3\omega_0$, $r_0 = 3r_1$ | — | **Astroid**: $x = 4r\cos^3 t,\ y = 4r\sin^3 t$ |
| $N=2$, $\omega_1 = -2\omega_0$, $r_0 = 2r_1$ | — | **Deltoid** (3-cusp hypocycloid) |
| $N=2$, $r_0 = r_1$, $\omega_1 = -\omega_0$ | — | Circle (arms cancel) |
| $N=2$, $r_0 = r_1$, opposite signs | — | **Rose curve** (rhodonea): $\rho = 2r\lvert\cos(k\theta)\rvert$ with $k = \frac{\omega_0+\omega_1}{\omega_0-\omega_1}$ |
| $N \to \infty$ | any square-integrable closed curve | **Fourier series** — every periodic curve is an epicycle |

The last row is the punchline: the three-arm sum here is not a special trick, it is the first three terms of a representation in which *every* closed curve lives.

The cousin family **Lissajous curves**, $x = A\cos(a t + \phi)$, $y = B\sin(b t)$, is what you get by dropping the circular pairing — allowing different amplitudes and phases per axis. A two-arm epicycle with equal radii is exactly a Lissajous figure rotated $45^\circ$ (via $\cos a + \cos b = 2\cos\frac{a+b}{2}\cos\frac{a-b}{2}$).

---

## Part 3: Closure, Period, and Symmetry — the Arithmetic of Frequencies

Let $\omega_k = n_k \Omega$ with $n_k \in \mathbb{Z}$ and $\Omega > 0$ the greatest common divisor of the frequencies.

**Closure.** The curve closes iff all frequency ratios $\omega_j/\omega_k$ are rational. The fundamental period is

$$
T = \frac{2\pi}{\Omega},
$$

and arm $k$ wraps $n_k$ times per period.

**Rotational symmetry.** If $d = \gcd(n_0, \dots, n_{N-1})$, the completed figure has $d$-fold rotational symmetry about $c$ — because $z(t + T/d) = z(t)$.

**Winding number.** If one arm dominates, $r_0 > r_1 + \cdots + r_{N-1}$, then the curve winds $n_0$ times around $c$: the trace never reaches the center, and the index of a Fourier curve with a dominant term is the index of that term.

**Irrational ratios.** If any $\omega_j/\omega_k$ is irrational the curve never closes and fills an annulus densely (an ergodic linear flow on a torus).

**Two arms.** If $\omega_1/\omega_0 = m/n$ in lowest terms, the figure closes after $n$ turns of the slow arm and shows $m$-fold structure; the number of cusps of the Spirograph is $|m - n|/\gcd$-dependent — for the integer case $m \in \mathbb{Z}$, an epitrochoid has $m$ arches.

**Signs.** $\omega_k < 0$ is a clockwise arm. Reversing the sign of one frequency reflects the figure (this is the epi- vs. hypo-trochoid switch).

---

## Part 4: What Each File Instantiates

All files sweep $\theta \in [0, S \cdot 2\pi]$ with 360 points per revolution, so the number of complete turns available to arm $k$ is $S \cdot \omega_k / 2\pi \cdot$; the figure is closed iff that is an integer for every arm.

| File | Effective arms | Sweep $S$ | Frequency relations | Closed iff |
|---|---|---|---|---|
| `triple_rotating_circle_animated.html` | 2 ($r_2$ is overwritten to 0 in `drawCircleGraphics`, despite the label) | $f_1 f_2$ | $\omega_0 = 1/k$, $k\in[2,8]$; $\omega_1,\omega_2 \in \mathbb{Z}$ | $k \mid f_1 f_2$ |
| `...rotation_r1_r2_index.html` | 3 | 100 | $\omega_0 = 1/3$; $\omega_2 = 3\omega_1$ (pure harmonic chain) | never — arm 0 makes $33\tfrac13$ turns |
| `...savefile_index.html` | 3 | 100 | $\omega_0 = 1/k$, $k\in[2,15]$; $\omega_1,\omega_2\in\mathbb{Z}$ | $k \mid 100$, i.e. $k \in \{2,4,5,10\}$ |
| `...savefile_uniq_index.html` | 3 | $f_1 f_2$ | $\omega_0 = 1/k$, $k\in[2,8]$; $\omega_1,\omega_2\in\mathbb{Z}$ | $k \mid f_1 f_2$ |

Notes:

- The sweep bound $2\pi\, f_1 f_2$ is deliberately chosen so the inner arms always complete an integer number of loops ($f_1 f_2$ turns each); only the slow outer arm $\omega_0 = 1/k$ can fail to close.
- In `rotation_r1_r2_index.html`, $\omega_2 = 3\omega_1$ makes arm 2 the 3rd harmonic of arm 1, producing the nested 3-lobed detail; $\omega_0 = 1/3$ is a subharmonic "drift" arm that never closes.
- When the figure is open, the end point misses the start point by the residual rotation of the slow arm — the "seam" you see at the rightmost reach.

---

## Part 5: Directions of Generalization

From the base form $z(t) = \sum r_k e^{i(\omega_k t + \phi_k)}$:

1. **Nonzero phases $\phi_k$.** The files pin all $\phi_k = 0$. Lifting this breaks the common east-pointing start and shears/lops the figure; with phases, a two-arm figure becomes a general Lissajous/rose hybrid.
2. **Signed frequencies.** Let $\omega_k$ be any integer (negative = clockwise). This one knob turns the same code into roses, hypocycloids, and epicycloids.
3. **Per-axis amplitudes (Lissajous form).** $x = \sum A_k\cos(\omega_k t+\phi_k)$, $y = \sum B_k\sin(\omega_k t+\psi_k)$ — dropping the circular pairing $A_k = B_k = r_k$.
4. **Damping → harmonograph.** $r_k \to r_k e^{-\lambda_k t}$ turns closed loops into inward spirals — the classic pendulum harmonograph drawings.
5. **Frequency drift (chirp).** $\omega_k t \to \omega_k t + \alpha_k t^2$ — the lobes open into flame-like figures.
6. **More arms.** $N$ arbitrary; as $N \to \infty$ this is Fourier synthesis, and any closed curve (a cat, an outline of any shape) can be traced by epicycles.
7. **Third dimension.** Add $z(t) = \sum s_k \sin(\nu_k t + \xi_k)$ for 3D epicycles / spherical Lissajous figures.
8. **Algebraic form.** For integer $\omega_k$, $\cos(\omega_k t) = T_{\omega_k}(\cos t)$ (Chebyshev) and $\sin(\omega_k t) = \sin t \cdot U_{\omega_k-1}(\cos t)$, so every such figure is a polynomial parametrization — an algebraic curve.

---

## Part 6: A Generalized Drawing Function

The whole family (and every file above) is one function parameterized by an array of arms:

```js
// arms: [{r, w, phi}, ...];  sweeps: number of 2π turns of the parameter
function drawEpicycle(canvas, arms, sweeps, stepsPerTurn = 360) {
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2, cy = canvas.height / 2;
    ctx.beginPath();
    const total = Math.round(sweeps * stepsPerTurn);
    for (let i = 0; i <= total; i++) {
        const t = (i / stepsPerTurn) * 2 * Math.PI;
        let x = cx, y = cy;
        for (const {r, w, phi} of arms) {
            x += r * Math.cos(w * t + phi);
            y += r * Math.sin(w * t + phi);
        }
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
}
```

Then the existing pages are exactly:

- `triple_rotating_circle_animated.html`:
  `drawEpicycle(canvas, [{r: radius, w: 1/k, phi: 0}, {r: radius1, w: freq1, phi: 0}], freq1 * freq2)`
- `...rotation_r1_r2_index.html`:
  `drawEpicycle(canvas, [{r: radius, w: 1/3, phi: 0}, {r: radius1, w: freq1, phi: 0}, {r: radius2, w: 3*freq1, phi: 0}], 100)`
- `...savefile_index.html`:
  `drawEpicycle(canvas, [{r: radius, w: 1/k, phi: 0}, {r: radius1, w: freq1, phi: 0}, {r: radius2, w: freq2, phi: 0}], 100)`
- `...savefile_uniq_index.html`:
  `drawEpicycle(canvas, [{r: radius, w: 1/k, phi: 0}, {r: radius1, w: freq1, phi: 0}, {r: radius2, w: freq2, phi: 0}], freq1 * freq2)`

with random ranges exactly as in each file. One function, all four galleries.
