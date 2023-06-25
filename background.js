
//　ブロックするサイトはYouTubeとTwitterに設定
const blockedSites = ["youtube.com", "twitter.com"];

// タブの更新を監視するイベントリスナーを登録
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

