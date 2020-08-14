$(document).ready(function() {

  $("select#q1").change(function(event) {
    const q1 = $("select#q1").val();

    if (q1 === "q1a1"|| q1 === "q1a2"){
      $("#quiz-question-2-row").show();
      } else {
      $("#quiz-question-2-row").hide();
      }

    event.preventDefault()
  });

});
