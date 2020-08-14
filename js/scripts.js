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

  $("select#q2").change(function(event) {
    const q2 = $("select#q2").val();

    if (q2 === "q2a1"|| q2 === "q2a2"){
      $("#quiz-question-3-row").show();
      } else {
      $("#quiz-question-3-row").hide();
      }

    event.preventDefault()
  });

  $("input[name='quiz-question-3-radios']").change(function(event) {
    const q3 = $("input[name='quiz-question-3-radios']:checked").val();

    if (q3 === "q3a1"|| q3 === "q3a2"|| q3 === "q3a3"){
      $("#quiz-question-4-row").show();
      } else {
      $("#quiz-question-4-row").hide();
      }

    event.preventDefault()
  });

  $("select#q1").change(function(event) {
    const q1 = $("select#q1").val();

    if (q1 === "q1a1"|| q1 === "q1a2"){
      $("#quiz-question-2-row").show();
      } else {
      $("#quiz-question-2-row").hide();
      }

    event.preventDefault()
  });

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
