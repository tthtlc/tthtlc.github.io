
Yes—the classical Enneper surface has a specific shape, up to rotation, translation, and uniform scaling. But it also belongs to a much larger **family**: you can change the mathematical data that generate it to obtain genuinely different minimal surfaces, including higher-order Enneper surfaces and less symmetric polynomial relatives. The important distinction is between changing how you display the same surface and changing the surface itself.  [math.uci](https://www.math.uci.edu/~vmm/docs/Enneper_Surface.pdf)

## 1. The classical surface: a fixed formula, with two running coordinates

One standard parametrization is

\[
\begin{aligned}
x(u,v)&=u-\frac{u^3}{3}+uv^2,\\
y(u,v)&=v-\frac{v^3}{3}+u^2v,\\
z(u,v)&=u^2-v^2.
\end{aligned}
\]

Here \(u,v\) are coordinates that move you around the surface—not independent shape controls. Letting them range over all of \(\mathbb R^2\) gives the complete classical Enneper immersion.  [math.uci](https://www.math.uci.edu/~vmm/Surface/enneper/enneper.html)

There are several different kinds of changes you can make:

| Change | What it does |
|---|---|
| Restrict \(u,v\) to a smaller or larger domain | Shows a different patch of the same surface |
| Multiply all three coordinates by the same positive number | Changes its size, but not its shape up to similarity |
| Rotate or translate the result | Changes its orientation or position |
| Change the generating functions | Can produce genuinely different minimal surfaces |

This is why two pictures of “the Enneper surface” can look quite different even when they use the same underlying formula: they may show different parameter domains or viewing orientations. The UCI presentation explicitly uses Cartesian or polar parameter grids to display the same immersion.  [math.uci](https://www.math.uci.edu/~vmm/docs/Enneper_Surface.pdf)

## 2. A concrete family: higher-order Enneper surfaces

A particularly useful generalization is indexed by a positive integer \(n\). Write the parameter plane in polar coordinates, \(w=re^{i\theta}\), and define

\[
\boxed{
\begin{aligned}
X_n(r,\theta)
&=
r\cos\theta
-\frac{r^{2n+1}}{2n+1}
\cos((2n+1)\theta),\\
Y_n(r,\theta)
&=
-r\sin\theta
-\frac{r^{2n+1}}{2n+1}
\sin((2n+1)\theta),\\
Z_n(r,\theta)
&=
\frac{2r^{n+1}}{n+1}
\cos((n+1)\theta).
\end{aligned}}
\]

These formulas come from the standard Weierstrass construction with \(g(w)=w^n\) and \(f(w)=1\). For \(n=1\), they recover the classical Enneper surface, with a reflection of the \(y\)-coordinate relative to the convention above. Taking \(n=2,3,\ldots\) gives higher-order Enneper surfaces with different rotational structure.  [en.wikipedia](https://en.wikipedia.org/wiki/Enneper_surface)

Two useful controls in this construction are:

- \(n\): changes the actual surface, including its angular structure.
- \(R\), with \(0\le r\le R\): changes how much of that surface you render.

Notice that \(R\) is a cropping control, whereas \(n\) is a shape-generating control. The underlying family remains minimal: its mean curvature is zero.  [en.wikipedia](https://en.wikipedia.org/wiki/Enneper_surface)

