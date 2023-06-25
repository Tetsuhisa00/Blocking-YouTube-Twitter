
//　ブロックするサイトはYouTubeとTwitterに設定
const blockedSites = ["youtube.com", "twitter.com"];

chrome.tabs.query({}, function(tabs) {
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    if (blockedSites.some(site => tab.url.includes(site))) {
      chrome.tabs.update(tab.id, { url: "chrome://newtab/" });
    }
  }
});


