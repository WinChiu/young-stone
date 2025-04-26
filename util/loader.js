// 等整個頁面（含圖片、字型等）載入完
setTimeout(() => {
  document.getElementById('loader-logo').classList.add('active');
}, 1500);

window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  setTimeout(() => window.scrollTo(0, 0), 1000);

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 900); // 與 CSS transition 時間一致
  }, 5000);
});
