const sentance = prompt("Enter a sentence");
if (!sentance?.trim()) {
  alert("You didn't enter any letters");
  throw new Error("You didn't enter any letters");
}

let input = prompt("Enter a letter to be removed");
let letters = input ? [input] : [];

if (!input) {
  alert("You didn't enter any letters");
  throw new Error("You didn't enter any letters");
}

while (input) {
  input = prompt(
    "Enter another letter to be removed or press Cancel to finish"
  );
  if (input) {
    letters.push(input);
  } else {
    break;
  }
}

function removeLetters(originText, lettersToRemove) {
  let result = originText;
  for (i = 0; i < lettersToRemove.length; i++) {
    result = result.replaceAll(lettersToRemove[i], "");
  }
  return result;
}

console.log(removeLetters(sentance, letters));

// alternative way
// function removeLetters(originText, lettersToRemove) {
//   return originText
//     .split("")
//     .filter((letterInSentance) => !lettersToRemove.includes(letterInSentance))
//     .join("");
// }
