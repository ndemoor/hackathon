$(function(){

	// Call FastClick
	window.addEventListener('load', function() {
    	new FastClick(document.body);
	}, false);

	// Call foundation accordeon
	$(document).foundation({
  	});
	// Calcul height of Left-col
	calculateHeight();
	$(window).resize(function() {
		calculateHeight();
	});

	$('dd > a').click(function(){
		setTimeout(function(){
			calculateHeight();
		},60);
	})

});

function calculateHeight(){
	$('.left-col').each(function(){
		var rowHeight = $(this).parent().height();
		$(this).css('height' , rowHeight+'px');
		$(this).find('i.fa').css('margin-top' , (rowHeight-15)/2 +'px');
	})
}