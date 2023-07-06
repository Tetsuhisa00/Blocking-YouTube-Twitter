
//　ブロックするサイトはYouTubeとTwitterに設定
const blockedSites = ["youtube.com", "twitter.com"];

// 開いている全てのタブをチェックしてブロックリストにあるURLが含まれているかを確認する
// 含まれている場合は、タブを閉じる
chrome.tabs.query({}, (tabs) => {
  for (let tab of tabs) {
    if (blockedSites.some(site => tab.url.includes(site))) {
      chrome.tabs.remove(tab.id);
    }
  }
});

// タブでURLが更新された場合に作動する
// 更新されたURLがブロックリストに含まれている場合は、タブをChromeの新しいタブに更新する
chrome.webNavigation.onCommited.addListener((details) => {
  if (blockedSites.some(site => details.url.includes(site))) {
    if (details.url !== "chrome://newtab/") {
      chrome.tabs.update(details.tabId, { url: "chrome://newtab/" });
    }
  }
}, {url: [{urlContains: 'youtube.com'}, {urlContains: 'twitter.com'}]});
