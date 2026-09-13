---
layout: post
title: "Epicycles: One Arm, Two Arms, Three Arms"
date: 2026-09-13
categories: curves
tags: [epicycles, trochoids, fourier, interactive]
excerpt: "Every curve on this page is a single sum of rotating vectors — Ptolemy's epicycles, the Spirograph, and the Fourier series are the same machine at N = 3, N = 2 and N = ∞."
mathjax: true
---

An $N$-arm **epicycle** is a point riding on the tip of a chain of $N$ rotating arms; arm $k$ has length $r_k \ge 0$, angular rate $\omega_k \in \mathbb{R}$ (negative = clockwise), and initial angle $\phi_k$:

$$ z(t) = \sum_{k=0}^{N-1} r_k\, e^{\,i(\omega_k t + \phi_k)}, \qquad x(t) = \sum_{k=0}^{N-1} r_k \cos(\omega_k t + \phi_k), \qquad y(t) = \sum_{k=0}^{N-1} r_k \sin(\omega_k t + \phi_k). $$

This page pins every phase to $\phi_k = 0$: all arms point due east at $t = 0$, so every trace begins at its rightmost point, $x(0) = \sum_k r_k$. Two mechanical pictures realize the same curve — Ptolemy's *chain* (arm $k$ mounted at the tip of arm $k-1$) or flat *superposition* (all arms from the centre) — because vector addition commutes: the order of the arms never changes the trace.

## The interactive figure

Three slider groups control the length $r_k$ of each arm, the number $N$ of arms (1–3), and the periodicity of rotation $\omega_k$ of each arm. The pen draws continuously while its colour sweeps the spectrum, so the age of every segment is visible as colour; the faint chalk line underneath is the complete trace over one fundamental period. The status line recomputes closure, period, wraps and symmetry from the frequency arithmetic — with the sliders' half-integer rates the computation is simply $\omega_k = p_k/2$ and $T = 4\pi/\gcd(p_0, p_1, \dots)$.

{% include epicycles-app.html %}

## One arm

$$ z(t) = r_0\, e^{i\omega_0 t} $$

is a circle of radius $r_0$, traced $\lvert\omega_0\rvert$ times per period $T = 2\pi/\lvert\omega_0\rvert$; $\omega_0 = 0$ collapses it to a point. Everything interesting starts at $N = 2$.

## Two arms

$$ z(t) = r_0 e^{i\omega_0 t} + r_1 e^{i\omega_1 t}, \qquad z'(t) = i\left(\omega_0 r_0 e^{i\omega_0 t} + \omega_1 r_1 e^{i\omega_1 t}\right). $$

With $\omega_0, \omega_1$ of the same sign this is an **epitrochoid**, opposite signs a **hypotrochoid**. Normalize $\omega_0 = 1$. The derivative vanishes exactly when the two velocity vectors cancel — magnitudes $r_0 = \lvert\omega_1 r_1\rvert$ and directions $e^{i(\omega_1 - 1)t} = -1$ — and for integer $\omega_1$ that happens $\lvert\omega_1 - 1\rvert$ times per period. Hence $\lvert\omega_1 - 1\rvert$ cusps:

| $r_0$ | $r_1$ | $\omega_1$ | cusps | curve |
|:---:|:---:|:---:|:---:|---|
| $2a$ | $a$ | $2$ | 1 | **cardioid** |
| $3a$ | $a$ | $3$ | 2 | **nephroid** |
| $2a$ | $a$ | $-2$ | 3 | **deltoid** |
| $3a$ | $a$ | $-3$ | 4 | **astroid** |

These are the classic **epicycloids** ($\omega_1 > 0$: a circle of radius $a$ rolling on the *outside* of a fixed circle of radius $(\omega_1 - 1)a$) and **hypocycloids** ($\omega_1 < 0$: rolling *inside* a fixed circle of radius $(\lvert\omega_1\rvert + 1)a$). Off the cusp condition $r_0 \ne \lvert\omega_1 r_1\rvert$ the cusps round off into trochoid waves; $r_0 < \lvert\omega_1 r_1\rvert$ gives self-intersecting loops.

**The rose.** Equal radii, opposite signs, $\omega = (m, -n)$:

