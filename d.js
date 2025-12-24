const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const playIcon = document.getElementById("playIcon");
const progress = document.getElementById("progress");
const back10 = document.getElementById("back10");
const forward10 = document.getElementById("forward10");

playPause.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; // pause
    } else {
        audio.pause();
        playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>'; // play
    }
});

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

back10.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

forward10.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

