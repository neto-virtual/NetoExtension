// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getURL') {
    sendResponse({ url: window.location.href });
  }
});
