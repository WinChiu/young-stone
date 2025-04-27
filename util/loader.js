// 等整個頁面（含圖片、字型等）載入完
setTimeout(() => {
  document.getElementById('loader-logo').classList.add('active');
}, 1500);

window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  setTimeout(() => window.scrollTo(0, 0), 500);

  let isLoadDone = false;
  let isAnimationDone = false;

  // 監聽 load 完成
  isLoadDone = true;
  tryRemoveLoader();

  // 監聽動畫時間到
  setTimeout(() => {
    isAnimationDone = true;
    tryRemoveLoader();
  }, 5000); // 你的 SVG 動畫時間

  function tryRemoveLoader() {
    if (isLoadDone && isAnimationDone) {
      // 兩個都完成後才開始 fade out
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 900); // 與你的 CSS transition 時間一致
    }
  }
});