$$ z = r e^{imt} + r e^{-int} = 2r \cos\!\left(\tfrac{m+n}{2} t\right) e^{i\frac{m-n}{2} t} \;\Rightarrow\; \rho = 2r \left\lvert\cos k\theta\right\rvert, \qquad k = \frac{m+n}{m-n}, \quad \theta = \tfrac{m-n}{2} t. $$

A rose with $k$ petals ($2k$ if $k$ is even). The preset $(m, n) = (2, 1)$ gives $k = 3$: three petals.

**The Tusi couple.** $\omega_1 = -\omega_0$ with $r_1 = r_0$:

$$ z = r e^{it} + r e^{-it} = 2r \cos t, $$

the epicycle degenerates to the straight segment $[-2r, 2r]$ — pure circular motion composed into pure rectilinear motion.

## Three arms

$$ z(t) = r_0 e^{i\omega_0 t} + r_1 e^{i\omega_1 t} + r_2 e^{i\omega_2 t}. $$

- **Harmonic chains** $\omega = (n, 2n, 3n)$: nested lobes, one loop level per arm.
- **The drift arm.** The `triple_rotating_circle_*` pages of this collection use a slow subharmonic outer arm $\omega_0 = 1/k$ while the inner arms stay integer. If the sweep $S$ (in units of $2\pi$) is not a multiple of $k$, the figure does not close — you see the seam where the endpoint misses the start by the residual rotation of the slow arm. Closed $\iff k \mid S$.
- A third arm is a Fourier correction of the two-arm figure — see below.

## Closure, period, symmetry — the arithmetic of the frequencies

Write $\omega_k = n_k \Omega$ with $n_k \in \mathbb{Z}$ and $\Omega = \gcd(\omega_0, \omega_1, \dots)$.

- **Closure** $\iff$ every ratio $\omega_j / \omega_k \in \mathbb{Q}$. The fundamental period is $T = 2\pi/\Omega$; arm $k$ wraps $n_k$ times per period.
- **Pointwise period.** $z(t + T/d) = z(t)$ with $d = \gcd(\lvert n_0\rvert, \dots, \lvert n_{N-1}\rvert)$.
- **Rotational symmetry.** The *figure* has $g$-fold rotational symmetry with $g = \gcd(\lvert n_1 - n_0\rvert, \dots, \lvert n_{N-1} - n_0\rvert)$, because $z(t + \tau) = e^{i\alpha} z(t)$ whenever $(n_k - n_0)\,\Omega\tau \equiv 0 \pmod{2\pi}$ for every $k$. The rose $\omega = (2, -1)$ has $d = 1$ but $g = 3$ — threefold, as it should be.
- **Winding number.** If arm 0 dominates, $r_0 > r_1 + \cdots + r_{N-1}$, the curve winds $n_0$ times around the centre: the trace never reaches the centre, and the index of a Fourier curve with a dominant term is the index of that term.
- **Irrational ratio.** The curve never closes; it fills the annulus $\max(0,\; r_0 - \textstyle\sum_{k \ge 1} r_k) \le \rho \le \sum_k r_k$ densely — an ergodic linear flow on a torus. Try the *Open √2* preset.

## $N \to \infty$: every curve is an epicycle

With enough arms the sum is a **Fourier series**, and every (nice) closed curve can be traced — Ptolemy's deferent-plus-epicycle model, the Spirograph, and Fourier synthesis are the same machine at $N = 3$, $N = 2$ and $N = \infty$. For integer $\omega_k$, $\cos(\omega_k t) = T_{\omega_k}(\cos t)$ and $\sin(\omega_k t) = \sin t \, U_{\omega_k - 1}(\cos t)$ with Chebyshev polynomials, so every integer-frequency epicycle is an algebraic curve.

## The code

One function draws the whole family. The figure above is this function with $N \le 3$ and live sliders; the moving gradient is the same sum evaluated incrementally, one hue per frame.

```js
// arms: [{r, w, phi}, ...] — radius, angular frequency, phase
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

Mapping to the sliders: the $k$-th slider pair *is* $\{r_k, \omega_k\}$; the $N$ slider chooses how many terms of the sum are used; and the sweep is exactly one fundamental period $T$, computed live by the closure arithmetic above.
