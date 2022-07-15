//video-ads ytp-ad-module

const evt = new MouseEvent("click", {});

setInterval(() => {
    const adButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
    const bottomAdButton = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
    if(adButton) {
        adButton.dispatchEvent(evt);
        console.log("Working")
    }
    if(bottomAdButton) {
        bottomAdButton.dispatchEvent(evt);
        console.log("Working")
    }
    console.log("No Button Found")
}, 5);