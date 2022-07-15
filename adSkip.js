
const evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
});

setInterval(() => {
    const adButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
    const bottomAdButton = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
    if(adButton) {
        // adButton.dispatchEvent(evt);
        adButton.click();
        console.log("Blocked Skippable")
    }
    if(bottomAdButton) {
        // bottomAdButton.dispatchEvent(evt);
        bottomAdButton.click();
        console.log("Blocked Overlay")
    }
    // console.log("No Button Found")
}, 1000);