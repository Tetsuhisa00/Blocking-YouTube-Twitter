
// ブロックするサイトのURLを指定してください
const blockedSites = ["twitter.com", "youtube.com"];

// タブの更新を監視するイベントリスナーを登録します
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // タブが更新された場合、新しいURLを取得します
  const url = changeInfo.url || tab.url;
  
  // ブロックリストにURLが含まれているかをチェックします
  if (blockedSites.some(site => url.includes(site))) {
    // ブロックされたページにアクセスしようとした場合の処理をここに記述します
    // 例えば、アクセスを遮断するか、エラーページを表示するなどの処理を行います
    // この例では、指定したURLへのアクセスを許可します
    if (url !== "https://github.com/Tetsuhisa00") {
      chrome.tabs.update(tabId, { url: "https://github.com/Tetsuhisa00" });
    }
  }
});

