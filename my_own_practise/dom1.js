const list = document.querySelector(".list li:nth-child(2)");
list.textContent = "Python";

document.querySelector("div").style.color = "red";

const newLi = document.createElement("li");
const span = document.createElement("span");
const firstLi = document.querySelector("ul li");
span.textContent = "C++";
newLi.appendChild(span);
document.querySelector("ul").insertBefore(newLi, firstLi);

function countRabbits() {
  for (let i = 1; i <= 3; i++) {
    console.log(`Rabbit nr: ${i} `);
  }
}
