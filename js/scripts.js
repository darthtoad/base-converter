function baseConversion(number, base) {
  if (!number || !base) {
    alert("Please enter numbers");
  } else {
    alert(number + ", " + base);
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
