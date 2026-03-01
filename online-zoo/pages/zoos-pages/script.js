

const downArrow = document.getElementById('open-sidebar');
const sidebar = document.querySelector('.sidebar');
const arrowMoveRight = document.querySelector('.down');
const arrowRotate = document.querySelector('.sidebar .arrow.down svg');
const sidebarTexts = document.querySelectorAll('.sidebar .animals .animal span');

downArrow.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  arrowMoveRight.classList.toggle('open');
  arrowRotate.classList.toggle('open');
  sidebarTexts.forEach(span => span.classList.toggle('open'));
});