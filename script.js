const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');
let isDragging = false;

thumb.addEventListener('mousedown', function(event) {
  isDragging = true;
  event.preventDefault();
});

document.addEventListener('mouseup', function(event) {
  isDragging = false;
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    const sliderRect = slider.getBoundingClientRect();
    let posX = event.clientX - sliderRect.left - thumb.offsetWidth / 2;
    if (posX < 0) posX = 0;
    if (posX > slider.offsetWidth - thumb.offsetWidth) posX = slider.offsetWidth - thumb.offsetWidth;
    thumb.style.left = `${posX}px`;
  }
});

slider.addEventListener('click', function(event) {
  if (!isDragging) {
    const sliderRect = slider.getBoundingClientRect();
    const posX = event.clientX - sliderRect.left - thumb.offsetWidth / 2;
    if (posX < 0) thumb.style.left = '0px';
    else if (posX > slider.offsetWidth - thumb.offsetWidth) thumb.style.left = `${slider.offsetWidth - thumb.offsetWidth}px`;
    else thumb.style.left = `${posX}px`;
  }
});
