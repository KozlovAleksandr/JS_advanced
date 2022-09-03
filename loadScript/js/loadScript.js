console.log("loadScript");

function loadScript(url, callback) {
  const script = document.createElement("script");

  script.src = url;
  script.onload = callback;

  document.body.appendChild(script);
}
