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

const sentences = [
  "ten ate",
  "Too ato too",
  "oat",
  "itant",
  "nee ene ate ite tent tiet ent ine ene ete ene ate ete"
];

// setting starter parameters
let letterCounter = 0;
let sentenceCounter = 0;
let currentSentence = sentences[sentenceCounter];
let currentLetter = sentences[sentenceCounter][letterCounter];

$("#sentence").text(currentSentence); //set first sentence
$("#target-letter").text(currentLetter); //set first letter

$(document).keypress(function(e) {
  // setting parameters after key is pressed
  let keyPressed = String.fromCharCode(e.which);
  let currentSentence = sentences[sentenceCounter];
  let currentLetter = sentences[sentenceCounter][letterCounter];
  let nextLetter = sentences[sentenceCounter][letterCounter + 1];

  if (nextLetter != undefined) {
    // as long as there is letters in the sentence
    $("#sentence").text(currentSentence);
    $("#target-letter").text(nextLetter);
    $("#yellow-block").animate({ left: "+=18px" }, 100, "linear");

    // checking for glyphicons to fire
    if (keyPressed == currentLetter) {
      addGlyphIconOK();
    } else {
      addGlyphIconWrong();
    }
    // counting letters;
    letterCounter++;

    // if there is no more letters, reset parameters and move to next sentence
  } else {
    console.log("no more characters");
    sentenceCounter++;
    letterCounter = 0;
    let currentSentence = sentences[sentenceCounter];
    let nextLetter = sentences[sentenceCounter][letterCounter];
    $("#sentence").text(currentSentence);
    $("#target-letter").text(nextLetter);
    $("#yellow-block").removeAttr("style");
    $("#feedback").text("");
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
