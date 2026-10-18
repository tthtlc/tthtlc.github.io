
A “braided torus” usually means a torus whose tube radius oscillates as it winds around the central ring, producing a braided/woven-looking surface. There is no single canonical equation, but a standard parametrization is:

\[
\begin{aligned}
x(u,v)&=\left(R+a\cos\left(\frac{m u}{2}\right)+r\cos v\right)\cos u,\\
y(u,v)&=\left(R+a\cos\left(\frac{m u}{2}\right)+r\cos v\right)\sin u,\\
z(u,v)&=r\sin v,
\end{aligned}
\]

with \(0\le u<2\pi\), \(0\le v<2\pi\). Here \(R\) is the major radius, \(r\) the tube radius, \(a\) the braid amplitude, and \(m\) controls how many braid lobes appear around the torus. This is the same basic “wavy torus” construction described for braided/Turk’s-head-style surfaces, where a cosine term modulates the radius around the central circle. [mi.sanu.ac](http://www.mi.sanu.ac.rs/vismath/pennock/index.html)

## How the braid works

- Without the oscillation, \(a=0\), the equations reduce to the ordinary torus:
  \[
  (x,y,z)=((R+r\cos v)\cos u,(R+r\cos v)\sin u,r\sin v).
  \]
- The term \(a\cos(mu/2)\) makes the tube radius expand and contract periodically:
  \[
  \rho(u)=R+a\cos\left(\frac{m u}{2}\right).
  \]
- Larger \(m\) gives more braid “strands” or lobes; larger \(a\) makes the braid more pronounced, provided \(a<R-r\) so the surface does not self-intersect.

## A simple example

For a 3-lobe braided torus:

\[
\begin{aligned}
x&=(3+0.5\cos(3u/2)+0.4\cos v)\cos u,\\
y&=(3+0.5\cos(3u/2)+0.4\cos v)\sin u,\\
z&=0.4\sin v.
\end{aligned}
\]

Here \(R=3\), \(r=0.4\), \(a=0.5\), and \(m=3\). The result is a torus with three periodic radial bulges, visually resembling a braid.

If by “braided torus” you instead mean a **torus knot**—a curve winding \(p\) times around the torus’s meridian and \(q\) times around its longitude—the parametrization is:

\[
\begin{aligned}
x&=(R+r\cos(qt))\cos(pt),\\
y&=(R+r\cos(qt))\sin(pt),\\
z&=r\sin(qt),
\end{aligned}
\]

where \(p\) and \(q\) are coprime integers; the closure of a \(p\)-strand braid gives a \((p,q)\)-torus knot. [en.wikipedia](https://en.wikipedia.org/wiki/Torus_knot)
