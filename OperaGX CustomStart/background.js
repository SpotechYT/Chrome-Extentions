var page = "https://www.google.com/";
var start = "chrome://startpage/";

chrome.tabs.onCreated.addListener(function(tab) {
    if (tab.status === "complete" && tab.url === start) {
        chrome.tabs.update(tab.id, {
            url: page
        });
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.url === start) {
        chrome.tabs.update(tabId, {
            url: page
        });
    }
});