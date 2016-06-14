$(document).ready(function() {
    $('form').submit(function() {
        var user_string = $('input[type="text"]').val();
        event.preventDefault();
        $('input[type="text"]').val("");
        $('ul p').remove(); //Removes the "Sorry, this is empty" message
        $('ul').append("<li><input type=\"checkbox\" name=\"list-items\" value=\"1\" id=\"one\"><label for=\"one\">" + user_string + "</label><button type=\"button\" id=\"button-one\">Delete</button></li>")
    });

    // Removing items from the list
	$(document).on("click", "fieldset button", function() {
	    console.log("button clicked!");
	    $(this).parent().remove();

	    if($("ul").has("li").length == 0) {
	  		$("ul").html("<p>Sorry, this is empty</p>");
		}
	});

	//Adding a strickthrough for checked items
	$(document).on( "change", "input[type='checkbox']",
    function(){
        if ($(this).is(':checked')) {
         } else if (!$(this).prop("checked")){
        	$(this).next().css('text-decoration', 'none');
        }
    });

	//Unchecking all items
    $(document).on("click", "#uncheck-all", function() {
        console.log("this works");
        $("input[type='checkbox']:checked").prop("checked", false).next().css('text-decoration', 'none');
    });
});
