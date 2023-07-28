// Constructor function for MandelbrotSet objects
function MandelbrotSet(canvasId) {
      // Get the canvas element by its ID
      const canvas = document.getElementById(canvasId);
    
      // Check if the canvas element exists, if not, display an error message and return
      if (!canvas) {
        console.error(`Canvas with ID "${canvasId}" not found.`);
        return;
      }
    
      // Get the 2D rendering context of the canvas
      const ctx = canvas.getContext('2d');
    
      // Get the width and height of the canvas
      const width = canvas.width;
      const height = canvas.height;
    
      // Set the maximum number of iterations for calculating the Mandelbrot set
      const maxIterations = 1000;
    
      // Set the color for points inside the Mandelbrot set (in this case, black)
      const insideSetColor = 'black';
    
      // Initialize zoom factor, offset values for panning
      let zoomFactor = 1;
      let offsetX = 0;
      let offsetY = 0;
    
      // Custom color gradient for points outside the Mandelbrot set
      // This function returns a color based on the number of iterations (n)
      function getColor(iterations) {
        if (iterations === maxIterations) {
          return insideSetColor;
        }
    
        // Calculate color based on the number of iterations normalized to [0, 1]
        const normalizedIterations = iterations / maxIterations;
    
        // Calculate hue and lightness values based on the normalized iterations
        const hue = 240 + 360 * normalizedIterations;
        const lightness = 50 + 50 * normalizedIterations;
    
        // Convert the hue, saturation, and lightness values to an HSL color string
        return `hsl(${hue}, 100%, ${lightness}%)`;
      }
    
      // Local function to draw the Mandelbrot set on the canvas
      function drawMandelbrot() {
        // Loop through all the pixels in the canvas
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            // Convert pixel coordinates to complex coordinates
            const x0 = (x - width / 2) / (0.5 * zoomFactor * width) + offsetX;
            const y0 = (y - height / 2) / (0.5 * zoomFactor * height) + offsetY;
    
            // Initialize complex number variables
            let a = x0;
            let b = y0;
    
            // Iterate the Mandelbrot formula for a maximum number of times (maxIterations)
            let n = 0;
            while (n < maxIterations) {
              const aa = a * a;
              const bb = b * b;
              const twoab = 2.0 * a * b;
              a = aa - bb + x0;
              b = twoab + y0;
    
              // If the magnitude of the complex number exceeds a threshold (here, 16), break the loop
              if (aa + bb > 16) {
                break;
              }
    
              // Increment the iteration count
              n++;
            }
    
            // Get the color for the current point based on the number of iterations
            const color = getColor(n);
    
            // Set the fill style to the color and draw a single pixel at the current (x, y) coordinates
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    
      // Instance method to handle zooming in
      this.zoomIn = function () {
        zoomFactor *= 0.5; // Zoom in by a factor of 0.5
        drawMandelbrot(); // Redraw the Mandelbrot set with the updated zoom
      };
    
      // Instance method to handle zooming out
      this.zoomOut = function () {
        zoomFactor *= 2; // Zoom out by a factor of 2
        drawMandelbrot(); // Redraw the Mandelbrot set with the updated zoom
      };
    
      // Event listener for mouse clicks on the canvas
      canvas.addEventListener('click', function (event) {
        // Get the mouse position relative to the canvas
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
    
        // Convert mouse coordinates to complex coordinates
        const clickedX = (mouseX - width / 2) / (0.5 * zoomFactor * width);
        const clickedY = (mouseY - height / 2) / (0.5 * zoomFactor * height);
    
        // Update the offset values to center the clicked point
        offsetX += clickedX;
        offsetY += clickedY;
    
        // Zoom in on the clicked point
        this.zoomIn();
      }.bind(this));
    
      // Event listener for mousewheel event on the canvas
      canvas.addEventListener('wheel', function (event) {
        event.preventDefault(); // Prevent default scrolling behavior
    
        // Determine the direction of the scroll (up or down)
        const zoomDelta = event.deltaY > 0 ? -1 : 1; // -1 for scrolling down, 1 for scrolling up
    
        // Zoom in or out based on the scroll direction
        if (zoomDelta === 1) {
          this.zoomIn();
        } else {
          this.zoomOut();
        }
      }.bind(this));
    
      // Initial draw of the Mandelbrot set
      drawMandelbrot();
    }
    
    // Create a new MandelbrotSet instance and pass the canvas ID
    const mandelbrotSet = new MandelbrotSet('mandelbrotCanvas');
    
    