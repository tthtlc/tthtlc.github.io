
Implemented #1 as a self-contained **interactive** HTML webpage with embedded JavaScript and CSS. The attached HTML file runs locally in a browser without external libraries, a build step, or a server.

## Included features

- Shaded 3D elliptical torus with automatic rotation.
- Drag-to-rotate interaction, scroll-to-zoom, and keyboard arrow controls.
- Sliders for the ellipse’s two semi-axes and tube radius.
- Adjustable surface colour.
- Three rendering styles: satin surface, wireframe, and surface with mesh.
- A top-down 2D view.
- Reset and PNG export buttons.
- Responsive layout and reduced-motion preference support.

## Geometry

The implementation sweeps a circular tube around an elliptical centreline rather than stretching a circular torus, so the tube maintains its circular cross-section.

The surface is parameterized as

\[
\mathbf P(u,v)
=
\begin{pmatrix}
a\cos u\\
b\sin u\\
0
\end{pmatrix}
+
r\cos v\,\mathbf N(u)
+
r\sin v
\begin{pmatrix}
0\\
0\\
1
\end{pmatrix},
\]

where \(\mathbf N(u)\) is the normalized outward normal to the ellipse. The controls limit the tube radius to keep the surface from folding at the ellipse’s tightest curves.

Rendering uses a triangulated mesh, depth sorting, and diffuse/specular shading on a Canvas 2D surface. This keeps the demo dependency-free; it is a lightweight illustrative renderer rather than a full WebGL rendering engine.
