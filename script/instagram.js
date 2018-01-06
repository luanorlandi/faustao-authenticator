const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        const target = mutation.target;

        if(target.tagName == "FORM" &&
            target.hasChildNodes() &&
            target.childNodes[3] &&
            target.childNodes[3].hasChildNodes() &&
            target.childNodes[3].childNodes[0] &&
            target.childNodes[3].childNodes[0].id == "slfErrorAlert") {
            
            console.log(mutation);
            chrome.runtime.sendMessage("play");
        }
    });
});

const element = document.getElementById("react-root");

const config = {
    childList: true,
    subtree: true
};

observer.observe(element, config);