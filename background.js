// background.js
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
  const tab = tabs[0];
  chrome.tabs.sendMessage(tab.id, { message: 'getURL' }, response => {
    document.getElementById('currentUrl').textContent = response.url;
  });
});