function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(undefined);
}

Student.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.addGrade = function (grade) {
  if (typeof grade !== "number" || grade < 0 || grade > 100) {
    throw new Error("Grade must be a number between 1 and 100");
  } else {
    this.grades.push(grade);
  }
  return this;
};

Student.prototype.addPresent = function () {
  const index = this.attendance.indexOf(undefined);
  if (index === -1) {
    alert("All 25 lessons are already marked.");
    return this;
  }
  this.attendance[index] = true;
  return this;
};

Student.prototype.addAbsent = function () {
  const index = this.attendance.indexOf(undefined);
  if (index === -1) {
    alert("All 25 lessons are already marked.");
    return this;
  }
  this.attendance[index] = false;
  return this;
};

Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  const age = currentYear - this.birthYear;
  return age;
};

Student.prototype.getAvrGrade = function () {
  const gradesSum = this.grades.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const avrGrade = gradesSum / this.grades.length;
  return avrGrade;
};

Student.prototype.getAvrAttendance = function () {
  const presentArr = this.attendance.filter((element) => element === true);
  const avrAttendance = presentArr.length / this.attendance.length;
  return avrAttendance;
};

Student.prototype.getSummary = function () {
  if (this.getAvrAttendance() >= 0.9 && this.getAvrGrade() >= 90) {
    return "Молодець!";
  }
  if (this.getAvrAttendance() >= 0.9 || this.getAvrGrade() >= 90) {
    return "Добре, але можна краще!";
  }
  if (this.getAvrAttendance() < 0.9 && this.getAvrGrade() < 90) {
    return "Редиска!";
  }
};

const student1 = new Student("Vicky", "Journey", 1995);
student1
  .addGrade(93)
  .addGrade(99)
  .addGrade(85)
  .addGrade(93)
  .addGrade(89)
  .addGrade(91);
student1
  .addPresent()
  .addPresent()
  .addPresent()
  .addAbsent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addAbsent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addAbsent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent()
  .addPresent();
console.log(student1);

console.log(student1.getFullName());
console.log(student1.getAge());
console.log(student1.getAvrGrade());
console.log(student1.getAvrAttendance());
console.log(student1.getSummary());

const student2 = new Student("Stas", "Dior", 1997);
student2.addGrade(99).addGrade(94).addGrade(100).addGrade(100).addGrade(97);
for (let i = 0; i < 23; i++) {
  student2.addPresent();
}
for (let i = 0; i < 2; i++) {
  student2.addAbsent();
}

console.log(student2, student2.getSummary(), student2.getAge());

const student3 = new Student("Kirill", "Ostapko", 1994);
student3.addGrade(87).addGrade(91).addGrade(75).addGrade(85).addGrade(83);
for (let i = 0; i < 19; i++) {
  student3.addPresent();
}
for (let i = 0; i < 6; i++) {
  student3.addAbsent();
}

console.log(student3, student3.getSummary(), student3.getAge());
