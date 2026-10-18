
https://www.perplexity.ai/search/5bfca7ae-ea6e-4cd6-b09d-480f4e88d6e0

Below are concrete parametric equations for all 30 variations. Use \(t\in[0,2\pi k]\), where \(k\) is chosen so the curve closes; for integer ratios \(R/r\), \(k=r\) is usually sufficient.

## Base equations

For an **epicycloid** (rolling outside), with fixed-circle radius \(R\), rolling-circle radius \(r\), and tracing radius \(d=r\):

\[
x(t)=(R+r)\cos t-d\cos\!\left(\frac{R+r}{r}t\right),
\qquad
y(t)=(R+r)\sin t-d\sin\!\left(\frac{R+r}{r}t\right).
\]

For a **hypocycloid** (rolling inside):

\[
x(t)=(R-r)\cos t+d\cos\!\left(\frac{R-r}{r}t\right),
\qquad
y(t)=(R-r)\sin t-d\sin\!\left(\frac{R-r}{r}t\right).
\]

Setting \(d\ne r\) gives the broader **epitrochoid** and **hypotrochoid** families. [journals.rudn](https://journals.rudn.ru/miph/article/download/35110/22191)

For compactness below, define:

\[
E(R,r,d;t)=\left((R+r)\cos t-d\cos\!\left(\frac{R+r}{r}t\right),\,
(R+r)\sin t-d\sin\!\left(\frac{R+r}{r}t\right)\right)
\]

\[
H(R,r,d;t)=\left((R-r)\cos t+d\cos\!\left(\frac{R-r}{r}t\right),\,
(R-r)\sin t-d\sin\!\left(\frac{R-r}{r}t\right)\right)
\]

where \(E\) is epitrochoidal and \(H\) is hypotrochoidal. A true cycloid has \(d=r\). [journals.rudn](https://journals.rudn.ru/miph/article/download/35110/22191)

## 1–10: Classic curves

| # | Variation | Parametric equation | Parameters |
|---|---|---|---|
| 1 | Deltoid | \(\gamma(t)=H(3,1,1;t)\) | \(R=3,\ r=1,\ d=1\) |
| 2 | Astroid | \(\gamma(t)=H(4,1,1;t)\) | \(R=4,\ r=1,\ d=1\) |
| 3 | Five-petal epicycloid | \(\gamma(t)=E(5,1,1;t)\) | \(R=5,\ r=1,\ d=1\) |
| 4 | Six-lobed epicycloid | \(\gamma(t)=E(6,1,1;t)\) | \(R=6,\ r=1,\ d=1\) |
| 5 | Eight-cusp star | \(\gamma(t)=H(8,1,1;t)\) | \(R=8,\ r=1,\ d=1\) |
| 6 | Nephroid | \(\gamma(t)=E(2,1,1;t)\) | \(R=2,\ r=1,\ d=1\) |
| 7 | Cardioid | \(\gamma(t)=E(1,1,1;t)\) | \(R=1,\ r=1,\ d=1\) |
| 8 | Nine-cusp mandala | \(\gamma_n(t)=H(9,1,1;t)\) rotated by \(n\cdot 2\pi/3\) | Draw for \(n=0,1,2\) |
| 9 | Twelve-cusp flower | \(\gamma(t)=H(12,1,1;t)\) | \(R=12,\ r=1,\ d=1\) |
| 10 | Near-circle epicycloid | \(\gamma(t)=E(30,1,1;t)\) | \(R=30,\ r=1,\ d=1\) |

For #8, a rotation by angle \(\alpha\) is applied as

\[
\gamma_\alpha(t)=
\begin{pmatrix}
\cos\alpha & -\sin\alpha\\
\sin\alpha & \cos\alpha
\end{pmatrix}
\gamma(t).
\]

## 11–20: Tracing-point variations

| # | Variation | Parametric equation | Parameters |
|---|---|---|---|
| 11 | Inner-traced rosette | \(\gamma(t)=H(7,3,0.55;t)\) | \(R=7,\ r=3,\ d=0.55\) |
| 12 | Outer-traced rosette | \(\gamma(t)=E(7,3,4.2;t)\) | \(R=7,\ r=3,\ d=4.2\) |
| 13 | Progressive tracing radius | \(\gamma_j(t)=H(7,3,d_j;t)\), \(d_j=0.2+0.13j\) | \(j=0,\dots,10\) |
| 14 | Dual tracing points | \(\gamma_\pm(t)=H(7,3,\pm 1;t)\) | \(d=1\) and \(d=-1\) |
| 15 | Triple tracing points | \(\gamma_m(t)=H(7,3,1;t)\) rotated by \(m\cdot 2\pi/3\) | \(m=0,1,2\) |
| 16 | Offset tracing point | \(\gamma(t)=H(7,3,1;t)+(0.35,0.18)\) | Translation vector \((0.35,0.18)\) |
| 17 | Elliptical tracing point | \(\gamma(t)=H(7,3,1;t)+(0.35\cos 3t,0.18\sin 3t)\) | Ellipse amplitudes \(0.35,0.18\); frequency \(3\) |
| 18 | Trailing point cloud | Sample \(\gamma(t_i)=H(7,3,1;t_i)\) | \(t_i=2\pi i/N,\ i=0,\dots,N-1\) |
| 19 | Speed-shaded curve | \(\gamma(t)=H(7,3,1;t)\), colour from \(\|\gamma'(t)\|\) | Shade by speed magnitude |
| 20 | Ghost trace | \(\gamma_{\text{full}}(t)=H(7,3,1;t)\), \(\gamma_{\text{live}}(t)=H(7,3,1;t)\) for \(0\le t\le T\) | Full curve faint; live segment bright |

For #19, the velocity is

\[
\gamma'(t)=
\left(
-(R-r)\sin t
-\frac{d(R-r)}{r}\sin\!\left(\frac{R-r}{r}t\right),
\;
(R-r)\cos t
-\frac{d(R-r)}{r}\cos\!\left(\frac{R-r}{r}t\right)
\right),
\]

and the shading value can be \(\|\gamma'(t)\|\).

## 21–25: Combined families

| # | Variation | Parametric equation | Parameters |
|---|---|---|---|
| 21 | Inside–outside pair | \(\gamma_1(t)=H(5,1,1;t)\), \(\gamma_2(t)=E(5,1,1;t)\) | Same ratio \(R/r=5\) |
| 22 | Nested counter-rotation | \(\gamma_{\text{outer}}(t)=H(9,2,1;t)\), \(\gamma_{\text{inner}}(t)=R_{-\pi/4}E(3,1,0.8;t)\) | Outer \(R=9,r=2\); inner \(R=3,r=1\); inner rotated by \(-\pi/4\) |
| 23 | Phase-shifted twins | \(\gamma_\pm(t)=H(7,3,1;t\pm\phi)\) | \(\phi=\pi/18\) |
| 24 | Cycloidal gear profile | Addendum: \(E(R_a,r_a,r_a;t)\); dedendum: \(H(R_h,r_h,r_h;t)\), joined at the pitch circle | Choose compatible pitch radii; epicycloid forms the tooth tip, hypocycloid the root.  [matec-conferences](https://www.matec-conferences.org/articles/matecconf/pdf/2019/36/matecconf_pt2019_01007.pdf) |
| 25 | Hybrid flower | Outer: \(E(6,1,1;t)\); inner: \(H(4,1,0.7;t)\) | Scale inner curve by \(0.45\) before overlay |

For #24, a practical simplified profile is:

\[
\gamma_{\text{tooth}}(t)=
\begin{cases}
E(R_a,r_a,r_a;t), & 0\le t\le \pi/2\\
H(R_h,r_h,r_h;t), & \pi/2<t\le\pi
\end{cases}
\]

then repeat it \(z\) times around the gear centre with rotation \(2\pi j/z\).

## 26–30: Compositional and 3D forms

| # | Variation | Parametric equation | Parameters |
|---|---|---|---|
| 26 | Rotational symmetry field | \(\gamma_j(t)=R_{2\pi j/n}H(7,3,1;t)\) | \(n=8\), \(j=0,\dots,n-1\) |
| 27 | Spiral-scaled family | \(\gamma_j(t)=s^jH(7,3,1;t)\), \(s=0.82\) | \(j=0,\dots,11\) |
| 28 | Ribbon extrusion | \(\Gamma(t,u)=\gamma(t)+u\,\mathbf n(t)w/2\), \(-1\le u\le1\) | \(\gamma(t)=H(7,3,1;t)\), ribbon half-width \(w/2\) |
| 29 | Tube-swept sculpture | \(\Gamma(t,v)=\gamma(t)+a\cos v\,\mathbf n(t)+a\sin v\,\mathbf b(t)\) | \(\gamma(t)=H(7,3,1;t)\), tube radius \(a\) |
| 30 | Layered relief panel | \(\Gamma_j(t)=\gamma(t)+j\Delta z\,\mathbf k\), \(\gamma(t)=H(7,3,1;t)\) | Layers \(j=0,\dots,4\), depth spacing \(\Delta z\) |

For #28 and #29, use the Frenet-like frame of the planar curve:

\[
\mathbf T(t)=\frac{\gamma'(t)}{\|\gamma'(t)\|},
\qquad
\mathbf n(t)=\frac{(-T_y(t),T_x(t),0)}{\|(-T_y(t),T_x(t),0)\|},
\qquad
\mathbf b(t)=(0,0,1).
\]

Thus the 3D tube is

\[
\Gamma(t,v)=
\begin{pmatrix}
\gamma_x(t)\\
\gamma_y(t)\\
0
\end{pmatrix}
+
a\cos v\,\mathbf n(t)
+
a\sin v\,\mathbf b(t),
\qquad
0\le v<2\pi.
\]

## Closing condition

For \(R/r=p/q\) in lowest terms, the curve closes after

\[
t_{\max}=2\pi q.
\]

For the integer-ratio examples above, \(q=1\), so \(t\in[0,2\pi]\) closes the curve. The hypotrochoid and epitrochoid formulas above are the standard generalized rolling-circle equations, with \(d\) controlling whether the result is a true cycloid or a curtailed/prolate trochoid. [en.wikipedia](https://en.wikipedia.org/wiki/Hypotrochoid)
