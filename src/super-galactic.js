// Backend logic with exports, functions, constructors, etc.
export let currentDate = new Date();


export class DateOfBirth {

  constructor (year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getString () {
    let month = this.month;
    let day = this.day;
    let year = '' + this.year;
    if (month < 10){
      month = "0" + month;
    } else {
      month = '' + this.month;
    }
    if (day < 10){
      day = "0" + day;
    } else {
      day = '' + this.day;
    }

    let string = month + '/' + day + '/' + year;
    return string;
  }

  getAge () {
    let birthDate = this.getString;
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age --;
    }
    return age;
  }
}
export let testDOB = new DateOfBirth (1992, 7, 9);
