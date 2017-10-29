var audio = new Audio();
audio.src = "audio/erro1.mp3";

chrome.runtime.onMessage.addListener(function(message) {
    if(message == "play") {
        audio.play();
    }
});