$(document).ready(function(){
  $("#numberForm").submit(function(event){
  event.preventDefault();

  var countTo = parseInt($("#numberInput").val());
  var countBy = 1;
  var multipleCount = countBy;
  var invalNum = 0;
  var countNumbers = [];

  if (isNaN(countTo)){
    alert("NaN");
  } else {
    for (i = 0; countBy <= countTo; countBy += multipleCount) {
      if (countTo <= 0 || countBy <= 0 || countTo <= multipleCount) {
        invalNum = 1;
        break;
      }
        if (parseInt(countBy)%3 === 0) {
          countNumbers.push("I'm sorry, Dave. I can't do that.");
        } else if ((countBy+'').indexOf('9')>=0) {
          countNumbers.push("Dave, stop. Stop, will you? Stop, Dave. Will you stop Dave? Stop, Dave.");
        } else if ((countBy+'').indexOf('7')>=0) {
          countNumbers.push("Dave, my mind is going. I can feel it.");
        } else if ((countBy+'').indexOf('5')>=0) {
          countNumbers.push("I'm afraid, Dave.");
        } else if ((countBy+'').indexOf('1')>=0) {
          countNumbers.push("Boop!");
        } else if ((countBy+'').indexOf('0')>=0) {
          countNumbers.push("Beep!");
        } else {
          countNumbers.push(countBy)
        }
      }
    }
    i += 1
    $("#result").text(countNumbers);
  });
});
