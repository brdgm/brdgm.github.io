document.querySelector('.menuOpener').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('.sidebar').classList.toggle('open');
});
