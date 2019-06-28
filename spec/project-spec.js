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
    expect(marsYears).toEqual(13.829787234042554)
  });

  it("Should test to see if mercuryYears works", function() {
    let mercuryYears = testPerson.mercuryYears();
    expect(mercuryYears).toEqual(108.33333333333334)
  });

  it("Should test to see if venusYears works", function() {
    let venusYears = testPerson.venusYears();
    expect(venusYears).toEqual(41.935483870967744)
  });

  it("Should test to see if jupiterYears works", function() {
    let jupiterYears = testPerson.jupiterYears();
    expect(jupiterYears).toEqual(2.1922428330522767)
  });


  it("Should test to see if saturnYears works", function() {
    let saturnYears = testPerson.saturnYears();
    expect(saturnYears).toEqual(0.8826424958413959)
  });

  it("Should test to see if uranusYears works", function() {
    let uranusYears = testPerson.uranusYears();
    expect(uranusYears).toEqual(0.3084223013048636)
  });

  it("Should test to see if neptuneYears works", function() {
    let neptuneYears = testPerson.neptuneYears();
    expect(neptuneYears).toEqual(0.15776699029126212)
  });

  it("Should test to see if plutoYears works", function() {
    let plutoYears = testPerson.plutoYears();
    expect(plutoYears).toEqual(0.10483870967741936)
  });

  //

  it("Should test to see if marsExpectancy works", function() {
    let marsExpectancy = testPerson.marsExpectancy();
    expect(marsExpectancy).toEqual(27.659574468085108)
  });

  it("Should test to see if mercuryExpectancy works", function() {
    let mercuryExpectancy = testPerson.mercuryExpectancy();
    expect(mercuryExpectancy).toEqual(216.66666666666669)
  });

  it("Should test to see if venusExpectancy works", function() {
    let venusExpectancy = testPerson.venusExpectancy();
    expect(venusExpectancy).toEqual(83.87096774193549)
  });

  it("Should test to see if jupiterExpectancy works", function() {
    let jupiterExpectancy = testPerson.jupiterExpectancy();
    expect(jupiterExpectancy).toEqual(4.3844856661045535)
  });


  it("Should test to see if saturnExpectancy works", function() {
    let saturnExpectancy = testPerson.saturnExpectancy();
    expect(saturnExpectancy).toEqual(1.7652849916827917)
  });

  it("Should test to see if uranusExpectancy works", function() {
    let uranusExpectancy = testPerson.uranusExpectancy();
    expect(uranusExpectancy).toEqual(0.6168446026097272)
  });

  it("Should test to see if neptuneExpectancy works", function() {
    let neptuneExpectancy = testPerson.neptuneExpectancy();
    expect(neptuneExpectancy).toEqual(0.31553398058252424)
  });

  it("Should test to see if plutoExpectancy works", function() {
    let plutoExpectancy = testPerson.plutoExpectancy();
    expect(plutoExpectancy).toEqual(0.20967741935483872)
  });


});
