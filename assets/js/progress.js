$(document).ready(function(){
    //PROGRESS BAR
	var realgetPercent = $('.progreswrap').data('progress-percent');
    function moveProgressBar() {
      //console.log("moveProgressBar");
      	var getPercent = ($('.progreswrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progreswrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progresbar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });
   	$("#p_percent").text(realgetPercent + "%");
});