var audio = new Audio();
audio.src = "audio/erro1.mp3";

chrome.tabs.onCreated.addListener(function() {
  chrome.tabs.executeScript(null, {file: "content.js"});
});

chrome.runtime.onMessage.addListener(function(message) {
    if(message == "play") {
        audio.play();
    }
});