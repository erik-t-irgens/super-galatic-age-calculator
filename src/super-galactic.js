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
    let marsYears = this.getAge() / 1.88;
    return marsYears;
  }
  mercuryYears () {
    let mercuryYears = this.getAge() / .24;
    return mercuryYears;
  }
  venusYears () {
    let venusYears = this.getAge() / .62;
    return venusYears;
  }
  jupiterYears () {
    let jupiterYears = this.getAge() / 11.86;
    return jupiterYears;
  }
//
  saturnYears () {
    let saturnYears = this.getAge() / 29.457;
    return saturnYears;
  }

  uranusYears () {
    let uranusYears = this.getAge() / 84.3;
    return uranusYears;
  }

  neptuneYears () {
    let neptuneYears = this.getAge() / 164.8;
    return neptuneYears;
  }

  plutoYears () {
    let plutoYears = this.getAge() / 248;
    return plutoYears;
  }





}
