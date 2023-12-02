// content.js
const svgTrusted = `<svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_439)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8286 31.3707H26.8788C27.2093 31.3707 27.4847 31.701 27.3745 32.0312C27.0441 33.297 26.1077 35.3884 23.1334 35.2233C21.6463 35.1132 19.5532 34.5078 19.2778 31.9211C19.2778 31.5909 19.4982 31.3707 19.8286 31.3707ZM39.3819 31.3707C39.3819 33.5172 37.6744 35.2233 35.5263 35.2233C33.3782 35.2233 31.6707 33.5172 31.6707 31.3707C31.6707 29.2243 33.3782 27.5182 35.5263 27.5182C37.6193 27.5182 39.3819 29.2243 39.3819 31.3707ZM11.2913 35.2233C13.4394 35.2233 15.1469 33.5172 15.1469 31.3707C15.1469 29.2243 13.4394 27.5182 11.2913 27.5182C9.1432 27.5182 7.43574 29.2243 7.43574 31.3707C7.43574 33.5172 9.1432 35.2233 11.2913 35.2233ZM3.63525 38.9107C0.93635 32.2513 1.81762 25.2617 5.1224 19.8131L21.3158 9.46627C22.0318 9.41124 22.8029 9.3562 23.574 9.3562H24.4002C35.8017 9.3562 45.0551 18.6023 45.0551 29.9948C45.0551 33.0218 44.4492 35.9938 43.2925 38.8006C42.1359 41.6075 40.4284 44.1392 38.2803 46.2856C36.1322 48.432 33.5985 50.1381 30.7895 51.2939C27.9804 52.4497 25.0061 53.0551 21.9767 53.0551H1.32191C1.04651 53.0551 0.771111 52.945 0.550793 52.8349C0.330475 52.7248 0.165236 52.4497 0.0550772 52.1745C-0.0550819 51.8993 -0.0550819 51.6241 0.0550772 51.3489C0.110157 51.0738 0.275395 50.8536 0.495714 50.6885L5.72827 46.5057C5.94859 46.3406 6.11383 46.0654 6.16891 45.7903C6.22399 45.5151 6.22399 45.2399 6.11383 44.9647L3.63525 38.9107Z" fill="#26A43A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5153 8.69577L20.7099 6.65942C21.0955 6.43928 21.5912 6.54935 21.8666 6.87957C22.0869 7.26482 21.9767 7.76015 21.6463 8.03533L5.72827 18.2721L4.847 16.8962C2.69889 13.3739 3.69033 8.80584 7.16034 6.60438C10.6303 4.40293 15.202 5.28351 17.5153 8.69577Z" fill="#26A43A"/>
</g>
<defs>
<clipPath id="clip0_5_439">
<rect width="45" height="53" fill="white"/>
</clipPath>
</defs>
</svg>
`
const svgWarning = `<svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_463)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.3819 31.3707C39.3819 33.5172 37.6744 35.2233 35.5263 35.2233C33.3782 35.2233 31.6708 33.5172 31.6708 31.3707C31.6708 29.2243 33.3782 27.5182 35.5263 27.5182C37.6194 27.5182 39.3819 29.2243 39.3819 31.3707ZM11.2913 35.2233C13.4394 35.2233 15.1469 33.5172 15.1469 31.3707C15.1469 29.2243 13.4394 27.5182 11.2913 27.5182C9.14322 27.5182 7.43575 29.2243 7.43575 31.3707C7.43575 33.5172 9.14322 35.2233 11.2913 35.2233ZM3.63526 38.9107C0.936365 32.2513 1.81764 25.2617 5.12241 19.8131L21.3158 9.46627C22.0318 9.41124 22.8029 9.3562 23.5741 9.3562H24.4003C35.8017 9.3562 45.0551 18.6023 45.0551 29.9948C45.0551 33.0218 44.4492 35.9938 43.2925 38.8006C42.1359 41.6075 40.4284 44.1392 38.2803 46.2856C36.1322 48.432 33.5985 50.1381 30.7895 51.2939C27.9804 52.4497 25.0061 53.0551 21.9768 53.0551H1.32192C1.04652 53.0551 0.771127 52.945 0.550808 52.8349C0.33049 52.7248 0.165252 52.4497 0.0550925 52.1745C-0.0550666 51.8993 -0.0550666 51.6241 0.0550925 51.3489C0.110172 51.0738 0.275411 50.8536 0.495729 50.6885L5.72829 46.5057C5.94861 46.3406 6.11384 46.0654 6.16892 45.7903C6.224 45.5151 6.224 45.2399 6.11384 44.9647L3.63526 38.9107Z" fill="#E23535"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5153 8.69577L20.7099 6.65942C21.0955 6.43928 21.5912 6.54935 21.8666 6.87957C22.0869 7.26482 21.9767 7.76015 21.6463 8.03533L5.72827 18.2721L4.847 16.8962C2.69889 13.3739 3.69033 8.80584 7.16034 6.60438C10.6303 4.40293 15.202 5.28351 17.5153 8.69577Z" fill="#E23535"/>
<path d="M19.5 38.5C20.6667 36.8333 23.8 34.5 27 38.5" stroke="#FFD7D7" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_5_463">
<rect width="45" height="53" fill="white"/>
</clipPath>
</defs>
</svg>
`

