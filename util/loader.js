// 這邊不用動，提早開啟 loader 的 active
setTimeout(() => {
  document.getElementById('loader-logo').classList.add('active');
}, 1500);

setTimeout(() => {
  document.getElementById('loader-logo').classList.add('flicker');
}, 5500);

const loader = document.getElementById('page-loader');
const loaderLogo = document.getElementById('loader-logo');
let isAnimationFinished = false;

window.addEventListener('load', () => {
  tryRemoveLoader();
});

setTimeout(() => {
  isAnimationFinished = true;
  tryRemoveLoader();
}, 5000);

function tryRemoveLoader() {
  if (isAnimationFinished && document.readyState === 'complete') {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }
}
