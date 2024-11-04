
    // Save the canvas as an image
    saveCanvasAsImage(canvas);
}

// Function to save the canvas as an image file
function saveCanvasAsImage(canvas) {
    const dataURL = canvas.toDataURL('image/png'); // or 'image/jpeg' or 'image/gif'
    
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas_image.png'; // You can change the file extension and name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


