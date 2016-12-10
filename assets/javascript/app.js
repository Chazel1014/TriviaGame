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
        answers: {
            1: "gin, sweet vermouth",
            2: "vodka, soda",
            3: "vodka, dry vermouth",
            4: "vodka, sweet vermouth"
        },
        rightAnswer: 3
    },

    {
    	question: "What's in a Manhattan?",
    	answers: {
    		1: "whiskey, grenadine",
    		2: "whiskey, sweet vermouth",
    		3: "scotch, water",
    		4: "scotch, soda"
    	}, 
    	rightAnswer: 2
    }

]

$(document).on("click", "#start", function showQuestion (id){
	$("#displayQuestion").empty();	

	$.each(trivia, function (key, value) {

	    $("#displayQuestion").text(key + ": " + value.question);


	for (var i = 0; i < value.answers.length; i++)   
	    $.each(value.answers, function (key, value) {

	        $('<button>');
	        	$('#displayAnswers').text(value);

	    	});
		});    
});

// 	for (var i = 0; i < trivia; i++) 
// 		$("#displayQuestion").text(trivia[i].question);

// });
// var random = Math.floor(Math.random) * (10-1) + 1; 
// 		for (var i = 0; i < trivia.length; i++);
// 	$("#answers").empty();
	 
// 	// for each answer

// 	// append value to #answers

// 	// make it look like this

// 	// <li class="answerthequestion" data-rightanswer="1">name</li>
// }

//  $(document).on("click", "#start", function (){

//  	console.log(" The current question is " + currentQuestion)
//  	if (trivia.length == currentQuestion){
//  		alert("Game Over");
//  	}else{


//  		showQuestion(currentQuestion);
//  		currentQuestion = currentQuestion + 1; 
//  	}
 	
 // });
// 	var question = Math.floor(Math.random() * (10 - 1) + 1) + 1;
// 	// var question = Math.floor(Math.random() * 1) + 1;
// 		for (var i = 0; i < trivia.length; i++){
// 			$(".displayQuestion").append(trivia[i].question);
// 			console.log();
// 	}	
// }


