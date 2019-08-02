
import 'bootstrap';

import "./../styles/style.sass";
import { hsk1 } from "./hsk1";
import { hsk2 } from "./hsk2";
//import { hsk3 } from "./hsk3";
//import { hsk4 } from "./hsk4";

//hide and show data
$('#kanji').change(function () {
  $('.kanji').toggleClass('hide')
})
$('#pinyin').change(function () {
  $('.pinyin').toggleClass('hide')
})
$('#english').change(function () {
  $('.english').toggleClass('hide')
})
$('#spanish').change(function () {
  $('.spanish').toggleClass('hide')
})
$('#sentence').change(function () {
  $('.sentence').toggleClass('hide')
})

//Filter Vocabulary By Type
function filterByType(arr, type) {
  return arr.filter(filter);
  function filter(item, query) {
    query = type;
    if (item[1] == query) {
      return true;
    }
    return false;
  }
}
function wordKind(name, type) {
  html += "<tr class='table-dark'>";
  html += "<th colspan='5'>" + name + "</th>";
  html += "</tr>";
  for (var i = 1; i < 4; i++) {
    var hsk = 'hsk' + i;
    console.log(hsk)
    var level = filterByType(hsk, type);
    hskLevel(level, hsk);
  }
}

function hskLevel(level, hsk) {
  for (var i = 0; i < level.length; i++) {
    html += "<tr class='" + hsk + " collapse show'>";
    html += "<td class='kanji '  >" + level[i][2] + "</td>";
    html += "<td class='pinyin'  >" + level[i][3] + "</td>";
    html += "<td class='english'   >" + level[i][4] + "</td>";
    html += "<td class='spanish'  >" + level[i][5] + "</td>";
    html += "<td class='sentence'  >" + level[i][6] + "</td>";
    html += "</tr>";
  }
}

var PerPro1 = filterByType(hsk1, 'Personal Pronoun');
var PerPro2 = filterByType(hsk2, 'Personal Pronoun');
//var PerPro3 = filterByType(hsk3, 'Personal Pronoun');
//var PerPro4 = filterByType(hsk4, 'Personal Pronoun');

var DemPro1 = filterByType(hsk1, 'Demostrative Pronoun');
var DemPro2 = filterByType(hsk2, 'Demostrative Pronoun');
//var DemPro3 = filterByType(hsk3, 'Demostrative Pronoun');
//var DemPro4 = filterByType(hsk4, 'Demostrative Pronoun');

var IntPro1 = filterByType(hsk1, 'Interrogative Pronoun');
var IntPro2 = filterByType(hsk2, 'Interrogative Pronoun');
//var IntPro3 = filterByType(hsk3, 'Interrogative Pronoun');
//var IntPro4 = filterByType(hsk4, 'Interrogative Pronoun');

var numeral1 = filterByType(hsk1, 'Numeral');
var numeral2 = filterByType(hsk2, 'Numeral');
//var numeral3 = filterByType(hsk3, 'Numeral');
//var numeral3 = filterByType(hsk4, 'Numeral');

var quantifier1 = filterByType(hsk1, 'Quantifier');
var quantifier2 = filterByType(hsk2, 'Quantifier');
//var quantifier3 = filterByType(hsk3, 'Quantifier');
//var quantifier4 = filterByType(hsk4, 'Quantifier');

var Conjuction1 = filterByType(hsk1, 'Conjuction');
var Conjuction2 = filterByType(hsk2, 'Conjuction');
//var Conjuction3 = filterByType(hsk3, 'Conjuction');
//var Conjuction4 = filterByType(hsk4, 'Conjuction');

var Preposition1 = filterByType(hsk1, 'Preposition');
var Preposition2 = filterByType(hsk2, 'Preposition');
//var Preposition3 = filterByType(hsk3, 'Preposition');
//var Preposition4 = filterByType(hsk4, 'Preposition');

var Auxiliary1 = filterByType(hsk1, 'Auxiliary');
var Auxiliary2 = filterByType(hsk2, 'Auxiliary');
//var Auxiliary3 = filterByType(hsk3, 'Auxiliary');
//var Auxiliary4 = filterByType(hsk4, 'Auxiliary');

var Interjection1 = filterByType(hsk1, 'Interjection');
var Interjection2 = filterByType(hsk2, 'Interjection');
//var Interjection3 = filterByType(hsk3, 'Interjection');
//var Interjection4 = filterByType(hsk4, 'Interjection');

var Noun1 = filterByType(hsk1, 'Noun');
var Noun2 = filterByType(hsk2, 'Noun');
//var Noun3 = filterByType(hsk3, 'Noun');
//var Noun4 = filterByType(hsk4, 'Noun');

