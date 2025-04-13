const userNumber = prompt('Enter a 3-digit number');
const isDigitNumber = !isNaN(+userNumber);
const myNumber = userNumber.split('');

if (!isDigitNumber || myNumber.length !== 3) {
    console.log('Please enter a 3-digit number');
} else {
    switch (true) {
        case myNumber[0] === myNumber[1] && myNumber[1] === myNumber[2]:
            console.log('all digits are equal');
            break;
        case myNumber[0] === myNumber[1]:
            console.log('first and second digits are equal');
            break;
        case myNumber[0] === myNumber[2]:
            console.log('first and third digits are equal');
            break;
        case myNumber[1] === myNumber[2]:
            console.log('second and third digits are equal');
            break;
        default:
            console.log('all digits are different');
    }
}
