document.addEventListener('DOMContentLoaded', () => {
  const billboard = document.getElementById('billboard');
  if (!billboard) return;

  // 1. 顯示 billboard
  billboard.classList.remove('hidden');

  /** 封裝淡出移除函式，供多處呼叫 */
  const closeBillboard = () => {
    billboard.style.opacity = '0';
    billboard.style.pointerEvents = 'none';
    setTimeout(() => billboard.remove(), 300); // 與 CSS transition 時間一致
  };

  // 2‑a. 右上角 X 按鈕
  billboard.querySelector('.close-btn').addEventListener('click', (e) => {
    e.stopPropagation(); // 防止冒泡到外層
    closeBillboard();
  });

  // 2‑b. 點擊黑色遮罩（背景）也關閉
  billboard.addEventListener('click', (e) => {
    // 只有「點到 billboard 本身」(背景區域) 才觸發關閉
    if (e.target === billboard) {
      closeBillboard();
    }
    // 如果點到 link / button 會因 e.stopPropagation 而不進入這裡
  });
});
