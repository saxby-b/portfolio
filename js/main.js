const span = document.querySelector("span");
const catRescue = document.querySelector(".cat-rescue");

const d = new Date();
const year = d.getFullYear();
span.innerText = year;

catRescue.style.background = "white";
catRescue.contentWindow.document.style.body.backgroundColor = "white";