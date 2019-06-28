// Backend logic with exports, functions, constructors, etc.
export var currentDate = new Date();
export var testDOB = new Date(1992, 8, 9);


export class Person {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }

  getAge() {
    let ageMilliseconds = this.dob;
    let currentAge = ((currentDate / 31536000000) - (ageMilliseconds / 31536000000));
    let age = Math.floor(currentAge);
    return age;
  }

  marsYears () {
    let marsYears = Math.floor(this.getAge() * 1.88);
    return marsYears;
  }
}
