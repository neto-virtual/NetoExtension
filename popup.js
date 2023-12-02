// popup.js
document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    const currentUrl = tabs[0].url;
    document.getElementById('currentUrl').textContent = currentUrl;
  });
});
