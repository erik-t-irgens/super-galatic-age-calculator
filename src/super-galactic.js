// Backend logic with exports, functions, constructors, etc.
export let currentDate = new Date();


export class DateOfBirth extends Date {

  constructor (year, month, day) {
    super();
    this.year = year;
    this.month = month;
    this.day = day;
  }


  getAge () {
    let birthDate = testDOB;
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age --;
    }
    return age;
  }
}
export let testDOB = new Date (1992, 7, 9);
