import "bootstrap";
import "./../styles/style.sass";
import { hsk1 } from "./hsk1";
import { hsk2 } from "./hsk2";
//import { hsk3 } from "./hsk3";
//import { hsk4 } from "./hsk4";
{
  //1.HIDE AND SHOW DATA//
  $("#kanji").change(function () {
    $(".kanji").toggleClass("hide");
  });
  $("#pinyin").change(function () {
    $(".pinyin").toggleClass("hide");
  });
  $("#english").change(function () {
    $(".english").toggleClass("hide");
  });
  $("#spanish").change(function () {
    $(".spanish").toggleClass("hide");
  });
  $("#sentence").change(function () {
    $(".sentence").toggleClass("hide");
  });

  //2.PRINT VOCABULARY IN INDEX.HTML//
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
    const level = filterByType(array, type);
    let i;
    const l = level.length;
    for (i = 0; i < l; i++) {
      html += "<tr class='" + hsk + " collapse show'>";
      html += "<td class='kanji'>" + level[i][2] + "</td>";
      html += "<td class='pinyin'>" + level[i][3] + "</td>";
      html += "<td class='english'>" + level[i][4] + "</td>";
      html += "<td class='spanish'>" + level[i][5] + "</td>";
      html += "<td class='sentence'>" + level[i][6] + "</td>";
      html += "</tr>";
    }
  }

  function PrintType(name, type) {
    html += "<tr class='table-dark noRandom'>";
    html += "<th colspan='5'>" + name + "</th>";
    html += "</tr>";
    hskLevel(hsk1, type, "hsk1");
    hskLevel(hsk2, type, "hsk2");
    //hskLevel((hsk3, 'Personal Pronoun', 'hsk3');
    //hskLevel((hsk4, 'Personal Pronoun', 'hsk4');
  }

  //print dom
  let html = "";
  html += "<table>";
  //Personal Pronoun
  PrintType("Personal Pronoun(人称代词)", "Personal Pronoun");

  //Demonstrative Pronoun
  PrintType("Demonstrative Pronoun ()", "Demostrative Pronoun");

  //Interrogative Pronoun
  PrintType("Interrogative Pronoun ()", "Interrogative Pronoun");

  // Numberal
  PrintType("Numeral (数词)", "Numeral");

  // Quantifier
  PrintType("Quantifier ()", "Quantifier");

  //Conjunction
  PrintType("Conjuction ()", "Conjuction");

  //Preposition
  PrintType("Preposition ()", "Preposition");

  //Auxiliary
  PrintType("Auxiliaryy ()", "Auxiliary");

  //Interjection
  PrintType("Interjection ()", "Interjection");

  //Noun
  PrintType("Noun (名词)", "Noun");

  //Verb
  PrintType("Verb (动词)", "Verb");

  //Adjetive
  PrintType("Adjetive (形容词)", "Adjetive");

  //Adverb
  PrintType("Adverb (题词)", "Adverb");

  html += "</table>";
  document.getElementById("data_area").innerHTML = html;

  //3.RANDOM WORDS ON BUTTON//
  //grab the div that contains our images
  const container = $("#data_area");

  //grab our button
  const button = $("#random");

  //search through div and add all images to an array
  const images = $(container).find("tr");

  //function to shuffle our array
  //using the Fisher-Yates Shuffle.
  //See https://github.com/coolaj86/knuth-shuffle
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  //empty our image container and
  //append our images in a new random order
  //to the same container
  function renderImages(array) {
    $(container).empty();

    $.each(array, function (index, value) {
      $(container).append(value);
    });
  }

  //call the renderImages function when our button is pressed
  $(button).on("click", function () {
    if (button.hasClass("on")) {
      $(".noRandom").empty();
      //render the random images to the screen
      const randomImages = shuffleArray(images);
      renderImages(randomImages);
      button.removeClass("on");
    } else {
      document.getElementById("data_area").innerHTML = html;
      button.addClass("on");
    }
  });
}
