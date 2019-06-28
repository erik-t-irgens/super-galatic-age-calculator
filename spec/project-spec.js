import {Person} from './../src/super-galactic.js';
describe ("Person", function() {

  var testDOB;
  var testPerson;
  var currentDate;

  beforeEach(function() {
    testDOB = new Date (1992, 8, 9);
    testPerson = new Person ("Billy", testDOB);
    currentDate = new Date();

  });

  it("should test input of user and return correct values", function() {

    expect(testPerson.dob.getFullYear()).toEqual(1992);
    expect(testPerson.dob.getMonth()).toEqual(8);
    expect(testPerson.dob.getDate()).toEqual(9);
  });


  it("should extrapolate current age using current date information", function() {
    let currentAge = (currentDate.getFullYear() - testPerson.dob.getFullYear());
    expect(currentAge).toEqual(27);

  });

  it("Should test to see if marsYears works", function() {
    let marsYears = testPerson.marsYears();
    expect(marsYears).toEqual(48)
  });


});
