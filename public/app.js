// Phase 1: report what this browser supports, so we know early if a device
// (e.g. iPhone Safari) can run speech recognition in later phases.
(function () {
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var checks = [
    ["Secure context (HTTPS)", window.isSecureContext],
    ["Speech recognition (Web Speech API)", !!SR],
    ["Microphone access API", !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)]
  ];
  var list = document.getElementById("checks");
  checks.forEach(function (c) {
    var li = document.createElement("li");
    li.className = c[1] ? "ok" : "bad";
    li.textContent = c[0];
    list.appendChild(li);
  });
  var ua = document.createElement("li");
  ua.textContent = navigator.userAgent;
  ua.style.fontSize = "0.75rem";
  ua.style.color = "#94a3b8";
  list.appendChild(ua);
})();
