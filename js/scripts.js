function baseConversion(number, base) {

}





$(document).ready(function(){
  $("#theForm").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();
    var base = $("#base").val();
    $("#result").empty();
    var result = baseConversion(input, base);
    $("#result").append(result);
  })
})
