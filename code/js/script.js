//MODAL//


var productClicked = 1;
//On click of .myItem, the myNum var is changed to whatever value the clicked thing's 'name' value is.
//Which then defines what slide the carousel starts on when it's opened
$(".product").click(function(){
	var productClicked = $(this).attr('name');
	console.log(productClicked);
	
	$(".modal").css("display", "block");
	$("p").css("background-color", "yellow");

	// setTimeout(function(){		
	// 	$("#slider").owlCarousel({
	// 			items : 1,
	// 			loop: true,
	// 			startPosition: productClicked
	// 		});
	// }, 10);
	
});








// Go to the next item
$('#myNext').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
})
// Go to the previous item, at this [speed]
$('#myPrev').click(function() {
   $('.owl-carousel').trigger('prev.owl.carousel', [300]);
})