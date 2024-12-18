async function clickNextButton() {
    const nextButton = document.querySelector('[aria-label="Sonraki video"]:not([aria-disabled="true"])');
    if (nextButton) {
      nextButton.click();
      console.log("Sonraki videoya geçiş yapıldı.");
      await new Promise(resolve => setTimeout(resolve, 1000));
    } else {
      console.log("Sonraki video butonu bulunamadı veya devre dışı.");
    }
  }
function logRemainingTimeAndSkip() {
    const video = document.querySelector('video');
    if (video) {
        const remainingTime = video.duration - video.currentTime;       
        if (remainingTime <= 0.5) {
            clickNextButton();
        }
    } else {
        console.log("Video element not found!");
    }
}
setInterval(logRemainingTimeAndSkip, 500);
const observer = new MutationObserver(() => {
    const nextButton = document.querySelector('[aria-label="Sonraki video"]:not([aria-disabled="true"])');
});
observer.observe(document.body, { childList: true, subtree: true });