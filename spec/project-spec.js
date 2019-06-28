
import {DateOfBirth} from './../src/super-galactic.js';
import {currentDate} from './../src/super-galactic.js';

describe ("DateOfBirth", function() {

  let testDOB;

  beforeEach(function() {
    testDOB = new DateOfBirth(1992, 7, 9);
  });

  it("should test input of user and return correct values", function() {

    expect(testDOB.year).toEqual(1992);
    expect(testDOB.month).toEqual(7);
    expect(testDOB.day).toEqual(9);
  });

  it("should get a readable string from the user's input for date."), function() {
    let testString = testDOB.getString();
    expect(testString).toEqual("07/09/1992");
  });

  it("should extrapolate current age using current date information"), function() {
    let testString = testDOB.getString();
    let userBirthYear = testString.getFullYear();
    let userBirthMonth = testString.getMonth();
    let userBirthDay = testString.getDay();

  }

});
