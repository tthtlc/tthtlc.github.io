import matplotlib.pyplot as plt
import numpy as np

# Parameters
R = 100
r = 50
a = 9
b = 14
phi = np.pi / 4

# Time parameter
t = np.linspace(0, 2 * np.pi * 30, 600)

# Parametric equations
x = R * np.sin(a * t + phi) + r * np.sin(b * t)
y = R * np.cos(a * t + phi) + r * np.cos(b * t)

# Plotting
plt.figure(figsize=(6, 6))
plt.plot(x, y, color='purple', linewidth=0.5)
plt.axis('equal')
plt.axis('off')
plt.show()

