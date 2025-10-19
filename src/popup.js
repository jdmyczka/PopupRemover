document.getElementById('removePopupsBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "removePopups" });
});

