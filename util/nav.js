document.getElementById('nav-mobile').addEventListener('click', function () {
  if (this.style.height === '80px') {
    this.style.height = '320px';
  } else {
    this.style.height = '80px';
  }
});
