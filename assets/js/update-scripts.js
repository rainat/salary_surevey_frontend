(function ($) {

	'use strict';

	// responsive-main-menu
	$('#nav-page .wrapper > ul').clone(false).find("ul,li").removeAttr("id").remove(".submenu").appendTo($(".mobile-nav"));
	
	$('.nav-btn').on("click", function() {
		$('.mobile-nav').collapse({
			toggle: false
		});
	});
})(jQuery); 