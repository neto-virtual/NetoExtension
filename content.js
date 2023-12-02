// content.js
const whiteList = [
  'https://www.google.com/',
  'https://www.facebook.com/',
  'https://www.twitter.com/',
  'https://www.instagram.com/',
  'https://www.linkedin.com/',
];

// Create overlay div and set its attributes and inner HTML
const overlayDiv = document.createElement('div');
overlayDiv.setAttribute('id', 'neto_virtual_wrapper');
overlayDiv.innerHTML = `
  <div id="neto_virtual_content">
    <button id="neto_virtual_close_btn">&times;</button>
    <h3>NetoVirtual:</h3>
    <p id="neto_virtual_message"></p>
  </div>
`;
document.body.appendChild(overlayDiv); // Append the overlay to the body

// Getting the current URL and displaying it
const currentUrl = window.location.href;

// Alert user if the website doesn't use https
if (!currentUrl.startsWith('https')) {
  document.getElementById('neto_virtual_message').textContent =
    'Site não seguro! Não insira informações pessoais nem financeiras.';
}

// Add 'ok' emoji if the website is in the white list
if (whiteList.includes(currentUrl)) {
  document.getElementById('neto_virtual_message').textContent =
    'Site na lista de sites seguros ✅';
}

document.getElementById('currentUrl').textContent = currentUrl;

// Function to close the overlay
function closeOverlay() {
  overlayDiv.style.display = 'none';
}

// Ensure close button is accessible after it's appended to the DOM
document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.getElementById('neto_virtual_close_btn');

  // Check if closeBtn is not null before attaching the event listener
  if (closeBtn) {
    console.log('closeBtn is not null');
    closeBtn.addEventListener('click', closeOverlay);
  } else {
    console.log('closeBtn is null');
  }
});
