const array = [3, 9, 1, 9, 2, 4, 8];

console.log("Remove element", removeElement(array, 9));
console.log("Remove first matched element", remove1stMatchedElement(array, 9));

function removeElement(array, item) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      result.push(array[i]);
    }
  }
  return result;
}

function remove1stMatchedElement(array, item) {
  let result = array;
  for (i = 0; i < array.length; i++) {
    if (array[i] === item) {
      result.splice(i, 1);
      return result;
    }
  }
}

// alterantive
// function removeElement(array, item) {
//   return array.filter((element) => element !== item);
// }
// console.log(removeElement(array, 9));

// function remove1stMatchedElement(array, item) {
//   const index = array.indexOf(item);
//   if (index !== -1) {
//     array.splice(i, 1);
//   }
//   return array;
// }
// console.log(remove1stMatchedElement(array, 1));
