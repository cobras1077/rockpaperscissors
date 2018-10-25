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
        // var computerChoice="rock"
         $("#computerChoice").html("rock"); 
    }else if(randomNumber < .66666 && randomNumber > .33333) {
    //   var computerChoice="paper"
        $("#computerChoice").html("paper");
    } else {
    //   var computerChoice="scissors"
         $("#computerChoice").html("scissor"); 
    }
});
// $("#computerChoice").text($("#").val());
 var userChoice = "";
 var computerChoice = "";
 var winner = "";
 var randomNumber = Math.random();
  
 
 
