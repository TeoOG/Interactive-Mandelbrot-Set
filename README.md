# Interactive-Mandelbrot-Set
Explore intricate fractal patterns, zoom in to uncover hidden wonders


This project is a JavaScript-based visualization of the famous Mandelbrot set, a fascinating fractal that exhibits intricate and self-similar patterns. The Mandelbrot set is represented in the complex plane and is determined by iterating a simple mathematical formula.

Usage

Zoom In: You can zoom in on the Mandelbrot set by clicking on the canvas or using the "Zoom In" button. When you click on the canvas, the point you clicked will be zoomed in, and the Mandelbrot set will be redrawn to show more detail in that region. Similarly, the "Zoom In" button will zoom in on the center of the canvas.

Zoom Out: You can zoom out from the Mandelbrot set by using the "Zoom Out" button. The "Zoom Out" button will reduce the zoom level, allowing you to view larger portions of the Mandelbrot set.

Color Scheme: The colors of the Mandelbrot set are based on the number of iterations required for each point to exceed a certain threshold. Points inside the Mandelbrot set are colored black, while points outside the set are colored using a custom color gradient. The color gradient is based on the number of iterations, and it creates beautiful hues ranging from pink and green to cyan, resulting in a visually appealing visualization.

How It Works

The Mandelbrot set is defined by iterating the mathematical formula 
�
�
+
1
=
�
�
2
+
�
z 
n+1
​
 =z 
n
2
​
 +c, where 
�
�
z 
n
​
  is a complex number, 
�
c is the complex number corresponding to the point in the complex plane being tested, and 
�
n is the number of iterations. If the magnitude of 
�
�
z 
n
​
  ever becomes greater than a certain threshold (usually set to 2), the sequence is considered unbounded, and the point is not part of the Mandelbrot set.

The visualization starts with an initial zoom factor of 1, displaying the entire Mandelbrot set. As you zoom in or out, the zoom factor is adjusted accordingly, and the Mandelbrot set is redrawn to show more detail or a larger view.

Color Scheme

The color scheme is designed to make the Mandelbrot set visually appealing. Points inside the set are colored black, creating a sharp contrast between the set and its surroundings. Points outside the set are colored using a custom color gradient based on the number of iterations. The hue of the color varies as the number of iterations increases, creating smooth transitions between colors. This results in beautiful patterns and an engaging visualization of the Mandelbrot set.

Interactivity

The Mandelbrot set visualization is interactive, allowing you to explore different regions of the set by clicking on the canvas or using the "Zoom In" button to zoom in, and the "Zoom Out" button to zoom out. The colors and patterns will dynamically adjust based on your interactions, providing an immersive experience in the world of fractals.

Enjoy Exploring the Mandelbrot Set!
