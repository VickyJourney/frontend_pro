const yourName = prompt('Enter your name:');
const age = prompt('Enter your age:');
const marriageStatus = prompt('Are you married? (yes/no):');

const marriageMessage = marriageStatus.toLowerCase() === 'yes'
    ? 'and already have build a family'
    : 'and single - enjoy';

const user = `Hi ${yourName}! You are so young (${age}) ${marriageMessage}!`;
console.log(user);