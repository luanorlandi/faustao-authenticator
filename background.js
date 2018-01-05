const audios = [];

audios[0] = new Audio();
audios[0].src = "audio/erro1.mp3";

audios[1] = new Audio();
audios[1].src = "audio/erro2.mp3";

function playAudio(message) {
    const randomIndex = Math.floor(Math.random() * audios.length);
    const audio = audios[randomIndex];

    if(message == "play") {
        audio.play();
    }
}

chrome.runtime.onMessage.addListener(playAudio);