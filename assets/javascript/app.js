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

// var questions = trivia[i].question;
// var choices = trivia[0].question.answers;

//on start, display first question
$(document).on("click", function (){

	//run through length of trivia to print selected question
	for (var i = 0; i < trivia.length; i++) {

		//empty div
		$("#displayQuestion").empty();

		var question = trivia[i].question;
		

		//print to html
		$("#displayQuestion").html("<h2>" + question + "</h2>")
 

	//assigns variable to find answers quicker 	
	var choices = trivia[i].answers; 
		
	//for loops over trivia.answers
	for (var j = 0; j < choices.length; j++){

		//empty div
		$("#displayAnswers").empty();

		//creates button per choice
		var buttons = $('<button>').text(choices[j]).attr('class', 'btn').attr('data-value', choices[j].split);
		

		//appends buttons to displayAnswers div 
		$("#displayAnswers").append(buttons);
		}	
	}
	
});
// }); 


























