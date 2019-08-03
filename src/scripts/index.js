
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
//print vocabulary in table
function hskLevel(array, type, hsk) {
  var level = filterByType(array, type);
  for (var i = 0; i < level.length; i++) {
    html += "<tr class='"+ hsk +" collapse show'>";
    html += "<td class='kanji'>" + level[i][2] + "</td>";
    html += "<td class='pinyin'>" + level[i][3] + "</td>";
    html += "<td class='english'>" + level[i][4] + "</td>";
    html += "<td class='spanish'>" + level[i][5] + "</td>";
    html += "<td class='sentence'>" + level[i][6] + "</td>";
    html += "</tr>";
  }
}

function PrintType(name, type) {
html += "<tr class='table-dark'>";
html += "<th colspan='5'>"+ name +"</th>";
html += "</tr>";
hskLevel(hsk1, type, 'hsk1');
hskLevel(hsk2, type, 'hsk2');
//hskLevel((hsk3, 'Personal Pronoun', 'hsk3');
//hskLevel((hsk4, 'Personal Pronoun', 'hsk4');
}


//print dom
var html = '';
html += "<table>";
//Personal Pronoun
PrintType('Personal Pronoun(人称代词)', 'Personal Pronoun')

//Demonstrative Pronoun
PrintType('Demonstrative Pronoun ()', 'Demostrative Pronoun')

//Interrogative Pronoun
PrintType('Interrogative Pronoun ()', 'Interrogative Pronoun')

// Numberal
PrintType( 'Numeral (数词)',  'Numeral')

// Quantifier
PrintType('Quantifier ()', 'Quantifier')

//Conjunction
PrintType('Conjuction ()', 'Conjuction')

//Preposition
PrintType('Preposition ()', 'Preposition')

//Auxiliary
PrintType( 'Auxiliaryy ()',  'Auxiliary')

//Interjection
PrintType('Interjection ()', 'Interjection')

//Noun
PrintType('Noun (名词)', 'Noun')

//Verb
PrintType('Verb (动词)', 'Verb')

//Adjetive
PrintType('Adjetive (形容词)', 'Adjetive')

//Adverb
PrintType('Adverb (题词)', 'Adverb')


html += "</table>";
document.getElementById("data_area").innerHTML = html;

