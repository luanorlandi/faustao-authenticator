const element = document.getElementById("pass");

if(element != null && element.getAttribute("autofocus") == "1") {
    chrome.runtime.sendMessage("play");
}