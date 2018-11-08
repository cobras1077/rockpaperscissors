// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
     userChoice = $("#input").val()
    $("#userChoice").text(userChoice);
     randomNumber = Math.random();
     if( randomNumber > .66666) {
         computerChoice="rock"
         $("#computerChoice").html("rock"); 
    }else if(randomNumber < .66666 && randomNumber > .33333) {
          computerChoice="paper"
        $("#computerChoice").html("paper");
    } else {
          computerChoice="scissors"
         $("#computerChoice").html("scissor"); 
    }
     if(computerChoice==="rock"&&userChoice==="rock"){
         $("#result").html("Tie"); 
     }else if(computerChoice==="paper"&&userChoice==="rock"){
         $("#result").html("computer wins");
     }else if(computerChoice==="scissors"&&userChoice==="rock"){
         $("#result").html("user wins");
     }else if(computerChoice==="rock"&&userChoice==="paper"){
         $("#result").html("user wins");
     }else if(computerChoice==="paper"&&userChoice==="paper"){
         $("#result").html("tie");
     }else if(computerChoice==="scissors"&&userChoice==="paper"){
         $("#result").html("computer wins");
     }else if(computerChoice==="rock"&&userChoice==="scissors"){
         $("#result").html("computer wins");
     }else if(computerChoice==="paper"&&userChoice==="scissors"){
         $("#result").html("user wins");
     }else if(computerChoice==="scissors"&&userChoice==="scissors"){
         $("#result").html("tie");
     }
     $("#input").val("")
});
// $("#computerChoice").text($("#").val());
 var userChoice = "";
 var computerChoice = "";
 var winner = "";
 var randomNumber = Math.random();
 
  
 
 
