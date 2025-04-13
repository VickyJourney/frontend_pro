const capitalResponses = {
    Kyiv: 'You live in the capital of Ukraine',
    London: 'You live in the capital of Great Britain',
    Washington: 'You live in the capital of the USA',
}

const sportResponses = {
    surfing: 'Cool! Do you want to become a pro surfer like Kelly Slater?',
    tennis: 'Cool! Do you want to become a pro tennis player like Iga Swiatek?',
    football: 'Cool! Do you want to become a pro football player like Lionel Messi?',
}

const birthYear = prompt('What year were you born?') || 'unknown year';
const currentYear = new Date().getFullYear();
let userAge = null;
if (birthYear !== 'unknown year' && !isNaN(+birthYear)) {
    userAge = currentYear - +birthYear;
} else {
    alert('It is a pitty you have not provided the year of your birth.');
    
}
    
let userCity = prompt('What city do you live in?') || 'unknown city';
userCity = userCity.charAt(0).toUpperCase() + userCity.slice(1).toLowerCase();
if (userCity === 'unknown city') {
    alert('It is a pitty you have not provided the name of the city.');
}


let userSport = prompt('What is your favorite sport?') || 'unknown sport';
userSport = userSport.toLowerCase();
if (userSport === 'unknown sport') {
    alert('It is a pitty you have not provided the name of the sport.');
}

let message =
    userAge 
        ? 'You are ' + userAge + ' years old.' + '\n'
        : '';
const capitalResponse = capitalResponses[userCity];
message += capitalResponse
    ? `${capitalResponse}\n`
    : 'You live in ' + userCity + '.\n';

const sportResponse = sportResponses[userSport];
message += sportResponse 
    ? `${sportResponse}\n`
    : ''

alert(message);




