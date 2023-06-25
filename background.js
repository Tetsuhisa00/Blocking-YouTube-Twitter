
//　ブロックするサイトはYouTubeとTwitterに設定
const blockedSites = ["youtube.com", "twitter.com"];

// 開いている全てのタブをチェックしてブロックリストにあるURLが含まれているかを確認する
// 含まれている場合は、タブを閉じる
chrome.tabs.query({}, function(tabs)  {
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    if (blockedSites.some(site => tab.url.includes(site))) {
      chrome.tabs.remove(tab.id);
    }
  }
});

// タブでURLが更新された場合に作動する
// 更新されたURLがブロックリストに含まれている場合は、タブをChromeの新しいタブに更新する
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // タブが更新された場合、新しいURLを取得する
  const url = changeInfo.url || tab.url;
  
  // ブロックリストにURLが含まれているかをチェック
  // ブロックリストに含まれている場合は、タブをChromeの新しいタブに更新する
  if (blockedSites.some(site => url.includes(site))) {
    if (url !== "chrome://newtab/") {
      chrome.tabs.update(tabId, { url: "chrome://newtab/" });
    }
  }
});

