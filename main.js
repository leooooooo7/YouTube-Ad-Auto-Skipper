//video-ads ytp-ad-module

const evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
});

setInterval(() => {
    const adButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
    if(adButton) {
        adButton.dispatchEvent(evt);
        console.log("Working")

    }
    console.log("No Button Found")
}, 1000);