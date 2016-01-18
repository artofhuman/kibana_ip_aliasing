if (window.top === window) {
  var inspectorScript = document.createElement('script');

  inspectorScript.type = 'text/javascript';
  inspectorScript.src = chrome.extension.getURL('/aliasing.js');
  document.head.appendChild(inspectorScript);
}
