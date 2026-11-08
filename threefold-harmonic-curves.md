
Created a self-contained **HTML** animation using JavaScript and Canvas—no external libraries or image assets. It mathematically recreates the threefold looping structure and green–yellow–red coloring of your reference, rather than displaying the image itself. It is a visual approximation, not a recovered exact formula. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/13148127/52d9fef5-93a0-45c8-8400-467e172f8f21/image.jpg)

Open the attached HTML file in a browser to run it.

## Mathematical formula

The drawing uses a family of curves formed by adding two counter-rotating circular motions:

\[
z(t,u)=e^{i\rho}
\left[
a(u)e^{it}+b(u)e^{-2it+i\phi(u,\tau)}
\right].
\]

Equivalently, before the overall rotation:

\[
\begin{aligned}
x(t,u)&=a(u)\cos t+b(u)\cos\!\left(-2t+\phi(u,\tau)\right),\\
y(t,u)&=a(u)\sin t+b(u)\sin\!\left(-2t+\phi(u,\tau)\right).
\end{aligned}
\]

Here:

- \(t\in[0,2\pi]\) traces each closed curve.
- \(u\in[0,1]\) selects a curve within the layered family.
- \(a(u)\) and \(b(u)\) control the shape and spread.
- \(\phi(u,\tau)\) changes gently with animation time \(\tau\).
- \(\rho\) rotates the entire pattern.

The frequencies \(1\) and \(-2\) give exact threefold rotational symmetry:

\[
z\left(t+\frac{2\pi}{3},u\right)
=e^{2\pi i/3}z(t,u).
\]

The renderer colors slower-moving parts of each curve yellow and red, while faster-moving segments remain green and dimmer, producing bright tips and fine interior strands.

## Included controls

- Speed, curve count, and spread sliders.
- Pause/resume, including the Space shortcut.
- PNG export of the current frame.
- Hide controls; press H to show them again.
- Responsive, high-resolution canvas rendering.
- Reduced-motion preference support.
