$(document).ready(function() {

  $("button#intro-start-button").click(function(event) {
    
    $("#quiz-question-1-row").show();
    $("button#intro-start-button").hide();

  });

  $("button#quiz-restart-button").click(function(event) {
    
    $("#answer-card-1").hide();
    $("#answer-card-2").hide();
    $("#answer-card-3").hide();
    $("button#display-all-button").show();
    $("#answer-additional-actions").hide();
    $("#programming-lang-quiz").trigger("reset");
    $("button#intro-start-button").show();

  });

  $("button#display-all-button").click(function(event) {
    
    $("#answer-card-1").show();
    $("#answer-card-2").show();
    $("#answer-card-3").show();
    $("button#display-all-button").hide();
  
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

  $("input[name='quiz-question-4-radios']").change(function(event) {
    const q4 = $("input[name='quiz-question-4-radios']:checked").val();

    if (q4 === "q4a1"|| q4 === "q4a2"|| q4 === "q4a3"){
      $("#quiz-question-5-row").show();
      } else {
      $("#quiz-question-5-row").hide();
      }

    event.preventDefault()
  });

  $("input[name='quiz-question-5-radios']").change(function(event) {
    const q5 = $("input[name='quiz-question-5-radios']:checked").val();

    if (q5 === "q5a1"|| q5 === "q5a2"|| q5 === "q5a3"){
      $("#quiz-submit-button").show();
      } else {
      $("#quiz-submit-button").hide();
      }

    event.preventDefault()
  });

  $("form#programming-lang-quiz").submit(function(event) {
    const q1 = $("select#q1").val();
    const q2 = $("select#q2").val();
    const q3 = $("input[name='quiz-question-3-radios']:checked").val();
    const q4 = $("input[name='quiz-question-4-radios']:checked").val();
    const q5 = $("input[name='quiz-question-5-radios']:checked").val();
    
    $(".quiz-question-rows").hide();
    
    if (q5 === "q5a1"){
      $("#answer-card-1").show();
      $("#answer-additional-actions").show();
      } else if (q5 === "q5a2"){
      $("#answer-card-2").show();
      $("#answer-additional-actions").show();
      } else if (q5 === "q5a3"){
      $("#answer-card-3").show();
      $("#answer-additional-actions").show();
    }

    event.preventDefault();
  });

});
