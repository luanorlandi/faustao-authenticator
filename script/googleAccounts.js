const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(mutation.type == "attributes" &&
            mutation.attributeName == "aria-invalid" &&
            mutation.target.getAttribute("type") == "password") {
            
            chrome.runtime.sendMessage("play");
        }
    });
});

const element = document.getElementById("view_container");

const config = {
    attributes: true,
    subtree: true
};

observer.observe(element, config);