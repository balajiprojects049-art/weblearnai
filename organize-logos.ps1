# Script to organize and rename technology logos
$assetsFolder = "c:\Users\hp\OneDrive\Desktop\new clients\web\src\assets"

Write-Host "Creating organized logo mappings..." -ForegroundColor Cyan
Write-Host ""

# Define the technology logo mappings based on the Word documents
# Azure logos mapping (from azure_logos-2)
$azureLogos = @{
    "azure_logos-2-image1.png" = "azure-data-factory-logo.png"
    "azure_logos-2-image2.png" = "azure-databricks-logo.png"
    "azure_logos-2-image3.png" = "microsoft-fabric-logo.png"
    "azure_logos-2-image4.png" = "unity-catalog-logo.png"
    "azure_logos-2-image5.png" = "delta-lake-logo.png"
    "azure_logos-2-image6.png" = "power-bi-logo.png"
    "azure_logos-2-image7.png" = "power-apps-logo.png"
    "azure_logos-2-image8.png" = "github-logo.png"
    "azure_logos-2-image9.png" = "apache-airflow-logo.png"
    "azure_logos-2-image10.png" = "sql-logo.png"
    "azure_logos-2-image11.png" = "python-logo.png"
    "azure_logos-2-image12.png" = "gen-ai-logo.png"
}

# AWS logos mapping (from AWS-Data-Engineer-Logos-1)
$awsLogos = @{
    "AWS-Data-Engineer-Logos-1-image1.png" = "aws-s3-logo.png"
    "AWS-Data-Engineer-Logos-1-image2.png" = "aws-glue-logo.png"
    "AWS-Data-Engineer-Logos-1-image3.png" = "aws-redshift-logo.png"
    "AWS-Data-Engineer-Logos-1-image4.png" = "aws-emr-logo.png"
    "AWS-Data-Engineer-Logos-1-image5.png" = "aws-lambda-logo.png"
    "AWS-Data-Engineer-Logos-1-image6.png" = "aws-kinesis-logo.png"
    "AWS-Data-Engineer-Logos-1-image7.png" = "aws-athena-logo.png"
    "AWS-Data-Engineer-Logos-1-image8.png" = "aws-dynamodb-logo.png"
}

Write-Host "Renaming Azure technology logos..." -ForegroundColor Yellow
foreach ($oldName in $azureLogos.Keys) {
    $newName = $azureLogos[$oldName]
    $oldPath = Join-Path $assetsFolder $oldName
    $newPath = Join-Path $assetsFolder $newName
    
    if (Test-Path $oldPath) {
        Copy-Item $oldPath $newPath -Force
        Write-Host "  ✓ Renamed: $oldName -> $newName" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Not found: $oldName" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Renaming AWS technology logos..." -ForegroundColor Yellow
foreach ($oldName in $awsLogos.Keys) {
    $newName = $awsLogos[$oldName]
    $oldPath = Join-Path $assetsFolder $oldName
    $newPath = Join-Path $assetsFolder $newName
    
    if (Test-Path $oldPath) {
        Copy-Item $oldPath $newPath -Force
        Write-Host "  ✓ Renamed: $oldName -> $newName" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Not found: $oldName" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Logo organization complete!" -ForegroundColor Green
Write-Host ""
Write-Host "New logo files created:" -ForegroundColor Cyan
Get-ChildItem -Path $assetsFolder | Where-Object { $_.Name -like '*-logo.png' } | Select-Object Name | Format-Table
