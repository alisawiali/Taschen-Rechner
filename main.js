const output = document.getElementById("input");

function display(num) {
  output.value += num;
}

function main() {
  const result = (output.value = "");
  result;
}

function Delete() {
  output.value = output.value.slice(0, -1);
}

function calc() {
  output.value = eval(output.value);
}

const mySombole = document.querySelectorAll(".sombole");

// ParTow
let myParTow = document.getElementById("ParTow");

myParTow.innerText =
  "HTML-scc-sass-Javascript .... \n Anhand dieses Beispiels können Sie studieren, wie man Formulareingaben mit JavaScript zur direkten Interaktion verwenden kann. \n\n <span >0 </span>  \n  <span >AC </span> \n  <span >C </span>  \n   <span >%</span> \n  <span >7 </span>\n   <span >8 </span> \n  <span >9 </span> \n  <span >* </span>  \n    <span >4 </span>  \n  <span >5 </span> \n  <span >6 </span>  \n  <span >+ </span>  \n   <span >1 </span>  \n  <span > 3</span>  \n  <span >2 </span>  \n  <span >-</span>  \n   \n Unser Taschenrechner besteht aus einem Formular mit einem output - Element für das Display und einem fieldset mit 20 Buttons.Sie benötigen keine weiteren Attribute oder Klassen.";

const ArrColor = [
  "#fcba03",
  "#c6fc03",
  "#ccc",
  "#ffff",
  "#adadad",
  "#2dfc03",
  "#0352fc",
  "#000",
  "#f50a0e",
];
const myElement = document.querySelectorAll(".sombole");
myElement.forEach((e, i) => {
  e.addEventListener("click", () => {
    document.body.style.backgroundColor = ArrColor[i];
  });
});

const myyrech = document.getElementById("background");
myyrech.onclick = function () {
  document.getElementById("container").style.background = "green";
  // document.getElementById("input").style.color = "green";
};
