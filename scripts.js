var html = '';
var red;
var green;
var blue;
var rgbColor;


// longer procedure

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
// html += '<div style="background-color: ' + rgbColor + '"></div>';


// refactoring to simplify the code
for (var randomColors = 1 ; randomColors <= 7; randomColors ++){
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color: ' + rgbColor + '"></div>';
}

document.write(html);