document.addEventListener('DOMContentLoaded', () => {
  const billboard = document.getElementById('billboard');
  if (!billboard) return;

  billboard.classList.remove('hidden');

  const closeBillboard = () => {
    billboard.style.opacity = '0';
    billboard.style.pointerEvents = 'none';
    setTimeout(() => billboard.remove(), 300);
  };

  const closeButton = billboard.querySelector('.billboard-close');
  closeButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeBillboard();
  });

  billboard.addEventListener('click', (e) => {
    if (e.target === billboard) {
      closeBillboard();
    }
  });

  const bottomBar = document.getElementById('franchise-bottom-bar');
  const bottomBarClose = bottomBar?.querySelector('.franchise-bottom-close');
  bottomBarClose?.addEventListener('click', () => {
    bottomBar.remove();
  });
});
