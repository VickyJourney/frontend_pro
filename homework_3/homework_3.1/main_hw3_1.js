const developer = 'Viktoria';
console.log(developer, typeof developer);

const salary = 400;
console.log(salary, typeof salary);

const requiredPosition = 'Junior Frontend Developer';
console.log(requiredPosition, typeof requiredPosition);

const isReady = true;
console.log(isReady, typeof isReady);

const satisfaction = 8307903275953n;
console.log(satisfaction, typeof satisfaction);

const fear = null;
console.log(fear, typeof fear);

const undefinedValue = undefined;
console.log(undefinedValue, typeof undefinedValue);

const student = Symbol('studying');
if (student === Symbol('studying')) {
    console.log('Still studying');
} else {
    console.log('Finished studying');
}
console.log(student, typeof student);

const experience = {
    course: 'Frontend Basic',
    school: 'Hillel IT School',
    isCompleted: true,
    year: 2025,
}
console.log(experience, typeof experience);

const skills = ['HTML', 'CSS', 'JavaScript in progress'];
console.log(skills, typeof skills);

function aboutMe() {
    console.log(`My name is ${developer}, I would like to work as a ${requiredPosition} with a salary of ${salary} dollars.`);
}
console.log(aboutMe, typeof aboutMe);





