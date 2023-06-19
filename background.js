
// ブロックするサイトのURLを指定してください
const blockedSites = ["twitter.com", "youtube.com"];

// タブの更新を監視するイベントリスナーを登録する
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // タブが更新された場合、新しいURLを取得する
  const url = changeInfo.url || tab.url;
  
  // ブロックリストにURLが含まれているかチェックする
  if (blockedSites.some(site => url.includes(site))) {
    // ブロックされたページにアクセスしようとした場合の処理
    // chromeのホーム画面(新規タブページのこと)に戻る
    if (url !== "chrome://newtab/") {
      chrome.tabs.update(tabId, { url: "chrome://newtab/" });
    }
  }
});