var Verb1 = filterByType(hsk1, 'Verb');
var Verb2 = filterByType(hsk2, 'Verb');
//var Verb3 = filterByType(hsk3, 'Verb');
//var Verb4 = filterByType(hsk4, 'Verb');

var Adjetive1 = filterByType(hsk1, 'Adjetive');
var Adjetive2 = filterByType(hsk2, 'Adjetive');
//var Adjetive3 = filterByType(hsk3, 'Adjetive');
//var Adjetive4 = filterByType(hsk4, 'Adjetive');

var Adverb1 = filterByType(hsk1, 'Adverb');
var Adverb2 = filterByType(hsk2, 'Adverb');
//var Adverb3 = filterByType(hsk3, 'Adverb');
//var Adverb4 = filterByType(hsk4, 'Adverb');



var html = '';
html += "<table>";
//Personal Pronoun
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Personal Pronoun(人称代词)</th>";
html += "</tr>";
hskLevel(PerPro1, 'hsk1');
hskLevel(PerPro2, 'hsk2');
//hskLevel(PerPro3, 'hsk3');
//hskLevel(PerPro4, 'hsk4');

//wordKind('Personal Pronoun(人称代词)', 'Personal Pronoun')

//Demonstrative Pronoun
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Demonstrative Pronoun ()</th>";
html += "</tr>";
hskLevel(DemPro1, 'hsk1');
hskLevel(DemPro2, 'hsk2');
//hskLevel(DemPro3, 'hsk3');
//hskLevel(DemPro4, 'hsk4');

//Interrogative Pronoun
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Interrogative Pronoun ()</th>";
html += "</tr>";
hskLevel(IntPro1, 'hsk1');
hskLevel(IntPro2, 'hsk2');
//hskLevel(IntPro3, 'hsk3');
//hskLevel(IntPro4, 'hsk4');

// Numberal
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Numberal (数词)</th>";
html += "</tr>";
hskLevel(numeral1, 'hsk1');
hskLevel(numeral2, 'hsk2');
//hskLevel(numeral3, 'hsk3');
//hskLevel(numeral4, 'hsk4');

// Quantifier
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Quantifier ()</th>";
html += "</tr>";
hskLevel(quantifier1, 'hsk1');
hskLevel(quantifier2, 'hsk2');
//hskLevel(quantifier3, 'hsk3');
//hskLevel(quantifier4, 'hsk4');

//Conjunction
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Conjunction ()</th>";
html += "</tr>";
hskLevel(Conjuction1, 'hsk1');
hskLevel(Conjuction2, 'hsk2');
//hskLevel(Conjuction3, 'hsk3');
//hskLevel(Conjuction4, 'hsk4');

//Preposition
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Preposition ()</th>";
html += "</tr>";
hskLevel(Preposition1, 'hsk1');
hskLevel(Preposition2, 'hsk2');
//hskLevel(Preposition3, 'hsk3');
//hskLevel(Preposition4, 'hsk4');

//Auxiliary
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Auxiliary ()</th>";
html += "</tr>";
hskLevel(Auxiliary1, 'hsk1');
hskLevel(Auxiliary2, 'hsk2');
//hskLevel(Auxiliary3, 'hsk3');
//hskLevel(Auxiliary4, 'hsk4');

//Interjection
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Interjection ()</th>";
html += "</tr>";
hskLevel(Interjection1, 'hsk1');
hskLevel(Interjection2, 'hsk2');
//hskLevel(Interjection3, 'hsk3');
//hskLevel(Interjection4, 'hsk4');

//Noun
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Noun (名词)</th>";
html += "</tr>";
hskLevel(Noun1, 'hsk1');
hskLevel(Noun2, 'hsk2');
//hskLevel(Noun3, 'hsk3');
//hskLevel(Noun4, 'hsk4');

//Verb
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Verb (动词)</th>";
html += "</tr>";
hskLevel(Verb1, 'hsk1');
hskLevel(Verb2, 'hsk2');
//hskLevel(Verb3, 'hsk3');
//hskLevel(Verb4, 'hsk4');

//Adjetive
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Adjetive (形容词)</th>";
html += "</tr>";
hskLevel(Adjetive1, 'hsk1');
hskLevel(Adjetive2, 'hsk2');
//hskLevel(Adjetive3, 'hsk3');
//hskLevel(Adjetive4, 'hsk4');

//Adverb
html += "<tr class='table-dark'>";
html += "<th colspan='5'>Adverb (题词)</th>";
html += "</tr>";
hskLevel(Adverb1, 'hsk1');
hskLevel(Adverb2, 'hsk2');
//hskLevel(Adverb3, 'hsk3');
//hskLevel(Adverb4, 'hsk4');

html += "</table>";
document.getElementById("data_area").innerHTML = html;

