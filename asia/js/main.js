$( "#modalka" ).on( "click", function() {
	$('section').css({
		opacity: '.5'
		
	});;
	$(".modalka").css('opacity', '1');
  $(".modalka").css('display', 'block');
});
$( "#close" ).on( "click", function() {
  $(".modalka").css('display', 'none');
  $('section').css('opacity', '1');
});
$('')