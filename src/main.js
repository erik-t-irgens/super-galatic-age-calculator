// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Person} from './../src/super-galactic.js';
import {currentDate} from './../src/super-galactic.js';

var testDOB = new Date(1992, 8, 9);
var testPerson = new Person ("Billy", testDOB);

// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
    $("#inputCard").slideDown(4000);
  $("#userInputForm").submit(function(event){
    let userDate = new Date (parseInt($("#yearInput").val()), parseInt($("#monthSelect").val()), parseInt($("#dayInput").val()))
    let user = new Person ($("#nameInput").val(), userDate)

    $("#inputCard").slideUp(4000);
    $("#instructionCard").slideDown(4000);
    $("#solSystem").slideDown(6000);
    event.preventDefault();
  });

  // Button logic

$("#hideInstructions").click(function(){
  $("#instructionCard").slideUp(4000);

});

});
