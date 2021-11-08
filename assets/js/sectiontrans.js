let sections = document.getElementsByTagName('section');
// tracks index of current section
let currentSectionIndex = 0;

animtitle = document.getElementById("animtitle");
animtitle.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  animtitle.classList.remove("animrun");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // animtitle.offsetWidth = animtitle.offsetWidth;
  // Do this instead:
  void animtitle.offsetWidth;
  
  // -> and re-adding the class
  animtitle.classList.add("animrun");
}, false);

document.addEventListener('wheel', e => {
  if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
    // wheel up
    sections[currentSectionIndex].className = '';
    currentSectionIndex--;
    sections[currentSectionIndex].className = 'active';
    
    animtitle.classList.remove("animrun");
  
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // animtitle.offsetWidth = animtitle.offsetWidth;
    // Do this instead:
    void animtitle.offsetWidth;
    
    // -> and re-adding the class
    animtitle.classList.add("animrun");
  } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
    // wheel down
    sections[currentSectionIndex].className = '';
    currentSectionIndex++;
    sections[currentSectionIndex].className = 'active';

    animtitle.classList.remove("animrun");
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // animtitle.offsetWidth = animtitle.offsetWidth;
    // Do this instead:
    void animtitle.offsetWidth;
    
    // -> and re-adding the class
    animtitle.classList.add("animrun");
  }
});