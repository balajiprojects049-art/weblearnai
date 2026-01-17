from PIL import Image
import os

# Path to the assets folder
assets_path = r"c:\Users\hp\OneDrive\Desktop\new clients\web\src\assets"

# List of logo files to process
logo_files = [
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
]

def remove_checkered_pattern(image_path):
    """Remove checkered pattern by replacing light gray pixels with white"""
    try:
        # Open image
        img = Image.open(image_path).convert('RGBA')
        
        # Get image data
        datas = img.getdata()
        
        new_data = []
        for item in datas:
            # Check if pixel is light gray (checkered pattern)
            # Checkered pattern typically has gray values around 192-204
            r, g, b, a = item
            
            # If it's a light gray color (part of the checkered pattern), make it white
            if 180 <= r <= 220 and 180 <= g <= 220 and 180 <= b <= 220:
                new_data.append((255, 255, 255, 255))  # White
            else:
                new_data.append(item)
        
        # Update image data
        img.putdata(new_data)
        
        # Save the cleaned image
        img.save(image_path)
        print(f"✓ Processed: {os.path.basename(image_path)}")
        
    except Exception as e:
        print(f"✗ Error processing {os.path.basename(image_path)}: {str(e)}")

# Process all logos
print("Cleaning logo images...")
print("-" * 50)

for logo_file in logo_files:
    logo_path = os.path.join(assets_path, logo_file)
    if os.path.exists(logo_path):
        remove_checkered_pattern(logo_path)
    else:
        print(f"✗ File not found: {logo_file}")

print("-" * 50)
print("Done! All logos have been cleaned.")
