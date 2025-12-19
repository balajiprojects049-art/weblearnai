# Script to extract images from Word documents
$publicFolder = "c:\Users\hp\OneDrive\Desktop\new clients\web\public"
$assetsFolder = "c:\Users\hp\OneDrive\Desktop\new clients\web\src\assets"

# Create assets folder if it doesn't exist
if (-not (Test-Path $assetsFolder)) {
    New-Item -ItemType Directory -Path $assetsFolder -Force
}

# Get all .docx files in public folder
$docxFiles = Get-ChildItem -Path $publicFolder -Filter "*.docx"

Write-Host "Found $($docxFiles.Count) Word documents" -ForegroundColor Green
Write-Host ""

foreach ($docFile in $docxFiles) {
    Write-Host "Processing: $($docFile.Name)" -ForegroundColor Cyan
    
    # Create a temporary zip file
    $tempZip = Join-Path $publicFolder "$($docFile.BaseName)_temp.zip"
    Copy-Item $docFile.FullName $tempZip
    
    # Create temporary extraction folder
    $tempExtract = Join-Path $publicFolder "temp_$($docFile.BaseName)"
    
    try {
        # Extract the zip
        Expand-Archive -Path $tempZip -DestinationPath $tempExtract -Force
        
        # Check if media folder exists
        $mediaFolder = Join-Path $tempExtract "word\media"
        if (Test-Path $mediaFolder) {
            $images = Get-ChildItem -Path $mediaFolder
            Write-Host "  Found $($images.Count) images:" -ForegroundColor Yellow
            
            foreach ($image in $images) {
                # Create a descriptive name based on the document name
                $prefix = $docFile.BaseName -replace '\s+', '-' -replace '[()]', ''
                $newName = "$prefix-$($image.Name)"
                $destPath = Join-Path $assetsFolder $newName
                
                Copy-Item $image.FullName $destPath -Force
                Write-Host "    Copied: $newName" -ForegroundColor Green
            }
        } else {
            Write-Host "  No images found in this document" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    }
    finally {
        # Cleanup
        if (Test-Path $tempZip) { Remove-Item $tempZip -Force }
        if (Test-Path $tempExtract) { Remove-Item $tempExtract -Recurse -Force }
    }
    
    Write-Host ""
}

Write-Host "Extraction complete!" -ForegroundColor Green
Write-Host "Images saved to: $assetsFolder" -ForegroundColor Cyan
