


$(document).ready(function(){
    $("#btn1").click(function(){
		$.get("feedback.txt", function(text){
			var fixedText = text.split("\n");
				for(i = 0; i < fixedText.length; i++){
					$("#main").append("<p>" + fixedText[i] + "</p>");
				}
		}, "text");
	});

	$("#ani").click(function() {
		setInterval(function(){
			$.get("feedback.txt", function(text){
		    	var shoutOut = text.split("\n");
		    	var randomShout = Math.floor(Math.random() * shoutOut.length);
		    		$("p").remove();
		   			$("#main").append("<p>" + shoutOut[randomShout] + "</p>");	
			});		
		}, 5000);
	});
	
	$("#main").on("click", "p", function() {
  		$(this).animate({
   			width: "100%",
   			opacity: 0.8,
    		fontSize: "3em",
    		borderWidth: "10px"
  		}, 1500 );
	});
});

	

  		// $("p").animate({
   	// 		width: "100%",
   	// 		opacity: 0.4,
    // 		fontSize: "3em",
    // 		borderWidth: "10px"
  		// }, 1500 );