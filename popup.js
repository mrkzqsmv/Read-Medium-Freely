document.getElementById("goButton").addEventListener("click", function () {
  const url = document.getElementById("urlInput").value.trim();
  if (!url.startsWith("http")) {
    alert("Please type the valid url");
    return;
  }

  const freediumUrl = `https://freedium.cfd/${url}`;
  chrome.tabs.create({ url: freediumUrl });
});

