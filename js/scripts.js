// Businnes Logic below:
function pigLatin(sentence) {
  var arrayInitial = sentence.split(" ");
  var arrayFinal = [];
  var sentence;
  arrayInitial.forEach(function(string) {
    // Alert: dont use numbers
    if (string.match(/[0-9]/g)) {
      alert("Try again! Please write a sentence without numbers.")
      // if vowel then string + "way"
    } else if (string[0].match(/[aeiou]/gi)) {
      sentence = string + "way";
      arrayFinal.push(sentence);
    } else {
      for (var i = 0; i < string.length; i++) {
        console.log(i);
        // if "qu" then "qu" at end plus "ay"
        if (string[0].match(/(q)/gi)) {
          console.log(i);
          string = string.slice(2, string.length) + string.charAt(0) +string.charAt(1);
          sentence = string + "ay";
          console.log(string);
          console.log(sentence);
        }
        // if consonant then consonant plus "ay"
        else if (!string[0].match(/[aeiou]/gi)) {
          string = string.slice(1, string.length) + string.charAt(0);
          sentence = string + "ay";
          console.log(string);
          console.log(sentence);
        }
        }
      }
    arrayFinal.push(sentence);
    });
  return arrayFinal;
  }
// UI logic below:
$(document).ready(function() {
  $("form#pigform").submit(function(event) {
    event.preventDefault();
    var sentence = $("#inputForm").val();
    $("#result").text(pigLatin(sentence));
  });
});
