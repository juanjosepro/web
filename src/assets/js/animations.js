let elementsTop = document.querySelectorAll(".animation-from-bottom-to-top");
elementsTop.forEach(element => {
  element.style.opacity = 1;
  element.classList.add("bottom-up-animation");
});

let elementsLeft = document.querySelectorAll(".animation-from-left-to-right");
elementsLeft.forEach(element => {
  element.style.opacity = 1;
  element.classList.add("left-right-animation");
});

let elementsRight = document.querySelectorAll(".animation-from-top-to-bottom");
elementsRight.forEach(element => {
  element.style.opacity = 1;
  element.classList.add("up-bottom-animation");
});

let elementsBottom = document.querySelectorAll(".animation-from-right-to-left");
elementsBottom.forEach(element => {
  element.style.opacity = 1;
  element.classList.add("right-left-animation");
});


let bottom_to_top = document.querySelectorAll(".scroll-animation-from-bottom-to-top");
let left_to_right = document.querySelectorAll(".scroll-animation-from-left-to-right");
let top_to_bottom = document.querySelectorAll(".scroll-animation-from-top-to-bottom");
let right_to_left = document.querySelectorAll(".scroll-animation-from-right-to-left");

const show_bottom_to_top = () => {
  let scrolTop = document.documentElement.scrollTop;

  for (let i = 0; i < bottom_to_top.length; i++) {
    const height = bottom_to_top[i].offsetTop;
    if (height - 600 < scrolTop) {
      bottom_to_top[i].style.opacity = 1;
      bottom_to_top[i].classList.add("scroll-bottom-up-animation");
    }
  }
};

const show_left_to_right = () => {
  let scrolTop = document.documentElement.scrollTop;

  for (let i = 0; i < left_to_right.length; i++) {
    const height = left_to_right[i].offsetTop;
    if (height - 600 < scrolTop) {
      left_to_right[i].style.opacity = 1;
      left_to_right[i].classList.add("scroll-left-right-animation");
    }
  }
};

const show_top_to_bottom = () => {
  let scrolTop = document.documentElement.scrollTop;

  for (let i = 0; i < top_to_bottom.length; i++) {
    const height = top_to_bottom[i].offsetTop;
    if (height - 600 < scrolTop) {
      top_to_bottom[i].style.opacity = 1;
      top_to_bottom[i].classList.add("scroll-up-bottom-animation");
    }
  }
};

const show_right_to_left = () => {
  let scrolTop = document.documentElement.scrollTop;

  for (let i = 0; i < right_to_left.length; i++) {
    const height = right_to_left[i].offsetTop;
    if (height - 600 < scrolTop) {
      right_to_left[i].style.opacity = 1;
      right_to_left[i].classList.add("scroll-right-left-animation");
    }
  }
};

window.addEventListener("scroll", show_bottom_to_top);
window.addEventListener("scroll", show_left_to_right);
window.addEventListener("scroll", show_top_to_bottom);
window.addEventListener("scroll", show_right_to_left);


// const section = document.getElementById("about");
// const objOptions = {
//   root: null,
//   threshold: 0.3,
//   rootMargin: "-10px",
// };
// const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
// sectionObserver.observe(section);
// function callBackFunction(entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (entry.isIntersecting) {
//     section.classList.remove("m-scale");
//   } else {
//     section.classList.add("m-scale");
//   }
// }