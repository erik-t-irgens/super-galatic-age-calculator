
import {DateOfBirth} from './../src/super-galactic.js';
import {currentDate} from './../src/super-galactic.js';

describe ("DateOfBirth", function() {

  let testDOB;

  beforeEach(function() {
    testDOB = new Date(1992, 7, 9);
  });

  it("should test input of user and return correct values", function() {

    expect(testDOB.getFullYear()).toEqual(1992);
    expect(testDOB.getMonth()).toEqual(7);
    expect(testDOB.getDate()).toEqual(9);
  });


  it("should extrapolate current age using current date information"), function() {
    let testString = testDOB.getFullYear();
  });

});
