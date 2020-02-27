var text = $("#container");
var textInput = $("#text");
var interval;
var rightAnswers = 0;
var wrongAnswers = 0;
var unansweredAnswers =0;
var temp=[];
var value;
var currentAnswer;
var clock = false;
var number = 140;
var correctAnswer =[

     "Tim Duncan",
    "Wilt Chamberlain",
    "Boston Celtics",
    "Don Nelson",
    "Derrick Rose",
    "Golden State Warrirors",
    "Ray Allen",
    "Lebron James"

]



var decrementing = function(){
    
    $("#time-remaining").html("<h1> TIME REMAINING:  " +number +"</h1>" )
    number--;
    if (number < 5){
      
        $("#time-remaining").css( "color", "red")
        $("#time-remaining").css( "font-size", "32px")
    }
     if  (number <= 0){
            
            
            stop();
            reset();
            $("#text").html("<h1> Sorry your Time is UP!!! </h1>");
    }
};

function start() {
    
    
    clearInterval(interval)
    interval = setInterval(decrementing, 1000);

    
}

function stop() {
	clock = false;
	clearInterval(interval);
}
// for (var i =0;i < correctAnswer.length; i++){
//     currentAnswer = correctAnswer[i];
//     console.log(currentAnswer)}
window.onload = function() {
    $(".done").hide();
    


$(document).on("click touched", "#huey", function(){
    for (var i =0;i < correctAnswer.length; i++){
             currentAnswer = correctAnswer[i];
              
              
    
     if ($('input[name="group1"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group1"]:checked').val() !== currentAnswer) {
       wrongAnswers++;
       
    }

    if ($('input[name="group2"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group2"]:checked').val() !== currentAnswer) {
        wrongAnswers++;
        
     }
     if ($('input[name="group3"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group3"]:checked').val() !== currentAnswer) {
        wrongAnswers++;
        
     }
     if ($('input[name="group4"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group4"]:checked').val() !== currentAnswer) {
        wrongAnswers++;
        
     }
     if ($('input[name="group5"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group5"]:checked').val() !== currentAnswer) {
        wrongAnswers++;
        
     }
     if ($('input[name="group6"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group6"]:checked').val() !== currentAnswer) {
        wrongAnswers++;
        
     }
     if ($('input[name="group7"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group7"]:checked').val() !== currentAnswer) {
        wrongAnswers++;
        
     }
     if ($('input[name="group8"]:checked').val() === currentAnswer){
        rightAnswers++;
        
    }
    else if ($('input[name="group8"]:checked').val() !== currentAnswer) {
        wrongAnswers++;
        
     }
     else if('input[id="huey"]:unchecked') {
         unansweredAnswers++;
     }
         
     
}
  
///// it works for the correct one but for the wrong one it loop 8 times since it's in the for loop
// i couldn't figure out a way how to do it without the for loop cos outside of it the if statements didn't work!
// we should check at the end if the radio button is uncheced to incremen unanswered!
// 

    
});





  
  $(document).on("click touchend",".start",  function(){
    
    $(".start").hide();
    $(".kobe").hide();
    $(".done").show();
    questions();
    answers();
    decrementing();
    start();
   
}); 

$(document).on("click", ".done" , function() {
    $(this).remove();
    reset();
    window.scrollTo(0,0);
    $("#text").html("<h1> ALL DONE! </h1>");
    $("#correct").html("<h2> Correct Answers:" +rightAnswers + "</h2>");
    $("#incorrect").html("<h2> Wrong Answers:" +wrongAnswers + "</h2>");
    $("#unanswered").html("<h2> Unanswered Anaswers:" +unansweredAnswers + "</h2>");
});





};


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
        
    $("#answer1").html("<input type='radio' id='huey' name='group1' value='1'>Shaquille O'Neal");
    $("#answer2").html("<input type='radio' id='huey' name='group1' value='Jason Kidd'>Jason Kidd");
    $("#answer3").html("<input type='radio' id='huey' name='group1' value='Tim Duncan'>Tim Duncan");
    $("#answer4").html("<input type='radio' id='huey' name='group1' value='Dirk Nowitzki'>Dirk Nowitzki");

    $("#answer5").html("<input type='radio' id='huey' name='group2' value='Bill Russel'>Bill Russel");
    $("#answer6").html("<input type='radio' id='huey' name='group2' value='Wilt Chamberlain'>Wilt Chamberlain");
    $("#answer7").html("<input type='radio' id='huey' name='group2' value='Moses Malone'>Moses Malone");
    $("#answer8").html("<input type='radio' id='huey' name='group2' value='Kareem Abdul-Jabbar'>Kareem Abdul-Jabbar");

    $("#answer9").html("<input type='radio' id='huey' name='group3' value='Miami Heat'>Miami Heat");
    $("#answer10").html("<input type='radio' id='huey' name='group3' value='Boston Celtics'>Boston Celtics");
    $("#answer11").html("<input type='radio' id='huey' name='group3' value='Phoenix Suns'>Phoenix Suns");
    $("#answer12").html("<input type='radio' id='huey' name='group3' value='Cleveland Cavaliers'>Cleveland Cavaliers");

    $("#answer13").html("<input type='radio' id='huey' name='group4' value='Gregg Popovich'>Gregg Popovich");
    $("#answer14").html("<input type='radio' id='huey' name='group4' value='Pat Riley'>Pat Riley");
    $("#answer15").html("<input type='radio' id='huey' name='group4' value='Don Nelson'>Don Nelson");
    $("#answer16").html("<input type='radio' id='huey' name='group4' value='Jerry Sloan'>Jerry Sloan");
    
    $("#answer17").html("<input type='radio' id='huey' name='group5' value='Lebron James'>Lebron James");
    $("#answer18").html("<input type='radio' id='huey' name='group5' value='Derrick Rose'>Derrick Rose");
    $("#answer19").html("<input type='radio' id='huey' name='group5' value='Michael Jordan'>Michael Jordan");
    $("#answer20").html("<input type='radio' id='huey' name='group5' value='Magic Johnson'>Magic Johnson");

    $("#answer21").html("<input type='radio' id='huey' name='group6' value='Golden State Warriors'>Golden State Warriors");
    $("#answer22").html("<input type='radio' id='huey' name='group6' value='San Antionio Spurs'>San Antonio Spurs");
    $("#answer23").html("<input type='radio' id='huey' name='group6' value='Cleveland Cavaliers'>Cleveland Cavaliers");
    $("#answer24").html("<input type='radio' id='huey' name='group6' value='Houston Rockets'>Houston Rockets");

    $("#answer25").html("<input type='radio' id='huey' name='group7' value='Ray Allen'>Ray Allen");
    $("#answer26").html("<input type='radio' id='huey' name='group7' value='Stephen Curry'>Stephen Curry");
    $("#answer27").html("<input type='radio' id='huey' name='group7' value='Reggie Miller'>Reggie Miller");
    $("#answer28").html("<input type='radio' id='huey' name='group7' value='Kyle Korver'>Kyle Korver");

    $("#answer29").html("<input type='radio' id='huey' name='group8' value='Lebron James'>Lebron James");
    $("#answer30").html("<input type='radio' id='huey' name='group8' value='Carmelo Anthony'>Carmelo Anthony");
    $("#answer31").html("<input type='radio' id='huey' name='group8' value='Darko Milicic'>Darko Milicic");
    $("#answer32").html("<input type='radio' id='huey' name='group8' value='Dwyane Wade'>Dwyane Wade");
    // var temp =$("#huey");
    // return (temp.attr("checked") != "undefined" && temp.attr("checked") == "checked");
  
}

   
  
var reset = function(){
    
    $("#time-remaining").hide();
    $("#correct").html("<h2> Correct Answers: " + rightAnswers + " </h2>");
    $("#incorrect").html("<h2> Wrong Answers: " + wrongAnswers + " </h2>");
    $("#unanswered").html("<h2> Unanswered Anaswers:" +unansweredAnswers + "</h2>");
    window.scrollTo(0,0);
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();

    $(".done").hide();
  
    $("#group1").hide();
    $("#group2").hide();
    $("#group3").hide();
    $("#group4").hide();
    $("#group5").hide();
    $("#group6").hide();
    $("#group7").hide();
    $("#group8").hide();

}

