var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(mutation.type == "attributes" &&
            mutation.attributeName == "aria-invalid" &&
            mutation.target.getAttribute("type") == "password") {
            
            chrome.runtime.sendMessage("play");
        }
    });
});

var element = document.getElementById("view_container");

var config = {
    attributes: true,
    subtree: true
};

observer.observe(element, config);