// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
    $("#faq dt").click(function() {
	$(this).fadeOut("slow");
    });
    $("h3").click(function() {
	$("dt").fadeIn("slow");
    });
    
    $(".buttons button:first").click(function(){
        $("#orderedlist").addClass("red");
    });

    $(".buttons button:nth-child(2)").click(function(){
        $("#orderedlist li").addClass("blue");
    });

    $( "#orderedlist li:last" )
    .on( "mouseenter", function() {
        $( this ).addClass("green");
    })
    .on( "mouseleave", function() {
        $( this ).removeClass("green");
    })
});
