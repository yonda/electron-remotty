onload = function() {
  var webview = document.getElementById("mainWebview");

  webview.addEventListener('new-window', function(e) {
    require('shell').openExternal(e.url);
  });
}
