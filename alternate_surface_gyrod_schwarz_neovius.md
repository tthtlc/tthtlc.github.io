
The pictured object is very likely a **gyroid**—a triply periodic minimal surface—shown with a honeycomb-like perforated shell or mesh treatment. It is not usually an exact “single closed blob” from the formula alone: the equation defines an infinite repeating surface, and artists/manufacturers crop it to a ball or cube and often thicken it for fabrication. The book’s coverage includes such math-art minimal-surface work, and descriptions associated with it specifically identify Bathsheba Grossman’s *Gyroid* as based on triply periodic minimal surfaces. [artpublikamag](https://www.artpublikamag.com/post/the-art-of-sculpting-symbolic-math-pioneering-artist-bathsheba-grossman-on-art-her-art-then-now)

## Standard gyroid equation

A common implicit level-set equation is

\[
\sin x\cos y+\sin y\cos z+\sin z\cos x=c.
\]

- Setting \(c=0\) gives the classical **nodal gyroid approximation**.
- The geometry repeats with period \(2\pi\) along each coordinate direction.
- Rescale spatial frequency with \(k=2\pi/a\), where \(a\) is the desired unit-cell width:

\[
\sin(kx)\cos(ky)+\sin(ky)\cos(kz)+\sin(kz)\cos(kx)=c.
\]

The zero level set has mean curvature approximately zero and separates space into two interwoven, non-intersecting labyrinths. Unlike the Schwarz P or D surfaces, the gyroid has no straight lines or mirror planes, which gives it that flowing, chiral appearance.

## How to obtain the pictured form

The cover object appears to combine three operations:

1. **Create the gyroid level surface**
   \[
   f(x,y,z)=\sin(kx)\cos(ky)+\sin(ky)\cos(kz)+\sin(kz)\cos(kx).
   \]

2. **Give it thickness** for a printable or manufacturable solid:
   \[
   |f(x,y,z)-c|\le t.
   \]
   Here \(t\) controls wall thickness; changing \(c\) also changes the relative volume of the two labyrinthine phases.

3. **Clip it to a rounded bounding volume**, plausibly a sphere:
   \[
   x^2+y^2+z^2\le R^2.
   \]
   A smooth fade near the boundary can make the surface appear to dissolve naturally into the spherical outline rather than terminate abruptly.

A practical volumetric definition is therefore:

\[
\left|
\sin(kx)\cos(ky)+\sin(ky)\cos(kz)+\sin(kz)\cos(kx)-c
\right|
\le t,
\qquad
x^2+y^2+z^2\le R^2.
\]

Use marching cubes / a signed-distance-field workflow to turn that inequality into a triangular mesh, then apply mesh offset/remeshing if needed.

## The visible holes

The regular hexagon-like openings are consistent with a **thickened gyroid sheet** rendered or fabricated as a porous surface. They are not an independently imposed hexagonal lattice in the usual gyroid construction; they arise visually from the local topology and from viewing a finite-thickness surface.

However, the cover could also include an artistic lattice modifier—such as a wireframe/remesh, Voronoi-type perforation, or image/mesh processing—on top of the underlying gyroid. The smooth, wide ribbon-like regions make it particularly likely that the geometry is a gyroid-derived mesh that was offset, cropped, and artistically refined rather than a raw \(f=0\) plot.

## Useful variants

The following related implicit surfaces may produce nearby aesthetics:

| Surface | Implicit equation, level \(=c\) | Visual character |
|---|---|---|
| Gyroid | \(\sin x\cos y+\sin y\cos z+\sin z\cos x=c\) | Smooth, swirling, no straight channels |
| Schwarz P | \(\cos x+\cos y+\cos z=c\) | More orthogonal, sponge-like pores |
| Schwarz D | \(\sin x\sin y\sin z+\sin x\cos y\cos z+\cos x\sin y\cos z+\cos x\cos y\sin z=c\) | More diamond-like connectivity |
| Neovius | \(3(\cos x+\cos y+\cos z)+4\cos x\cos y\cos z=c\) | Rounder bulb-and-window pattern |

For matching this cover, start with the gyroid at roughly 2–3 periods across a sphere, choose a modest thickness \(t\), and crop the result with a spherical boundary. That produces the closest underlying mathematical family. The book itself is a collection of mathematical art and explicitly discusses artworks based on surfaces that minimize area, including related sculptural forms. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/13148127/ec930733-087e-4cc2-a95f-718fe95418b0/surface.jpg)
