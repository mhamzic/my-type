// KEYBOARD SHOW, HIDE, HIGHLIGHT PRESSED KEY

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

// highlight key on press
$(document).on("keypress", function(e) {
  var keyPressed = e.which;
  $(`#${keyPressed}`).css({
    backgroundColor: "yellow"
  }); 
  $(document).on("keyup", function() {
    $(`#${keyPressed}`).css({
      backgroundColor: "#f5f5f5"
    });
  });
});

// SENTENCES, LETTERS AND YELLOW POINTER

const sentences = ["ten ate", "Too ato too", "oat ate"]; //, "itant TeNt", "nee ene"];

// setting starter parameters
var letterCounter = 0;
var sentenceCounter = 0;
var currentSentence = sentences[sentenceCounter];
var currentLetter = sentences[sentenceCounter][letterCounter];
var numberOfMistakes = 0;
var startFrom = new Date().getTime();

$("#sentence").text(currentSentence); //set first sentence
$("#target-letter").text(currentLetter); //set first letter

$(document).keypress(function(e) {
  // setting parameters after key is pressed
  var keyPressed = String.fromCharCode(e.which);
  var currentSentence = sentences[sentenceCounter];
  var currentLetter = sentences[sentenceCounter][letterCounter];
  var nextLetter = sentences[sentenceCounter][letterCounter + 1];

  if (nextLetter !== undefined) {
    // as long as there is letters in the sentence
    $("#sentence").text(currentSentence);
    $("#target-letter").text(nextLetter);
    $("#yellow-block").animate({ left: "+=18px" }, 100, "linear");

    // checking for glyphicons to fire
    if (keyPressed == currentLetter) {
      addGlyphIconOK();
    } else {
      addGlyphIconWrong();
      numberOfMistakes++;
    }
    // counting letters;
    letterCounter++;

    // if there is no more letters, reset parameters and move to next sentence
  } else {
    sentenceCounter++;
    letterCounter = 0;
    var currentSentence = sentences[sentenceCounter];
    if (sentenceCounter > sentences.length) {
      console.log("END");
    }
    $("#sentence").text(currentSentence);
    $("#target-letter").text(nextLetter);
    $("#yellow-block").removeAttr("style");
    $("#feedback").text("");
    // if no more sentences, show results
    if (currentSentence == undefined) {
      var minutes = (new Date().getTime() - startFrom) / 60000;
      console.log(minutes);
      var wordsPerMinutes = Math.round((7 / minutes - 2 * numberOfMistakes) * 10) / 10;
      Swal.fire(
        "Words per minutes: " + wordsPerMinutes,
        "Number of errors: " + numberOfMistakes,
        "info"
      );
    }
  }
});

function addGlyphIconOK() {
  $("#feedback").append(
    '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'
  );
}

function addGlyphIconWrong() {
  $("#feedback").append(
    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'
  );
}
