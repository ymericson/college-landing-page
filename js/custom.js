$(function(){
	$('.report-content:first').addClass('visible');
	$('.topnav a:first').addClass('current');


	$('.topnav a').click(function(e) {

		$(this).parents('ul:first').find('a').removeClass('current');
		$(this).addClass('current');

		//prevents browser from scrolling down
		e.preventDefault();

		var toggle_visibility = $(this).attr('href');

		// Find the outer element [.parents()] of the <article>, then find your class and remove that class
		$(toggle_visibility).parents(".main-content").find('.visible').removeClass('visible');

		// Add class "visible" to the relating href element
		$(toggle_visibility).addClass('visible'); 


	});

});

		