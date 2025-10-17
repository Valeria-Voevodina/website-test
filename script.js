const frame1 = document.querySelector('#col1 iframe');
const frame2 = document.querySelector('#col2 iframe');

frame1.addEventListener('scroll', () => {
  frame2.scrollTop = frame1.scrollTop;
});
