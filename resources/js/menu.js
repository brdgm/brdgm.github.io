function toggleSidebar(event) {
  event.preventDefault();
  document.querySelector('.sidebar').classList.toggle('open');
}
document.body.querySelector('.menuOpener').addEventListener('click', toggleSidebar);
