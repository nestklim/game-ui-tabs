;(function($) {
	"use strict";

	$('.ba-tabs').on('click', 'li', function(){

		var tabs = $('.ba-tabs a'),
			cont = $('.ba-content__tab');

		tabs.removeClass('active');
		cont.removeClass('active');

		$(this).children('a').addClass('active');
		cont.eq($(this).index()).addClass('active');

	});


})(jQuery);

