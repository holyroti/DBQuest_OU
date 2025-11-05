import os
from PIL import Image

def embed_in_canvas(image_path, canvas_size, offset):
    """
    Opens the image at image_path and embeds it in a new transparent canvas 
    of size canvas_size, placing it at the given offset.
    """
    img = Image.open(image_path).convert("RGBA")
    canvas = Image.new("RGBA", canvas_size, (0, 0, 0, 0))
    canvas.paste(img, offset, img)
    return canvas

# --- Configuration ---

# Base image (must be set to your desired dimensions, e.g., 1137×2048)
base_image_path = "C:/Users/rohit/Desktop/final_repository/src/assets/novel/main/danny/danny.png"  # change per character as needed
base_img = Image.open(base_image_path).convert("RGBA")
canvas_size = base_img.size  # e.g., (1137, 2048)

# Directories for eyes and mouth images for the same character.
# Adjust these paths to point to the corresponding folders.
eyes_dir = "C:/Users/rohit/Desktop/final_repository/src/assets/novel/main/danny"   # folder containing eyes images for danny
mouth_dir = "C:/Users/rohit/Desktop/final_repository/src/assets/novel/main/danny"  # folder containing mouth images for danny

# Output directories for processed images
output_eyes_dir = "output_danny_eyes"
output_mouth_dir = "output_danny_mouth"
os.makedirs(output_eyes_dir, exist_ok=True)
os.makedirs(output_mouth_dir, exist_ok=True)

# Define vertical offset as a fraction of the canvas height.
# For example, place the eyes at 30% down and the mouth at 60% down.
eyes_y_offset_fraction = 0.30
mouth_y_offset_fraction = 0.60

# --- Process Eyes Images ---
for filename in os.listdir(eyes_dir):
    if filename.lower().endswith(".png") and "eyes" in filename.lower():
        img_path = os.path.join(eyes_dir, filename)
        # Open the eyes image to get its size.
        eyes_img = Image.open(img_path).convert("RGBA")
        # Center horizontally.
        offset_x = (canvas_size[0] - eyes_img.size[0]) // 2
        # Vertical offset: adjust fraction as needed.
        offset_y = int(canvas_size[1] * eyes_y_offset_fraction)
        offset = (offset_x, offset_y)
        new_img = embed_in_canvas(img_path, canvas_size, offset)
        out_path = os.path.join(output_eyes_dir, filename)
        new_img.save(out_path)
        print(f"Processed eyes image: {filename} -> {out_path}")

# --- Process Mouth Images ---
for filename in os.listdir(mouth_dir):
    if filename.lower().endswith(".png") and "mouth" in filename.lower():
        img_path = os.path.join(mouth_dir, filename)
        # Open the mouth image to get its size.
        mouth_img = Image.open(img_path).convert("RGBA")
        # Center horizontally.
        offset_x = (canvas_size[0] - mouth_img.size[0]) // 2
        # Vertical offset: adjust fraction as needed.
        offset_y = int(canvas_size[1] * mouth_y_offset_fraction)
        offset = (offset_x, offset_y)
        new_img = embed_in_canvas(img_path, canvas_size, offset)
        out_path = os.path.join(output_mouth_dir, filename)
        new_img.save(out_path)
        print(f"Processed mouth image: {filename} -> {out_path}")

print("Processing complete!")
