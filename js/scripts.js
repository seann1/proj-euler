

var findSum = function(input) {
  var sum = 0
  for (i = 0; i < input; i++) {
    if((i%5==0)||(i%3==0))
      { sum = sum + i
      };
    };
    return sum
  }


$(document).ready(function(){
  $("form#numbers").submit(function(event){
    event.preventDefault();
    var userInput = $("input#user-number").val();
    $("#sum").text(findSum(userInput));
    // $("#result").fadeIn();
  });
});