const parteners = `<div id="neto_virtual_png" style="display: flex; gap: 20px; align-items: center; justify-content: center; flex-direction:"row";">
<img src="https://github.com/neto-virtual/NetoExtension/blob/01-popup/images/Magalu.png?raw=true" alt="Ícone PNG">
<img src="https://github.com/neto-virtual/NetoExtension/blob/01-popup/images/Carrefour.png?raw=true" alt="Ícone PNG">
<img src="https://github.com/neto-virtual/NetoExtension/blob/01-popup/images/Shopee.png?raw=true" alt="Ícone PNG">
<img src="https://github.com/neto-virtual/NetoExtension/blob/01-popup/images/Riachuelo.png?raw=true" alt="Ícone PNG">
</div>`

const htmlTemplate = `
<div id="neto_virtual_content">
  <button id="neto_virtual_close_btn">&times;</button>
  <div style="display: flex; gap: 8px; align-items: center;">
    <div id="neto_virtual_icon"></div>
    <h3 style="font-size: 35px; font-weight: 800; margin: 1rem 0; font-family: 'Roboto', sans-serif; ">NetoVirtual:</h3>
  </div>
  <p id="neto_virtual_message" style="font-size: 25px; margin: 1rem 0; font-family: 'Roboto', sans-serif; font-weight: 400; color: black;"></p>
  ${parteners}
  </div>
`
const whiteList = [
  'https://www.google.com/',
  'https://www.facebook.com/',
  'https://www.twitter.com/',
  'https://www.instagram.com/',
  'https://www.linkedin.com/',
];

const overlayDiv = document.createElement('div');

overlayDiv.setAttribute('id', 'neto_virtual_wrapper');
overlayDiv.innerHTML = htmlTemplate;

document.body.appendChild(overlayDiv); 



function loadOverlayContent(url) {
  if (!url.startsWith('https')) {
    document.getElementById('neto_virtual_message').innerHTML =
    `Encontramos vulnerabilidades neste<br>
    site e não a recomendamos.`;
    document.getElementById('neto_virtual_icon').innerHTML = svgWarning;
    document.getElementById('neto_virtual_wrapper').className = 'neto_virtual_warning';
  } else if (whiteList.includes(url)) {
    // Add 'ok' emoji if the website is in the white list
    document.getElementById('neto_virtual_message').textContent =
      'Site na lista de sites seguros ✅';
    document.getElementById('neto_virtual_icon').innerHTML = svgTrusted;
    document.getElementById('neto_virtual_wrapper').className = 'neto_virtual_trusted';
  } else {
    document.getElementById('neto_virtual_message').textContent =
      'Ainda não sei se esse site é seguro ou não.';
    document.getElementById('neto_virtual_icon').innerHTML = svgTrusted;
    document.getElementById('neto_virtual_wrapper').className = 'neto_virtual_neutral';
  }
  
  document.getElementById('currentUrl').textContent = url;
}

function closeOverlay(e) {
  e.preventDefault();
  overlayDiv.style.display = 'none';
}

const tabUrl = window.location.href;
const closeBtn = document.getElementById('neto_virtual_close_btn');
closeBtn.addEventListener('click', closeOverlay);


loadOverlayContent(tabUrl);
