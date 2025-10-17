const viewer = document.querySelector('.pdf-viewer');
const cols = viewer.querySelectorAll('.pdf-column');

let isResizing = false;
let startX;
let startWidth;

cols[0].addEventListener('mousedown', (e) => {
  if (e.offsetX > cols[0].offsetWidth - 10) {
    isResizing = true;
    startX = e.clientX;
    startWidth = cols[0].offsetWidth;
    document.body.style.cursor = 'col-resize';
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isResizing) return;
  const dx = e.clientX - startX;
  const newWidth = startWidth + dx;
  cols[0].style.flex = `0 0 ${newWidth}px`;
});

window.addEventListener('mouseup', () => {
  isResizing = false;
  document.body.style.cursor = 'default';
});
