let sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate"
];

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
$("#sentence").text(sentences[0]);
var keyPressCount = 0;
var yellowBlockPosition = 18;
var sentenceCounter = 0;
$("#sentence").text(sentences[sentenceCounter]);
let chars = sentences[sentenceCounter].split("");
$("#target-letter").text(chars[keyPressCount]);
$("#yellow-block").css("left", `${yellowBlockPosition}px`);

$(document).on("keypress", function(e) {
  $("#target-letter").text(chars[keyPressCount + 1]);
  $("#yellow-block").css("left", `${yellowBlockPosition}px`);

  var s = String.fromCharCode(e.which);

  if (s === chars[keyPressCount]) {
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
  yellowBlockPosition += 18;

  if (keyPressCount === chars.length) {
    sentenceCounter++;
    keyPressCount = 0;
  }
  console.log(chars.length);
  console.log(sentenceCounter);
  console.log(keyPressCount);

  // console.log(keyPressCount);
  // console.log(yellowBlockPosition);
});

$;

// keyPressCount++;

// $.each(sentences, function(index, value) {
//     $.each(value.split(""), function(i, v) {
//       $("#target-letter").text(v);
//     });
//   });
