const imageEl = document.getElementById("randomImg");

const imgArr = [
  "/homework_11/homework_11.3/img_11.3/1.jpg",
  "/homework_11/homework_11.3/img_11.3/2.jpg",
  "/homework_11/homework_11.3/img_11.3/3.jpg",
  "/homework_11/homework_11.3/img_11.3/4.jpeg",
  "/homework_11/homework_11.3/img_11.3/5.jpg",
  "/homework_11/homework_11.3/img_11.3/6.jpg",
  "/homework_11/homework_11.3/img_11.3/7.jpg",
  "/homework_11/homework_11.3/img_11.3/8.jpeg",
  "/homework_11/homework_11.3/img_11.3/9.jpg",
];

window.onload = getRandomPhoto(imageEl, imgArr);

function getRandomPhoto(imgElement, sources) {
  const randomNum = Math.floor(Math.random() * sources.length);
  imgElement.src = sources[randomNum];
}
