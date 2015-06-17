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

	
	$(".gameplaytips").tooltipster({
		content: $('<div class="box-tooltipster"><h3 class="title-tooltipster">exact job title</h3><p>Although all salary data is displayed anonymously, your job title will be published to enable users to make relevant comparisons. If you have a very unique and identifiable job title you may wish to generalise this to ensure anonymity.</p></div>'),
		theme: "tooltipster-salary",	
		animation: "fade",
		delay: 50,
		touchDevices: false,
		trigger: "hover",
	});

	$(".jobtips").tooltipster({
		content: $('<div class="box-tooltipster"><h3 class="title-tooltipster">Job Reference</h3><p>Although all salary data is displayed anonymously, your job title will be published to enable users to make relevant comparisons. If you have a very unique and identifiable job title you may wish to generalise this to ensure anonymity.</p></div>'),
		theme: "tooltipster-salary",	
		animation: "fade",
		delay: 50,
		touchDevices: false,
		trigger: "hover",
	});
	//$("#sortTable").stacktable();
})(jQuery);

