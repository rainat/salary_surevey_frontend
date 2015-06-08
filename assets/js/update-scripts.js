(function ($) {

	'use strict';

	// RESPONSIVE NAVIGATION ON SIDEBAR
	// $('#nav-page .wrapper > ul').clone(false).find("ul,li").removeAttr("id").remove(".submenu").appendTo($("#nav-side-left ul"));

	// ACTIVE SIDEBAR ON LEFT
	$('.nav-btn, .close-nav-side').click( function() {
		var nav_side = $("#nav-side-left");
		var wrapper  = $(".wrapper-inner");
		wrapper.toggleClass("on-active");
		nav_side.toggleClass("active-left");
	});

	// responsive-main-menu @deprecated
	$('#nav-page .wrapper > ul').clone(false).find("ul,li").removeAttr("id").remove(".submenu").appendTo($(".mobile-nav"));
	
	$('.nav-btn').on("click", function() {
		$('.mobile-nav').collapse({
			toggle: false
		});
	});
	
	//$("#sortTable").stacktable();
})(jQuery);