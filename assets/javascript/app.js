var text = $("#container");
var textInput = $("#text");
var interval;
var rightAnswers = 0;
var wrongAnswers = 0;
var unansweredAnswers =0;
var correctAnswers =[];
var clock = false;
var number = 200;

var decrementing = function(){
    
    $("#time-remaining").html("<h1> TIME REMAINING:  " +number +"</h1>" )
    number--;
}
function start() {
    
    
    clearInterval(interval)
    interval = setInterval(decrementing, 1000);
    // need to create if statement that if number comes to 0 to stop the page and take unanswered
}
window.onload = function() {
    $(".done").hide();
  };
  $(document).on("click touchend",".start",  function(){
    
    $(".start").hide();
    $(".kobe").hide();
    $(".done").show();
    questions();
    answers();
    decrementing();
    start();
}); 

var questions = function(){
    $("#question1").html("<h1>1. Who was the MVP of the season 2001/2002 in the NBA!? ");
    
    $("#question2").html("<h1>2.  Who is all-time rebound leader of the NBA?!");

    $("#question3").html("<h1>3.  What was the last Nba team that Shaquille O'Neal played?!");

    $("#question4").html("<h1>4.  Which coach has the most wins in the regular season in the NBA!?");

    $("#question5").html("<h1>5.  Who was the youngest MVP in the league?! ");

    $("#question6").html("<h1>6.  Who won the NBA champion in 2014/15!? ");

    $("#question7").html("<h1>7.  Most 3pt made in the NBA all-time!?");

    $("#question8").html("<h1>8.  Who was drafted first pick in 2004 NBA Draft!?");
}
var answers = function(){
    
    $("#answer29").html("<input type='radio' id='huey' name='group1' value='huey'>Shaquille O'Neal");
    $("#answer2").html("<input type='radio' id='huey' name='group1' value='huey'>Jason Kidd");
    $("#answer3").html("<input type='radio' id='huey' name='group1' value='huey'>Tim Duncan");
    $("#answer4").html("<input type='radio' id='huey' name='group1' value='huey'>Dirk Nowitzki");

    $("#answer5").html("<input type='radio' id='huey' name='group2' value='huey'>Bill Russel");
    $("#answer6").html("<input type='radio' id='huey' name='group2' value='huey'>Wilt Chamberlain");
    $("#answer7").html("<input type='radio' id='huey' name='group2' value='huey'>Moses Malone");
    $("#answer8").html("<input type='radio' id='huey' name='group2' value='huey'>Kareem Abdul-Jabbar");

    $("#answer9").html("<input type='radio' id='huey' name='group3' value='huey'>Miami Heat");
    $("#answer10").html("<input type='radio' id='huey' name='group3' value='huey'>Boston Celtics");
    $("#answer11").html("<input type='radio' id='huey' name='group3' value='huey'>Phoenix Suns");
    $("#answer12").html("<input type='radio' id='huey' name='group3' value='huey'>Cleveland Cavaliers");

    $("#answer13").html("<input type='radio' id='huey' name='group4' value='huey'>Gregg Popovich");
    $("#answer14").html("<input type='radio' id='huey' name='group4' value='huey'>Pat Riley");
    $("#answer15").html("<input type='radio' id='huey' name='group4' value='huey'>Don Nelson");
    $("#answer16").html("<input type='radio' id='huey' name='group4' value='huey'>Jerry Sloan");
    
    $("#answer17").html("<input type='radio' id='huey' name='group5' value='huey'>Lebron James");
    $("#answer18").html("<input type='radio' id='huey' name='group5' value='huey'>Derrick Rose");
    $("#answer19").html("<input type='radio' id='huey' name='group5' value='huey'>Michael Jordan");
    $("#answer20").html("<input type='radio' id='huey' name='group5' value='huey'>Magic Johnson");

    $("#answer21").html("<input type='radio' id='huey' name='group6' value='huey'>Golden State Warriors");
    $("#answer22").html("<input type='radio' id='huey' name='group6' value='huey'>San Antonio Spurs");
    $("#answer23").html("<input type='radio' id='huey' name='group6' value='huey'>Cleveland Cavaliers");
    $("#answer24").html("<input type='radio' id='huey' name='group6' value='huey'>Houston Rockets");

    $("#answer25").html("<input type='radio' id='huey' name='group7' value='huey'>Ray Allen");
    $("#answer26").html("<input type='radio' id='huey' name='group7' value='huey'>Stephen Curry");
    $("#answer27").html("<input type='radio' id='huey' name='group7' value='huey'>Reggie Miller");
    $("#answer28").html("<input type='radio' id='huey' name='group7' value='huey'>Kyle Korver");

    $("#answer29").html("<input type='radio' id='huey' name='group8' value='huey'>Lebron James");
    $("#answer30").html("<input type='radio' id='huey' name='group8' value='huey'>Carmelo Anthony");
    $("#answer31").html("<input type='radio' id='huey' name='group8' value='huey'>Darko Milicic");
    $("#answer32").html("<input type='radio' id='huey' name='group8' value='huey'>Dwyane Wade");
}

$(document).on("click touchend",".done",  function(){
   
    $("#text").html("<div id='text'> <h1> ALL DONE! </h1> </div>");
}); 
$(document).on("click", ".done" , function() {
    $(this).remove();
    $("#time-remaining").hide();
    $("#text").html("<h1> ALL DONE! </h1>");
    $("#correct").html("<h2> Correct Answers: " + rightAnswers + " </h2>");
    $("#incorrect").html("<h2> Wrong Answers: " + wrongAnswers + " </h2>");
    $("#unanswered").html("<h2> Unanswered Anaswers:" +unansweredAnswers + "</h2>");


    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();



    $("#group1").remove();
    $("#group2").remove();
    $("#group3").remove();
    $("#group4").remove();
    $("#group5").remove();
    $("#group6").remove();
    $("#group7").remove();
    $("#group8").remove();



    // $("#answer1").hide();
    // $("#answer2").hide();
    // $("#answer3").hide();
    // $("#answer4").hide();
    // $("#answer5").hide();
    // $("#answer6").hide();
    // $("#answer7").hide();
    // $("#answer8").hide();
    // $("#answer9").hide();
    // $("#answer10").hide();
    // $("#answer11").hide();
    // $("#answer12").hide();
    // $("#answer13").hide();
    // $("#answer14").hide();
    // $("#answer15").hide();
    // $("#answer16").hide();
    // $("#answer17").hide();
    // $("#answer18").hide();
    // $("#answer19").hide();
    // $("#answer20").hide();
    // $("#answer21").hide();
    // $("#answer22").hide();
    // $("#answer23").hide();
    // $("#answer24").hide();
    // $("#answer25").hide();
    // $("#answer26").hide();
    // $("#answer27").hide();
    // $("#answer28").hide();
    // $("#answer29").hide();
    // $("#answer30").hide();
    // $("#answer31").hide();
    // $("#answer32").hide();




    $("#text").html("<h1> ALL DONE! </h1>");
    $("#correct").html("<h2> Correct Answers:" +rightAnswers + "</h2>");
    $("#incorrect").html("<h2> Wrong Answers:" +wrongAnswers + "</h2>");
    $("#unanswered").html("<h2> Unanswered Anaswers:" +unansweredAnswers + "</h2>");
});

// "<input type='radio' id='huey' name='drone' value='huey' checked> What is it")