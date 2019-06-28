// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Person} from './../src/super-galactic.js';
import {currentDate} from './../src/super-galactic.js';

var testDOB = new Date(1992, 8, 9);
var testPerson = new Person ("Billy", testDOB);



$(document).ready(function() {
    $("#inputCard").slideDown(4000);
  $("#userInputForm").submit(function(event){
    let userDate = new Date (parseInt($("#yearInput").val()), parseInt($("#monthSelect").val()), parseInt($("#dayInput").val()))
    let user = new Person ($("#nameInput").val(), userDate)

// This logic here adds the necessary information from my methods into the correct areas once user submits.

    $("#mercuryYears").append(user.mercuryYears());
    $("#mercuryExpectancy").append(user.mercuryExpectancy());

    $("#venusYears").append(user.venusYears());
    $("#venusExpectancy").append(user.venusExpectancy());

    $("#earthYears").append(user.earthYears());
    $("#earthExpectancy").append(user.earthExpectancy());

    $("#marsYears").append(user.marsYears());
    $("#marsExpectancy").append(user.marsExpectancy());

    $("#jupiterYears").append(user.jupiterYears());
    $("#jupiterExpectancy").append(user.jupiterExpectancy());

    $("#saturnYears").append(user.saturnYears());
    $("#saturnExpectancy").append(user.saturnExpectancy());

    $("#uranusYears").append(user.uranusYears());
    $("#uranusExpectancy").append(user.uranusExpectancy());

    $("#neptuneYears").append(user.neptuneYears());
    $("#neptuneExpectancy").append(user.neptuneExpectancy());

    $("#plutoYears").append(user.plutoYears());
    $("#plutoExpectancy").append(user.plutoExpectancy());

    $(".userName").append(user.name);
    $("#inputCard").slideUp(4000);
    $("#instructionCard").slideDown(4000);
    $("#solSystem").slideDown(6000);

    event.preventDefault();
  });

  // Button logic for auxiliary buttons

$("#hideInstructions").click(function(){
  $("#instructionCard").slideUp(4000);
});

$("#venusButton").click(function() {
  $("#venusInfo").toggle(1000);
});
$("#earthButton").click(function() {
  $("#earthInfo").toggle(1000);
});
$("#marsButton").click(function() {
  $("#marsInfo").toggle(1000);
});
$("#jupiterButton").click(function() {
  $("#jupiterInfo").toggle(1000);
});
$("#saturnButton").click(function() {
  $("#saturnInfo").toggle(1000);
});
$("#neptuneButton").click(function() {
  $("#neptuneInfo").toggle(1000);
});
$("#uranusButton").click(function() {
  $("#uranusInfo").toggle(1000);
});
$("#plutoButton").click(function() {
  $("#plutoInfo").toggle(1000);
});
$("#mercuryButton").click(function() {
  $("#mercuryInfo").toggle(1000);
});

});
