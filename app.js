let sentences = [
  "ten ate",
  "Too ato too",
  "oat",
  "itant",
  "nee ene ate ite tent tiet ent ine ene ete ene ate ete ene ateete ene ateete ene ate"
];

// let sentences = [
//   "ten ate neite ate nee enet ite ate inet",
//   "Too ato too nOt enot one totA not anot tOO aNot",
//   "oat itain oat tain nate eate tea anne inant nean inant nean",
//   "itant eate anot eat nato inate",
//   "nee ene ate ite tent tiet ent ine ene ete ene ate ete ene ateete ene ateete ene ate"
// ];

// hide upper case keyboard
$("#keyboard-upper-container").hide();

// show upper case keyboard on pressing Shift key
$(document).keydown(function(e) {
  if (e.keyCode == 16) {
    $("#keyboard-upper-container").show();
    $("#keyboard-lower-container").hide();
  }
});

// hide upper case keyboard on releasing shift key
$(document).keyup(function(e) {
  if (e.keyCode == 16) {
    $("#keyboard-upper-container").hide();
    $("#keyboard-lower-container").show();
  }
});
var keyPressCount = 0;
// highlight key on press
$(document).on("keypress", function(e) {
  //   console.log("keypress: " + e.which);
  var keyPressed = e.which;
  //   console.log(keyPressed);
  $(`#${keyPressed}`).css({
    backgroundColor: "yellow"
  });
  $(document).on("keyup", function() {
    $(`#${keyPressed}`).css({
      backgroundColor: "#f5f5f5"
    });
  });
});

// show sentences
var sentenceNumber = 0;
$("#sentence").text(sentences[sentenceNumber]);
var yellowBlockPosition = 18;

var sentence = sentences[keyPressCount];
var keyPressCount = 0;
var currentSentence = sentences[0].split("");
$("#target-letter").text(currentSentence[keyPressCount]);

$(document).keypress(function(e) {
  var currentSentence = sentences[sentenceNumber].split("");
  // show next letter to type
  currentLetter = currentSentence[keyPressCount + 1];
  $("#target-letter").text(currentLetter);
  // move to next sentence
  if (keyPressCount === currentSentence.length) {
    console.log("first sentence over");

    keyPressCount = 0;
    sentenceNumber++;
    yellowBlockPosition = 18;

    var currentSentence = sentences[sentenceNumber].split("");
    currentLetter = currentSentence[keyPressCount];
    console.log(currentLetter);

    $("#target-letter").text(currentLetter);
    $("#sentence").text(sentences[sentenceNumber]);
    $("#feedback").text("");
    var s = "";
  }
  // highlight letter yellow
  $("#yellow-block").css("left", `${yellowBlockPosition}px`);
  if (e.keyCode == 32) {
    yellowBlockPosition += 30;
  } else {
    yellowBlockPosition += 18;
  }

  // check if user entered correct letter
  var s = String.fromCharCode(e.which);

  if (s === currentSentence[keyPressCount]) {
    $("#feedback").append(
      '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'
    );
    console.log("OK");
  } else {
    $("#feedback").append(
      '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'
    );
    console.log("NOT OK");
  }

  keyPressCount++;
  console.log("Keypress count: " + keyPressCount);
  console.log(`Current sentence size ${currentSentence.length}`);
  console.log(`Current sentence ${sentenceNumber}`);
});

// show sentences
// $("#sentence").text(sentences[0]);
// var keyPressCount = 0;
// var yellowBlockPosition = 18;
// var sentenceCounter = 0;
// $("#sentence").text(sentences[sentenceCounter]);
// let chars = sentences[sentenceCounter].split("");
// $("#target-letter").text(chars[keyPressCount]);
// $("#yellow-block").css("left", `${yellowBlockPosition}px`);

// $(document).on("keypress", function(e) {
//   $("#target-letter").text(chars[keyPressCount + 1]);
//   $("#yellow-block").css("left", `${yellowBlockPosition}px`);

//   var s = String.fromCharCode(e.which);

//   if (s === chars[keyPressCount]) {
//     $("#feedback").append(
//       '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'
//     );
//     console.log("OK");
//   } else {
//     $("#feedback").append(
//       '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'
//     );
//     console.log("NOT OK");
//   }

//   keyPressCount++;
//   yellowBlockPosition += 18;

//   if (keyPressCount === chars.length) {
//     sentenceCounter++;
//     keyPressCount = 0;
//   }
//   console.log(chars.length);
//   console.log(sentenceCounter);
//   console.log(keyPressCount);

//   // console.log(keyPressCount);
//   // console.log(yellowBlockPosition);
// });

// $;

// // keyPressCount++;

// // $.each(sentences, function(index, value) {
// //     $.each(value.split(""), function(i, v) {
// //       $("#target-letter").text(v);
// //     });
// //   });

// if (e.which !== 0) {
//   t += String.fromCharCode(e.which);
//   if (sentence.substring(0, t.length) == t) {
//     $("#sentence").html(
//       "<span class='highlight'>" + t + "</span>" + sentence.substring(t.length)
//     );
//   } else {
//     t = t.substring(0, t.length - 1);
//   }
