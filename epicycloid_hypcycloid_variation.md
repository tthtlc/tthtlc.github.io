
https://www.perplexity.ai/search/5bfca7ae-ea6e-4cd6-b09d-480f4e88d6e0

Here are 30 distinct design directions built from **hypocycloids**, **epicycloids**, and their combinations. The two base families are closely related: a point on a rolling circle traces an epicycloid when it rolls outside a fixed circle and a hypocycloid when it rolls inside. [maplesoft](https://www.maplesoft.com/support/help/maple/view.aspx?path=MathApps/EpicycloidAndHypocycloid)

## 1–10: Classic curve variations

| # | Variation | Design idea | Aesthetic treatment |
|---|---|---|---|
| 1 | Three-cusped deltoid | A hypocycloid with \(R=3r\), producing three sharp inward cusps. | Fine ink lines, generous white space, one small dot marking the tracing point |
| 2 | Four-cusped astroid | A hypocycloid with \(R=4r\), yielding a rounded square with four cusps. | Matte black curve on warm paper; add faint construction circles |
| 3 | Five-petal epicycloid | Use \(R=5r\) externally to create five outward lobes. | Thin gold curve on deep indigo, with a subtle radial glow |
| 4 | Six-lobed epicycloid | \(R=6r\) gives a balanced six-petal rosette. | Two-tone: outer lobes in coral, inner construction arcs in pale blue |
| 5 | Eight-cusp star | A hypocycloid with \(R=8r\), producing an eight-pointed star-like form. | Metallic silver line, dark background, minimal labels |
| 6 | Nephroid | An epicycloid with \(R=2r\), creating two smooth kidney-shaped lobes. | Soft gradient from teal to violet; omit all construction lines |
| 7 | Cardioid | An epicycloid with \(R=r\), producing a single heart-like cusp. | Large, centered composition with a single accent point at the cusp |
| 8 | Nine-cusp mandala | A hypocycloid with \(R=9r\). | Layer three rotations of the same curve at low opacity |
| 9 | Twelve-cusp flower | \(R=12r\), for a dense but regular floral outline. | Use a very thin line and place the curve off-centre |
| 10 | Near-circle epicycloid | Choose a large ratio such as \(R=30r\), making many shallow lobes. | Treat it like a decorative border or circular frame |

## 11–20: Transform the tracing point

A true cycloid traces a point exactly on the rolling circle’s circumference; moving the point inward or outward creates the related **hypotrochoid** and **epitrochoid** families. [mathshistory.st-andrews.ac](https://mathshistory.st-andrews.ac.uk/Curves/Hypocycloid/)

| # | Variation | Design idea | Aesthetic treatment |
|---|---|---|---|
| 11 | Inner-traced rosette | Trace a point inside the rolling circle, producing a hypotrochoid. | Dense looping pattern with a restrained two-colour gradient |
| 12 | Outer-traced rosette | Trace a point beyond the rolling circle, producing an epitrochoid. | Make the outer loops prominent and the base curve faint |
| 13 | Progressive tracing radius | Animate or layer several tracing radii from \(0.2r\) to \(1.5r\). | Use opacity rather than colour change to preserve unity |
| 14 | Dual tracing points | Draw two curves from points on opposite sides of the rolling circle. | Render one curve solid and one dashed |
| 15 | Triple tracing points | Use three equally spaced points on the rolling circle. | Assign a limited triadic palette, one hue per curve |
| 16 | Offset tracing point | Move the tracing point slightly off the rolling circle’s centre, creating gentle asymmetry. | Keep the composition centered but let the curve breathe unevenly |
| 17 | Elliptical tracing point | Replace the circular rolling path with a small ellipse. | A subtle distortion that reads as hand-drawn rather than mechanical |
| 18 | Trailing point cloud | Plot many closely spaced points along the curve rather than a continuous line. | Use small dots with size varying by speed |
| 19 | Speed-shaded curve | Colour the curve by the tracing point’s instantaneous speed. | Use a two-colour gradient, not a rainbow |
| 20 | Ghost trace | Show the completed curve faintly while animating the current trace brightly. | Ideal for an interactive webpage or projection |

## 21–25: Combine the two families

| # | Variation | Design idea | Aesthetic treatment |
|---|---|---|---|
| 21 | Inside–outside pair | Overlay a hypocycloid and an epicycloid with the same \(R/r\) ratio. | One curve in warm tone, the other in cool tone |
| 22 | Nested counter-rotation | Place a small epicycloid inside a larger hypocycloid, rotated in opposite directions. | Keep both curves the same line weight |
| 23 | Phase-shifted twins | Draw two identical curves with a small phase difference. | The overlap creates a moiré-like interference effect |
| 24 | Cycloidal gear profile | Combine an epicycloid addendum with a hypocycloid dedendum, as in cycloidal gearing.  [blog.truegeometry](https://blog.truegeometry.com/api/exploreHTML/4f3443d0a67d576f29232faf50c8ffac.exploreHTML) | Render as a technical blueprint with a single highlighted tooth |
| 25 | Hybrid flower | Use an epicycloid for the outer petal outline and a hypocycloid for the inner core. | Limit the palette to two related hues plus one accent |

## 26–30: Compositional and 3D extensions

| # | Variation | Design idea | Aesthetic treatment |
|---|---|---|---|
| 26 | Rotational symmetry field | Repeat one curve \(n\) times around a centre at equal angular intervals. | Use very low opacity so overlaps become luminous |
| 27 | Spiral-scaled family | Scale successive copies of one curve by a constant factor. | Creates a tunnel or vortex-like composition |
| 28 | Ribbon extrusion | Give the 2D curve a narrow ribbon-like thickness in 3D. | Use a satin material and soft studio lighting |
| 29 | Tube-swept sculpture | Sweep a circular tube along the cycloidal path, producing a 3D knot-like object. | Matte ceramic or brushed metal finish |
| 30 | Layered relief panel | Place several related curves at different depths in a shallow 3D relief. | Use shadow and depth rather than colour to separate the layers |

## Strong starting set

For a visually cohesive collection, begin with these six:

- **Deltoid** (#1) for minimal geometric clarity.
- **Nephroid** (#6) for smooth organic movement.
- **Inner-traced rosette** (#11) for intricate Spirograph-like density.
- **Inside–outside pair** (#21) for a clear comparison of the two families.
- **Phase-shifted twins** (#23) for visual interference.
- **Tube-swept sculpture** (#29) for a 3D object-oriented extension.

A useful implementation approach is to use the unified parametric form

\[
x(\theta)=(R+s r)\cos\theta - s r\cos\!\left(\frac{R+s r}{r}\theta\right),
\qquad
y(\theta)=(R+s r)\sin\theta - s r\sin\!\left(\frac{R+s r}{r}\theta\right),
\]

with \(s=1\) for an epicycloid and \(s=-1\) for a hypocycloid.  For richer rosettes, replace the final \(r\) multiplying the second trigonometric term by a tracing distance \(d\), which produces epitrochoids and hypotrochoids. [maplesoft](https://www.maplesoft.com/support/help/maple/view.aspx?path=MathApps/EpicycloidAndHypocycloid)
