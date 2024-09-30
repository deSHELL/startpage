const duration = 1.7;
const from = { opacity: 0, ease: Linear.ease };
const to = { opacity: 1 };
const time = document.getElementsByClassName("time");

function fadeIn() {
   TweenLite.fromTo(time, duration, from, to);
}

document.addEventListener("DOMContentLoaded", (event) => {
	fadeIn();
});
