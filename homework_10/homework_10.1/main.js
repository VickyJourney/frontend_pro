const user = {
  firstName: "Vicky",
  lastName: "Diordiczuk",
  age: 29,
  isFemale: true,
  country: "Portugal",
  isMarried: false,
  getUserInfo() {
    const gender = this.isFemale ? "she" : "he";
    const maritialStatus = this.isMarried ? "married" : "single";
    return `${this.firstName} ${this.lastName} is ${this.age} years old, ${gender} lives in ${this.country} and ${gender} is ${maritialStatus}.`;
  },
};

console.log(user.getUserInfo());
