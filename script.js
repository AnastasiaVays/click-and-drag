const slider = document.querySelector('.items'); //non updatable
   let isDown = false; //modifiable, will take different values
   let startX;
   let scrollLeft;

   slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    //console.log(e.pageX); --> would display the exact X coordinates.
    startX = e.pageX - slider.offsetLeft; //we need to know the exact place of click on the object itself.
    scrollLeft = slider.scrollLeft;
  });
  //we would record when each mousemove is happening.

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    //console.log(isDown);
    //console.log(startX);
    //console.log('Do work!');
    if (!isDown) return;  // inner mousemove. stop the fn from running
    e.preventDefault();  //will prevent other unecessary selections.
    const x = e.pageX - slider.offsetLeft; //recalculate everytime we move the mouse
    //console.log({x,startX});
    const walk = (x - startX) * 3; //how far have we deviated from the initial space
    slider.scrollLeft = scrollLeft - walk; //change the div to scroll
  });
