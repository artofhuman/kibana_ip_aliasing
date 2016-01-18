if (window.top === window) {
  var script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = chrome.extension.getURL('/aliasing.js');
  document.head.appendChild(script);
}
