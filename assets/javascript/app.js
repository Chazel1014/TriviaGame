// on page load = alert? start? 
// question 1 prints to page 
//possible answers print as buttons 
//each answer assigned a value of correct (0) or incorrect (-1)
//goes to Yes or No page ...timed 
//prompts next question - 

//win page / lose page? tally page?
var counter = 0;
var score = 0;
var userChoice = ""; 
var correctAnswer;
var currentQuestion = 0; 


var trivia = [
	
	{
        question: "What's in a Vodka Martini?",
        answers: ['gin, sweet vermouth','vodka, soda', 'vodka, dry vermouth','vodka, sweet vermouth'],
        rightAnswer: 3
    },

    {
    	 question: "What's in a Manhattan",
        answers: ['whiskey, water','whiskey, soda', 'whiskey, dry vermouth','whiskey, sweet vermouth'],
        rightAnswer: 4

    }];

$(document).on("click", function (){
	for (var i = 0; i < trivia.length; i++) {
		console.log(trivia[i].question);
		$("#displayQuestion").html("<h2>" + trivia[i].question + "</h2>")

		for (var j = 0; j < trivia[i].answers.length; j++){
	
			var answers = trivia[i].answers[j]
			console.log(answers);
			var buttons = $("<button>").text(answers).attr('data-val', j);
			$("displayAnswers").append(buttons);
		}
		
	};
}); 

