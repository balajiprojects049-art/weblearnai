# PowerShell script to remove checkered pattern from logos
$assetsPath = "c:\Users\hp\OneDrive\Desktop\new clients\web\src\assets"

$logoFiles = @(
    'amazon-logo.png',
    'google-logo.png',
    'tcs-logo.png',
    'infosys-logo.png',
    'wipro-logo.png',
    'accenture-logo.png',
    'deloitte-logo.png',
    'cognizant-logo.png',
    'capgemini-logo.png',
    'ibm-logo.png',
    'oracle-logo.png'
)

Write-Host "Cleaning logo images..." -ForegroundColor Cyan
Write-Host ("-" * 50)

Add-Type -AssemblyName System.Drawing

foreach ($logoFile in $logoFiles) {
    $logoPath = Join-Path $assetsPath $logoFile
    
    if (Test-Path $logoPath) {
        try {
            # Load image
            $img = [System.Drawing.Image]::FromFile($logoPath)
            $bitmap = New-Object System.Drawing.Bitmap($img)
            
            # Process each pixel
            for ($y = 0; $y -lt $bitmap.Height; $y++) {
                for ($x = 0; $x -lt $bitmap.Width; $x++) {
                    $pixel = $bitmap.GetPixel($x, $y)
                    
                    # Check if pixel is light gray (checkered pattern: RGB around 192-204)
                    if ($pixel.R -ge 180 -and $pixel.R -le 220 -and 
                        $pixel.G -ge 180 -and $pixel.G -le 220 -and 
                        $pixel.B -ge 180 -and $pixel.B -le 220) {
                        # Replace with white
                        $bitmap.SetPixel($x, $y, [System.Drawing.Color]::White)
                    }
                }
            }
            
            # Save the cleaned image
            $img.Dispose()
            $bitmap.Save($logoPath)
            $bitmap.Dispose()
            
            Write-Host "✓ Processed: $logoFile" -ForegroundColor Green
        }
        catch {
            Write-Host "✗ Error processing ${logoFile}: $_" -ForegroundColor Red
        }
    }
    else {
        Write-Host "✗ File not found: $logoFile" -ForegroundColor Yellow
    }
}

Write-Host ("-" * 50)
Write-Host "Done! All logos have been cleaned." -ForegroundColor Cyan
