import os

def rename_images_in_folder(folder_path):
    """
    Renames all image files in the specified folder numerically, starting from 1.

    Args:
        folder_path (str): The path to the folder containing images.
    """
    # Supported image extensions
    image_extensions = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"}

    # Get a list of all files in the folder
    try:
        files = os.listdir(folder_path)
    except FileNotFoundError:
        print(f"Error: Folder '{folder_path}' not found.")
        return

    # Filter files to include only images
    image_files = [f for f in files if os.path.splitext(f)[1].lower() in image_extensions]

    # Sort files to ensure consistent numbering
    image_files.sort()

    # Rename files numerically
    for index, file_name in enumerate(image_files, start=1):
        old_path = os.path.join(folder_path, file_name)
        new_name = f"{index}{os.path.splitext(file_name)[1]}"
        new_path = os.path.join(folder_path, new_name)

        try:
            os.rename(old_path, new_path)
            print(f"Renamed '{file_name}' to '{new_name}'")
        except OSError as e:
            print(f"Error renaming '{file_name}': {e}")

if __name__ == "__main__":
    folder_path = input("Enter the path to the folder containing images: ").strip()
    rename_images_in_folder(folder_path)
