import os
import json

def list_audio_files(folder_name='Music/Files', output_file='Music/audio_files.json'):
    # Common audio extensions
    audio_extensions = ('.mp3', '.wav', '.flac', '.m4a', '.aac', '.ogg', '.wma', '.amr')
    
    # Check if folder exists
    if not os.path.exists(folder_name):
        print(f"Error: The folder '{folder_name}' does not exist.")
        return

    # List and filter files
    audio_files = []
    for file in os.listdir(folder_name):
        if file.lower().endswith(audio_extensions):
            audio_files.append(file)
            
    # Write to JSON file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(audio_files, f, indent=4, ensure_ascii=False)
        print(f"Successfully saved {len(audio_files)} audio file names to '{output_file}'.")
    except Exception as e:
        print(f"An error occurred while writing the file: {e}")

if __name__ == '__main__':
    list_audio_files()
