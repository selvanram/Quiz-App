$(document).ready(function() {


//Array of Questions
	var questions = [
	{
		"question": "1. That Old Danny Brown's first album is appropriately titled:",
		"choices": ["XXX", "Trap Lord", "Old", "Operation: Mindcrime"],
		"answer": "Old",
		"explanation": "Even though this dude has been on the festival circuit for a minute, his record label just released his proper debut LP"
	},

	{
		"question": "2. Cat Power, aka Chan Marshall, had not infrequent emotional breakdowns on tour for which debut album?",
		"choices": ["Myra Lee", "What Would the Community Think", "Moon Pix", "Dear Sir"],
		"answer": "Dear Sir",
		"explanation": "Cat Power is prolific in both musical output and emotional breakdowns"
	},

	{
		"question": "3. ATL's very own Mastodon first devastated the Southeast with this release:",
		"choices": ["Crack the Skye", "Blood Mountain", "Remission", "Leviathan"],
		"answer": "Remission",
		"explanation": "Full Metal Onslaught"
	},

	{
		"question": "4. Alternately brilliant and boring, Animal Collective's first full album is titled:",
		"choices": ["Sung Tongs", "Feels", "Strawberry Jam", "Spirit They're Gone, Spirit They've Vanished"],
		"answer": "Spirit They're Gone, Spirit They've Vanished",
		"explanation": "Listen to Feels instead"
	},

	{
		"question": "5. Boston Hardcore heroes, Converge, have been splitting teenage ear-drums ever since they released",
		"choices": ["Halo in a Haystack", "Jane Doe", "No Heroes", "Axe to Fall"],
		"answer": "Halo in a Haystack",
		"explanation": "Essential listening material for all teenagers."
	}

	];


	$('#reset-button').click(function() {//Restart the Game
		location.reload();
	});


	var score = $('#score').val(); //score counter
	var counter = 0; //questions and answer index

	function postQuestion() {//Post the question

			if (counter > 4) {
				$('#questions p').remove();
				$('#choices').empty();
				$('.instructions').remove();
				$('.final-page1').css('display', 'block');
				
			}
			
			else {
			var $currentQuestion = $("<p>" + questions[counter].question + "</p>")
			$('#questions').append($currentQuestion);
			
			for (var j = 0; j < questions[counter].choices.length; j++) {//loop to print out choices
				$('#choices').append("<li class='choice'>" + questions[counter].choices[j] + "</li>");
			}
		}


	

	};

		$('#choices').on('click', 'li', function() { //Check the Value of the answer
			clickedValue = $(this).text();
			if (clickedValue == questions[counter].answer) {
				console.log("true");
				$('#questions p').remove();
				$('#choices').empty();
				$('#score').val(function() {
					score++;
					$(this).empty();
					$(this).html(score);
				})
				console.log(score);
				
			}
			else {
				console.log("false");
				$('#questions p').remove();
				$('#choices').empty();
			};
			counter++;
			postQuestion();
		});


	//The button disappears and the text of the first question appears
	$('#begin').click(function() { //Test this
		$('#center-button').remove();
		postQuestion();
		});
		




});