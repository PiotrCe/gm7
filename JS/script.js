$('document').ready(function(){
	$('.slider').slick({
		accessibility: false,
		arrows: false
	});
	$('#pileOne').mouseenter(function(){
		$('.slider').slick('slickGoTo', 4);
	});
	$('#pileTwo').mouseenter(function(){
		$('.slider').slick('slickGoTo', 2);
	});
	$('#pileThree').mouseenter(function(){
		$('.slider').slick('slickGoTo', 1);
	});
	$('#pileFour').mouseenter(function(){
		$('.slider').slick('slickGoTo', 3);
	});
});