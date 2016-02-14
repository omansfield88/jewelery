
//FOR THE MOVING FINGER
// var s = skrollr.init({    	
// });



//MODAL////
///////////
var productClicked = 0;
var owl = $("#slider");


$(".product").click(function(){
	productClicked = $(this).attr('name');
	$("#outer-container").addClass('blurThis');

	$(".modal , .modalCover").attr("id", "show");
	$(".modalContent").animate({
		opacity: "1"
	}, 500)

	// setTimeout(function(){		
		owl.owlCarousel({
				items : 1,
				loop: true,
				startPosition: productClicked,
			});
	// }, 1000);
	
	$('#itemTitle').text(itemPosition[productClicked].title);	
});

$("#close").click(function(){
	$(".modalContent").animate({
		opacity: "0"
	}, 250)
	setTimeout(function(){
		$(".modal , .modalCover").attr("id", "hide");
		//Need to destroy the carousel or the 'startPosition' will still have the first 'productClicked' value in from whatever ring the user clicked first. This caused the first ring to be displayed no matter what ring you click next. Then you have to remove the classes that owl carousel adds to the DOM.
		// $('#slider').owlCarousel('destroy');
		$("#outer-container").removeClass('blurThis');
		$('#slider').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
		$('#slider').find('.owl-stage-outer').children().unwrap();
	}, 250)
}).css('cursor', 'pointer');



//Next and Prev buttons
$("#nav-next").click(function(){owl.trigger("next.owl.carousel");})
			  .css('cursor', 'pointer');

$("#nav-prev").click(function(){owl.trigger("prev.owl.carousel");})
			  .css('cursor', 'pointer');



//Detect when slide changes, uses that number to refer to an array where the correct product info is stored.
owl.on('changed.owl.carousel', function(event) {
     var currentItem = event.page.index;
     console.log(Math.abs(currentItem));    
	$('#itemTitle').text(itemPosition[Math.abs(currentItem)].title); 
})












//TITLE//

//Animate letter spacing of title 1 second after page load
function animateTitle(){
	 $("#title").animate({letterSpacing: "1px"}, 3000);
}
$( document ).ready(function() {
	setTimeout(animateTitle, 500); 
});

//Reduce the goo effect in time with the letter spacing
var svg = document.getElementById("moveblur");
var warp = 10;

setInterval (function(){
	if (warp > 0){
		warp = warp - 0.05;
	} 
  
	svg.setAttribute("stdDeviation", warp);

}, 20);

