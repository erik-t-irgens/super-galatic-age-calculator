// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DateOfBirth} from './../src/super-galactic.js';
import {currentDate} from './../src/super-galactic.js';
import { testDOB } from './../src/super-galactic.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
 $("#testArea").text(testDOB.getString());
 $("#testArea").text(testDOB.getAge());
});
