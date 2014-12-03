$(document).ready(function(){

	//EQUAL HEIGHT

	function equalHeight(group) {
		tallest = 0;
		group.each(function() {
			thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
	equalHeight($(".eqHeight"));


   	//SELECT STYLE
    $(window).on('load', function () {
      $('.selectpicker').selectpicker();
	  $('a.yes-confirm,a.no-confirm').on('click',function(e) {
			e.preventDefault();
			$('.alpha-bg').fadeOut();
	  });
    });

	
    //SCROLL
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
		    $('.recruit').stop().animate({opacity: 0}, 1000);   
		} 
		if ($(this).scrollTop() > 300) {
		    $('.recruit').stop().animate({opacity: 1}, 1000);
		}
	});

	//CHECKBOX
	$('input[type=checkbox].cxbox, input[type=radio].radio').customRadioCheck();

	$('.arrowshow').hide();
	$('.arrowhider').click(function(){
		setTimeout(function(){$('.arrowshow').show()});		
		setTimeout(function(){$('.arrowhider').hide()});		
		setTimeout(function(){$('.wraphide').fadeOut('slow')});		
	});



	$('.arrowshow').click(function(){
		setTimeout(function(){$('.arrowhider').show()});		
		setTimeout(function(){$('.arrowshow').hide()});		
		setTimeout(function(){$('.wraphide').fadeIn('slow')},100);		
	});



	//DELETE 

	$('a.del-this').each(function() {
		$(this).on('click',function(e){
			$(this).parent().fadeOut(function() {
				$(this).remove();
			});
		});

	});



	//VALIDATION

	$('#ssearch').validate({
		ignore: [],
		errorClass:'error',
		validClass:'success',
		errorElement:'span',
		highlight: function (element, errorClass, validClass) {
			$(element).parents('div.check-val').addClass(errorClass); 
			$(element).parents('div.check-val').next('div.'+validClass).fadeOut(); 
		}, 
		unhighlight: function (element, errorClass, validClass) {
			$(element).parents('div.check-val').removeClass(errorClass); 
			$(element).parents('div.check-val').next('div.'+validClass).fadeIn(); 
		},

		rules: {
			specialistarea: {
				required: true
			},
			ygender: {
				required: true
			}
		},

		submitHandler: function (form) {
			alert('valid form submitted');
			return false;
		}
	});



	//EXPAND

	$('ul#list-search li').eq(5).nextAll().addClass('dnone');

	$('#expanded .tr-line').eq(2).nextAll('.tr-line').addClass('dnone');

	$('a.remove-this').each(function() {
		$(this).on('click',function(e){
			$(this).parent().parent().parent().fadeOut(function() {
				$(this).remove();
			});
		});
	});

	$('a.controls-arrow-show').on('click',function(e) {
		e.preventDefault();
		$('ul#list-search li.dnone').fadeIn('slow')
		$(this).fadeOut('slow',function() {
			$('a.controls-arrow-hide').fadeIn();
		});
	});

	$('a.controls-arrow-hide').on('click',function(e) {
		e.preventDefault();
		$(this).fadeOut('slow',function() {
			$('a.controls-arrow-show').fadeIn();
		});
		$('ul#list-search li.dnone').fadeOut('slow');
	});

	

	$('a.disp-benefit').on('click',function(e) {
		e.preventDefault();
		$(this).fadeOut('slow',function() {
			$('a.hide-benefit').fadeIn();
		});
		$('#expanded .dnone').fadeIn('slow');
	});

	$('a.hide-benefit').on('click',function(e) {
		e.preventDefault();
		$(this).fadeOut('slow',function() {
			$('a.disp-benefit').fadeIn();
		});
		$('#expanded .dnone').fadeOut('slow');
	});



	//TOOLTIP

	$('a.icon-ask').qtip({ // Grab some elements to apply the tooltip to
		content: {
			text: 'My common piece of text here'
		}
	});

	$('a.help1').qtip({ // Grab some elements to apply the tooltip to
		content: {
			text: 'My common piece of text here'
		}
	});

	//SORT TABLE
	$("#sortTable").tablesorter( {sortList: [[0,0], [1,0]]} ); 

});




















