// List the audio files in Music/Files
let AUDIO_FILES = [];
async function loadAudioFiles() {
  try {
    const response = await fetch('audio_files.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Now this is an actual array
    AUDIO_FILES = await response.json(); 
    
    loadPlaylist();

  } catch (error) {
    console.error('Error reading JSON:', error);
  }
}

const AUDIO_PATH = "Files/";

function loadPlaylist() {
    const container = document.getElementById("audio-container");

    if (AUDIO_FILES.length === 0) {
        container.innerHTML =
            "<p>No audio files configured.</p>";
        return;
    }

    // Create dropdown
    const select = document.createElement("select");
    select.id = "audio-select";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a track...";
    defaultOption.disabled = true;
    defaultOption.selected = true;

    select.appendChild(defaultOption);

    // Add tracks
    AUDIO_FILES.forEach(filename => {
        const option = document.createElement("option");

        option.value = filename;
        option.textContent = filename.replace(
            /\.(mp3|wav|ogg|m4a|flac)$/i,
            ""
        );

        select.appendChild(option);
    });

    // Create ONE audio element
    const audio = document.createElement("audio");

    audio.id = "audio-player";
    audio.controls = true;
    audio.preload = "metadata";

    // Same-origin, so Web Audio can analyze it
    audio.crossOrigin = "anonymous";

    // Track selection
    select.addEventListener("change", () => {
        const filename = select.value;

        if (!filename) {
            return;
        }

        // Stop current track
        audio.pause();

        // Safely encode each part of the path
        const encodedPath = AUDIO_PATH
            .split("/")
            .map(part => encodeURIComponent(part))
            .join("/");

        const encodedFilename =
            encodeURIComponent(filename);

        // Audio is served directly by GitHub Pages
        audio.src = encodedPath + encodedFilename;

        audio.currentTime = 0;

        // Connect to visualizer
        initVisualizer(audio);

        // Start playback
        audio.play().catch(error => {
            console.error(
                "Playback failed:",
                error
            );
        });
    });

    container.innerHTML = "";

    container.appendChild(select);
    container.appendChild(audio);
}


// Call the function to run it
loadAudioFiles();
