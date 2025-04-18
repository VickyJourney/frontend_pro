
            let display = document.getElementById('display');

            function press(val) {
                display.value += val;
            }

            function clearDisplay() {
                display.value = '';
            }

            function calculate() {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            }
    

//           // пример "ручной" версии
// function calculate() {
//     const parts = display.value.split(/([+\-*/])/); // разбиваем строку
//     let num1 = parseFloat(parts[0]);
//     let operator = parts[1];
//     let num2 = parseFloat(parts[2]);

//     let result;

//     switch (operator) {
//         case '+': result = num1 + num2; break;
//         case '-': result = num1 - num2; break;
//         case '*': result = num1 * num2; break;
//         case '/': result = num2 !== 0 ? num1 / num2 : "Error"; break;
//         default: result = "Error";
//     }

//     display.value = result;
// }