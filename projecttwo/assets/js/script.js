var one = "#main"
var two = "assets/combos/two.png"
var three = "#three"
var four = "assets/combos/four.png"
var five = "assets/combos/five.png"
var six = "assets/combos/six.png"
var seven = "assets/combos/seven.png"
var eight = "assets/combos/eight.png"
var nine = "assets/combos/nine.png"



$(document).ready(function(){
	$('#two').toggle('hide');
	$('#three').toggle('hide');
	$('#four').toggle('hide');
	$('#five').toggle('hide');
	$('#six').toggle('hide');
	$('#seven').toggle('hide');
	$('#eight').toggle('hide');
	$('#nine').toggle('hide');
	
	$('.classyshirt').toggle('hide');
	$('.journeyshirt').toggle('hide');
	$('.plainshirt').toggle('hide');
	$('.shirts').click(function(){
		$('.classyshirt').toggle();
		$('.journeyshirt').toggle();
		$('.plainshirt').toggle();
	});

	$('.adventurepants').toggle('hide');
	$('.athleticshorts').toggle('hide');
	$('.jorts').toggle('hide');
	$('.pants').click(function(){
		$('.adventurepants').toggle();
		$('.athleticshorts').toggle();
		$('.jorts').toggle();
	});





	$('.classyshirt').click(function myFunction(){

		if($('#main').is(':visible'))
			{	$('#main').toggle('hide');
				$('#three').toggle('visible');}

		if($('#two').is(':visible'))
			{	$('#two').toggle('hide');
				$('#three').toggle('visible');}

		if($('#five').is(':visible'))
			{	$('#five').toggle('hide');
				$('#four').toggle('visible');}

		if($('#six').is(':visible'))
			{	$('#six').toggle('hide');
				$('#four').toggle('visible');}

		if($('#nine').is(':visible'))
			{	$('#nine').toggle('hide');
				$('#seven').toggle('visible');}

		if($('#eight').is(':visible'))
			{	$('#eight').toggle('hide');
				$('#seven').toggle('visible');}

	});	

	$('.journeyshirt').click(function myFunction(){

		if($('#main').is(':visible'))
			{	$('#main').toggle('hide');
				$('#two').toggle('visible');}

		if($("#three").is(':visible'))
			{	$('#three').toggle('hide');
				$('#two').toggle('visible');}

		if($('#four').is(':visible'))
			{	$('#four').toggle('hide');
				$('#five').toggle('visible');}

		if($("#six").is(':visible'))
			{	$('#six').toggle('hide');
				$('#five').toggle('visible');}

		if($('#seven').is(':visible'))
			{	$('#seven').toggle('hide');
				$('#eight').toggle('visible');}

		if($("#nine").is(':visible'))
			{	$('#nine').toggle('hide');
				$('#eight').toggle('visible');}

	});

	$('.plainshirt').click(function myFunction(){

		if($('#two').is(':visible'))
			{	$('#two').toggle('hide');
				$('#main').toggle('visible');}

		if($("#three").is(':visible'))
			{	$('#three').toggle('hide');
				$('#main').toggle('visible');}

		if($('#seven').is(':visible'))
			{	$('#seven').toggle('hide');
				$('#nine').toggle('visible');}

		if($("#eight").is(':visible'))
			{	$('#eight').toggle('hide');
				$('#nine').toggle('visible');}

		if($('#five').is(':visible'))
			{	$('#five').toggle('hide');
				$('#six').toggle('visible');}

		if($("#four").is(':visible'))
			{	$('#four').toggle('hide');
				$('#six').toggle('visible');}
		

	});
	
	$('.adventurepants').click(function myFunction(){
		
		if($('#main').is(':visible'))
			{	$('#main').toggle('hide');
				$('#six').toggle('visible');}

		if($("#two").is(':visible'))
			{	$('#two').toggle('hide');
				$('#five').toggle('visible');}

		if($('#three').is(':visible'))
			{	$('#three').toggle('hide');
				$('#four').toggle('visible');}

		if($("#seven").is(':visible'))
			{	$('#seven').toggle('hide');
				$('#four').toggle('visible');}

		if($('#eight').is(':visible'))
			{	$('#eight').toggle('hide');
				$('#five').toggle('visible');}

		if($("#nine").is(':visible'))
			{	$('#nine').toggle('hide');
				$('#six').toggle('visible');}
		
	});

	$('.athleticshorts').click(function myFunction(){

		if($('#six').is(':visible'))
			{	$('#six').toggle('hide');
				$('#main').toggle('visible');}

		if($("#seven").is(':visible'))
			{	$('#seven').toggle('hide');
				$('#three').toggle('visible');}

		if($('#nine').is(':visible'))
			{	$('#nine').toggle('hide');
				$('#main').toggle('visible');}

		if($("#four").is(':visible'))
			{	$('#four').toggle('hide');
				$('#three').toggle('visible');}

		if($('#five').is(':visible'))
			{	$('#five').toggle('hide');
				$('#two').toggle('visible');}

		if($("#eight").is(':visible'))
			{	$('#eight').toggle('hide');
				$('#two').toggle('visible');}

	});

	$('.jorts').click(function myFunction(){


		if($('#six').is(':visible'))
			{	$('#six').toggle('hide');
				$('#nine').toggle('visible');}

		if($("#two").is(':visible'))
			{	$('#two').toggle('hide');
				$('#eight').toggle('visible');}

		if($('#three').is(':visible'))
			{	$('#three').toggle('hide');
				$('#seven').toggle('visible');}

		if($("#main").is(':visible'))
			{	$('#main').toggle('hide');
				$('#nine').toggle('visible');}

		if($('#four').is(':visible'))
			{	$('#four').toggle('hide');
				$('#seven').toggle('visible');}

		if($("#five").is(':visible'))
			{	$('#five').toggle('hide');
				$('#eight').toggle('visible');}
		
	});

}); 















          
