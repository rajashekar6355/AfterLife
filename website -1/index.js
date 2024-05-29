const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');

let currentIndex = 0;
let intervalId;

function reset() {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('animation');
  }
}

function animate(i) {
  items[i].classList.add('animation');
}

function scrollTo(i) {
  slider.style.transform = `translateX(${-i * slider.offsetWidth}px)`;
  reset();
  animate(i);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  scrollTo(currentIndex);
}

function startCarousel() {
  intervalId = setInterval(nextSlide, 2500); // Change slide every 3 seconds
}

function stopCarousel() {
  clearInterval(intervalId);
}

const init = () => {
  animate(0);
  startCarousel();
};

window.addEventListener('load', init, false);
slider.addEventListener('mouseenter', stopCarousel);
slider.addEventListener('mouseleave', startCarousel);

// marquee
// Initialize the Reeller library with the appropriate settings
var reeller = new reeller.Reeller({
    container: ".sw-partner-marquee",
    wrapper: ".sw-partner-marquee-row",
    itemSelector: ".sw-partner-marquee-row-item",
    speed: 40, // Adjust the speed as needed
    loop: true, // Ensure the marquee loops
    direction: 'left', // Set the direction of the marquee
    autoStart: true // Automatically start the animation
});


// FAQs



// Subscribe Button


//flicker 
