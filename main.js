const cookie = document.querySelector("#cookie");
const btnAgain = document.querySelector("#btnAgain");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

cookie.addEventListener("click", handleClick);
btnAgain.addEventListener("click", handleClick);

function handleClick() {
    toggleScreen();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
