

const title = document.getElementById("title");
const textToType = "AFTER LIFE".split("");

window.addEventListener("load", function () {    
  setTimeout(function () {
    type();
  }, 750);
});

function type() {
  const char = document.createElement("span");
  char.innerText = textToType.splice(0, 1)[0];
  if (textToType.length > 0) {
    setTimeout(function () {
      type();
    }, 50);
  }
  title.appendChild(char);
  if (textToType.length === 0) {
    setTimeout(function () {
      createFlickerText("After Life");
    }, 500); // Delay to allow the gradient animation to finish
  }
}

const container = document.getElementById("containerfli");

function createFlickerText(text) {
  for (let i = 0; i < text.length; i++) {
    const p = document.createElement("p");
    p.classList.add("flicker");
    container.appendChild(p);
    p.innerHTML = text[i];
  }
  startFlicker();
}

function startFlicker() {
  let temp = 0;
  const flickerDuration = 100; // Set standard flicker duration
  const myInterval = setInterval(() => {
    const p = document.getElementsByClassName("flicker");
    const randomNumber = Math.floor(Math.random() * p.length);
    temp += 1;
    if (!p[randomNumber].classList.contains("on") && temp < flickerDuration) {
      p[randomNumber].classList.add("on");
    } else {
      if (temp < flickerDuration) {
        p[randomNumber].classList.remove("on");
        p[randomNumber].classList.remove("white");
      } else {
        p[randomNumber].classList.add("white");
        p[randomNumber].classList.remove("on");
      }
    }
    if (temp >= flickerDuration + 500) {
      clearInterval(myInterval);
    }
  }, 20);
}


