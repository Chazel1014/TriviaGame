// on page load = alert? start? 
// question 1 prints to page 
//possible answers print as buttons 
//each answer assigned a value of correct (0) or incorrect (-1)
//goes to Yes or No page ...timed 
//prompts next question - 

//win page / lose page? tally page?
// var counter = 0;
// var score = 0;
// var userChoice = ""; 
// var correctAnswer;
// var currentQuestion = 0; 
var questionNum = 0;

var trivia = [
	
	{
        question: "What's in a Vodka Martini?",
        answers: ['gin, sweet vermouth','vodka, soda', 'vodka, dry vermouth','vodka, sweet vermouth'], 
        rightAnswer: 3
    	
    },

    {
    	question: "What's in a Manhattan?",
        answers: ['whiskey, water','whiskey, soda', 'whiskey, dry vermouth','whiskey, sweet vermouth'],
        rightAnswer: 4
    },

    {
    	question: "What's in a Rusty Nail?",
		answers: ['scotch, drambuie', 'irish creme, whiskey', 'scotch, amaretto','coffee liquor, dark rum'],
        rightAnswer: 1
    },


];

window.onload = function startAlert(){
	sweetAlert("You have five minutes to complete this quiz. Press the 'LET'S GO' button to get started!");

	function startTimer(duration, display) {
	    var timer = duration, minutes, seconds;
	    setInterval(function () {
	        minutes = parseInt(timer / 60, 10)
	        seconds = parseInt(timer % 60, 10);

	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.text(minutes + ":" + seconds);

	        if (--timer < 0) {
	            timer = duration;
	        }
	    }, 1000);
	}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('.countdown');
    startTimer(fiveMinutes, display);
});

}

 // THIS FUNCTION WILL RUN EVERY TIME START BUTTON IS CLICKED*******
var nextQuestion = function(){
// WE CLEAR BOTH DIVS BEFORE DISPLAYING NEXT QUESTION*****
		$("#displayQuestion").empty();
		$("#displayAnswers").empty();

	

// USING THE questionNum VARIABLE, WE CAN CYCLE THROUGH EACH QUESTION OBJECT IN THE TRIVIA ARRAY*****
		$("#displayQuestion").html("<h2>" + trivia[questionNum].question + "</h2>");

// HERE, WE LOOP THROUGH EACH QUESTION IN THE SPECIFIC OBJECT DETERMINED BY questionNum VARIABLE*****
		for (var i = 0; i < trivia[questionNum].answers.length ; i++) {
// WE APPEND EACH QUESTION****
			$("#displayAnswers").append("<p>" + "<button>" + trivia[questionNum].answers[i] + "</button>" + "</p>");

		}
// INCREMENT questionNum SO THAT THE NEXT TIME THE FUNCTION IS CALLED WE GET THE NEXT QUESTION****
		questionNum++;

// IF questionNum IS GREATER THAN AMOUNT OF QUESTIONS IN TRIVIA ARRAY, RUN THE END GAME FUNCTION
		if (questionNum > trivia.length) {
			// CREATE AN END GAME FUNCTION THAT DOES EVERYTHING YOU WANT TO DO WHEN THE GAME ENDS
			// CALL END GAME FUNCTION HERE

			// endGame();

		}
}

// var questions = trivia[i].question;
// var choices = trivia[0].question.answers;

//on start, display first question
$('#start').on("click", function (){

// NEXTQUESTION FUNCTION CALLED EVERY TIME BUTTON IS CLICKED**************
	nextQuestion();


});
	// //run through length of trivia to print selected question
	// for (var i = 0; i < trivia.length; i++) {

	// 	//empty div
	// 	$("#displayQuestion").empty();

	// 	var question = trivia[i].question;
		

	// 	//print to html
	// 	$("#displayQuestion").html("<h2>" + question + "</h2>")
 

	// //assigns variable to find answers quicker 	
	// var choices = trivia[i].answers; 
		
	// //for loops over trivia.answers
	// for (var j = 0; j < choices.length; j++){

	// 	//empty div
	// 	$("#displayAnswers").empty();

	// 	//creates button per choice
	// 	var buttons = $('<button>').text(choices[j]).attr('class', 'btn').attr('data-value', choices[j].split);
		

	// 	//appends buttons to displayAnswers div 
	// 	$("#displayAnswers").append(buttons);
	// 	}	
	// }
	

// }); 
