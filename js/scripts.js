function baseConversion(number, base) {
  if (!number || !base) {
    alert("Please enter numbers");
  } else if (base < 2 || base > 36) {
    alert("Please enter a base between 2 and 36");
  } else {
    return number.toString(base);
  }
}

$(document).ready(function(){
  $("#theForm").submit(function(event) {
    event.preventDefault();
    var number = parseFloat($("#number").val());
    var base = parseFloat($("#base").val());
    $("#result").empty();
    var result = baseConversion(number, base);
    $("#result").append(result);
  });
});
