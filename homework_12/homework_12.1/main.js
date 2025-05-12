const btnGet = document.getElementById("btnInput");
const btnGo = document.getElementById("btnGo");

const isValidUrl = (urlString) => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!urlPattern.test(urlString);
};

btnGet.addEventListener("click", function () {
  const userInput = prompt(
    "Which website you would like to visit?(enter full URL)"
  );

  if (isValidUrl(userInput)) {
    btnGo.addEventListener("click", () => {
      location.assign(userInput);
    });
  } else {
    return alert("Please enter valid URL");
  }
});
