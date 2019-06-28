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

  getExpectancy() {
    let yearsLeft = Math.floor(78.69 - this.getAge());
    return yearsLeft;
  }

  earthYears () {
    let earthYears = this.getAge() / 1;
    return earthYears;
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

//
  earthExpectancy () {
    let earthExpectancy = this.getExpectancy() / 1;
    return earthExpectancy;
  }

  marsExpectancy () {
    let marsExpectancy = this.getExpectancy() / 1.88;
    return marsExpectancy;
  }
  mercuryExpectancy () {
    let mercuryExpectancy = this.getExpectancy() / .24;
    return mercuryExpectancy;
  }
  venusExpectancy () {
    let venusExpectancy = this.getExpectancy() / .62;
    return venusExpectancy;
  }
  jupiterExpectancy () {
    let jupiterExpectancy = this.getExpectancy() / 11.86;
    return jupiterExpectancy;
  }
//
  saturnExpectancy () {
    let saturnExpectancy = this.getExpectancy() / 29.457;
    return saturnExpectancy;
  }

  uranusExpectancy () {
    let uranusExpectancy = this.getExpectancy() / 84.3;
    return uranusExpectancy;
  }

  neptuneExpectancy () {
    let neptuneExpectancy = this.getExpectancy() / 164.8;
    return neptuneExpectancy;
  }

  plutoExpectancy () {
    let plutoExpectancy = this.getExpectancy() / 248;
    return plutoExpectancy;
  }





}
