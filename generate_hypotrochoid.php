<?php
// Get parameters from the URL
$R = isset($_GET['R']) ? intval($_GET['R']) : 240;
$r = isset($_GET['r']) ? intval($_GET['r']) : 40;
$d = isset($_GET['d']) ? intval($_GET['d']) : 150;
$colorHex = isset($_GET['color']) ? $_GET['color'] : '0000ff';

// Convert hex color to RGB
function hexToRgb($hex) {
    $hex = str_replace('#', '', $hex);
    return [
        'r' => hexdec(substr($hex, 0, 2)),
        'g' => hexdec(substr($hex, 2, 2)),
        'b' => hexdec(substr($hex, 4, 2)),
    ];
}

$rgbColor = hexToRgb($colorHex);

// Set up image dimensions
$width = 600;
$height = 600;

// Create a blank image
$image = imagecreatetruecolor($width, $height);
$backgroundColor = imagecolorallocate($image, 240, 240, 240); // Light grey background
imagefill($image, 0, 0, $backgroundColor);

// Define color for the Hypotrochoid curve
$lineColor = imagecolorallocate($image, $rgbColor['r'], $rgbColor['g'], $rgbColor['b']);

// Translate to center
$centerX = $width / 2;
$centerY = $height / 2;

// Draw the Hypotrochoid curve
function drawHypotrochoid($image, $centerX, $centerY, $R, $r, $d, $lineColor) {
    $x0 = ($R - $r) * cos(0) + $d * cos((($R - $r) / $r) * 0);
    $y0 = ($R - $r) * sin(0) - $d * sin((($R - $r) / $r) * 0);

    for ($t = 0; $t <= 2 * M_PI * $r / gcd($R, $r); $t += 0.01) {
        $x = ($R - $r) * cos($t) + $d * cos((($R - $r) / $r) * $t);
        $y = ($R - $r) * sin($t) - $d * sin((($R - $r) / $r) * $t);
        imageline($image, $centerX + $x0, $centerY - $y0, $centerX + $x, $centerY - $y, $lineColor);
        $x0 = $x;
        $y0 = $y;
    }
}

// Helper function to calculate GCD
function gcd($a, $b) {
    return $b ? gcd($b, $a % $b) : abs($a);
}

// Draw the Hypotrochoid on the image
drawHypotrochoid($image, $centerX, $centerY, $R, $r, $d, $lineColor);

// Set headers to download the image as a PNG file
header('Content-Type: image/png');
header('Content-Disposition: attachment; filename="hypotrochoid_R_' . $R . '_r_' . $r . '_d_' . $d . '.png"');

// Output the image
imagepng($image);

// Free up memory
imagedestroy($image);
?>

