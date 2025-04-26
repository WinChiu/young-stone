document.getElementById('nav-mobile').addEventListener('click', function () {
  const currentHeight = window.getComputedStyle(this).height;

  if (currentHeight === '80px') {
    this.style.height = '320px';
    this.style.background = `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 15%,
      rgba(0, 0, 0, 0.8) 100%
    )`;
  } else {
    this.style.height = '80px';
    this.style.background = `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.25) 15%,
      rgba(0, 0, 0, 0.8) 100%
    )`;
  }
});
