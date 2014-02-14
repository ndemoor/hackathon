$(function(){

	// Call FastClick
	window.addEventListener('load', function() {
    	new FastClick(document.body);
	}, false);

	// Call foundation accordeon
	$(document).foundation({
        tab: {
            callback: function (tab){
                console.log(tab);
                console.log('coucou');
            }
        }
  	});
	// Calcul height of Left-col
	calculateHeight();	

});

function calculateHeight(){
	$('.left-col').each(function(){
		var rowHeight = $(this).parent().height();
		$(this).css('height' , rowHeight+'px');
		$(this).find('i.fa').css('margin-top' , (rowHeight-15)/2 +'px');
	})
}