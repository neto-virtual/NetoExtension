document.getElementById('checkButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentTab = tabs[0];
    var url = new URL(currentTab.url);
    
    if (url.protocol === 'https:') {
      document.getElementById('result').textContent = 'Site seguro!';
    } else {
      document.getElementById('result').textContent = 'Atenção! Este site pode não ser seguro.';
    }
  });
});
