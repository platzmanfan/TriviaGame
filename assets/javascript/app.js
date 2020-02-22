var text = $("#container");
var textInput = $("#text");
var interval;
var rightAnswers = 0;
var wrongAnswers = 0;
var correctAnswers =[];
var clock = false;
var number = 200;

// window.onload = function() {
//     $(".start").on("click", function());
//   };
var decrementing = function(){
    number--;
    $("#time-remaining").html("<h1> TIME REMAINING:  " +number +"</h1>" )
    
}
function start() {
    
    
        clearInterval(interval)
        interval = setInterval(decrementing, 1000);
        // need to create if statement that if number comes to 0 to stop the page and give wrong answers
}
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
    
    $("#answer1").html("<input type='radio' id='huey' name='group1' value='huey'>Shaquille O'Neal");
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
$(document).on("click touchend",".start",  function(){
    // alert("hello world"); should be deleted
    $(".start").hide();
    
    questions();
    answers();
    decrementing();
    start();
}); 


// "<input type='radio' id='huey' name='drone' value='huey' checked> What is it")