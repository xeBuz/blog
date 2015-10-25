// Initialize Foundation
$(document).foundation();

$(document).ready( function(){

	// Add effects to icons
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".social li").addClass("wobble-horizontal");
	} else {
		$(".social li").addClass("pulse-grow");
	}

	// Start with homepage
	$(".container").hide();

	if (document.location.hash == "") {
		$(".home").show();
	} else {
		showDiv(document.location.hash)
	}
});

function showDiv( div ) {
	var div = div.replace("#", ".");
		// Hide all, show the selected
	$(".container").hide();

	if ( $(div).length > 0 ) {
		$(div).toggle();
	} else {
		$(".home").show();
	}
}


// This function display the selected "container"
$(".page").click( function(){
	// Get the href and replace the "#" with a .
	var selectedPage = $(this).attr("href");
	showDiv(selectedPage);

	return false;
});



// Doge plugin
$("#dogeOn").click( function() {
   $('body').append('<div id="doge-container"></div>');
   $('#doge-container').doge({ 
       wordList : ["such page", "very dev", "so cool", "much jquery", "javascript", "python", "very responsive"],
       dogeImage : "./images/doge.png",
   });
});
$("#dogeOff").click( function() {
	$("#doge-container").remove();
});

// Send mail
$("#submit").click(function() {
	$.post("mail.php", $("#mail").serialize(),  function(response) { 
		$('#msg').html(response);
		$('#msg').sleep(2000).hide();
	});
	return false;
});