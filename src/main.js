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
 $("#testArea").append(testPerson.getAge());

});
