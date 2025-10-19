chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'removePopups') {
        // Query the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs.length > 0) {
                // Execute the content script in the active tab
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['content.js']
                });
            }
        });
    }
});


