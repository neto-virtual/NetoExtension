// popup.js
chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
  const currentUrl = tabs[0].url;
  document.getElementById('currentUrl').textContent = currentUrl;

  const overlay = document.getElementById('overlay');
  overlay.style.display = 'block';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.onclick = function () {
    overlay.style.display = 'none';
  };
});
