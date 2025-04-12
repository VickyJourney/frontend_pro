const birthYear = prompt('What year were you born?') || 'unknown year';
const currentYear = new Date().getFullYear();
let userAge = 0;
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

let message = 'You are ' + userAge + ' years old.' + '\n';
message += (userCity === 'Kyiv' || userCity === 'London' || userCity === 'Washington')
    ? 'You live in the capital!\n'
    : 'You live in ' + userCity + '.\n';
if (userSport === "surfing") {
    message += 'Do you want to become a pro surfer like Kelly Slater?';
} else if (userSport === "tennis") {
    message += 'Do you want to become a pro tennis player like Iga Swiatek?';
}
else if (userSport === "football") {
    message += 'Do you want to become a pro football player like Lionel Messi?';
} 
alert(message);



// if null or not a correct value


