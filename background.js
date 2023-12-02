// background.js
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'onload') {
    chrome.tabs.sendMessage(tabId, { message: 'getURL' }, function (response) {
      if (response && response.url) {
        alert('Current URL: ' + response.url);
      }
    });
  }
});
