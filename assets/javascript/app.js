// on page load = alert? start? 
// question 1 prints to page 
//possible answers print as buttons 
//each answer assigned a value of correct (0) or incorrect (-1)
//goes to Yes or No page ...timed 
//prompts next question - 

//win page / lose page? tally page?
var counter = 
var score = 
var user choice = 
var correctAnswer = 

var questions = [
	
	{
		question: "What's in a Vodka Martini?"
		answer: "cold vodka, dry vermouth"
	},
	
	{
		question: "What's in a Manhattan?"
		answer: "whiskey, sweet vermouth"
	},

	{
		question: "What's in a Rusty Nail?"
		answer: "scotch, drambuie"
	},

	{
		question: "What's in a Long Island Iced Tea?"
		answer: "crum, gin, vodka, tequila, triple sec, sour mix, cola"
	},

	{
		question: "What's in a Tom Collins?"
		answer: "lemon, syrup, club soda"
	},

	{
		question: "What's in a Old Fashioned?"
		answer: "whiskey, sugar, bitters, orange"
	},

	{
		question: "What's in a Bellini?"
		answer: "prosecco/champagne, peach juice"
	},

	{
		question: "What's in a Sex on the Beach?"
		answer: "vodka, peach schnapps, creme de cassis, orange and cranberry juices"
	},

	{
		question: "What's in a Margarita?"
		answer: "tequila, triple sec, lime juice"
	},

	{
		question: "What's in a Cosmopolitan?"
		answer: "vodka, cranberry juice, cointreu, lime juice"
	},
] 

function(askaQuestion){
	for (var i = 0; i < questions.length; i++){
	$("#questions").text(questions[i]);
	console.log(questions[i]);
}	
}


