document.getElementById('nav').addEventListener('click', function () {
  if (this.style.height === '80px') {
    this.style.height = '400px';
    document.querySelector('#nav .container').style.backgroundColor = 'black';
  } else {
    this.style.height = '80px';
    setTimeout(() => {
      document
        .querySelector('#nav .container')
        .style.removeProperty('background-color');
    }, 265);
  }
});
