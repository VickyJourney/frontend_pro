const decreaseBtn = document.getElementById("decreaseBtn");
const reserBtn = document.getElementById("resetBtn");
const increseBtn = document.getElementById("increaseBtn");
let countLbl = document.getElementById("countLbl");
let count = 0;

increseBtn.onclick = function () {
  count++;
  countLbl.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLbl.textContent = count;
};

reserBtn.onclick = function () {
  count = 0;
  countLbl.textContent = count;
};
