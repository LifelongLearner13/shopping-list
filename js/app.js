$(document).ready(function() {
    $('form').submit(function() {
        var user_string = $('input[type="text"]').val();
        event.preventDefault();
        $('input[type="text"]').val("");
        $('ul').append("<li><input type=\"checkbox\" name=\"list-items\" value=\"1\" id=\"one\"><label for=\"one\">" + user_string + "</label><button type=\"button\" id=\"button-one\">Delete</button></li>")
    });

	$(document).on("click", "button", function() {
	    console.log("button clicked!");
	    $(this).parent().remove();
	});

	$(document).on( "change", "input[type='checkbox']",
    function(){
        if ($(this).is(':checked')) {
            $(this).next().css('text-decoration', 'line-through');
        }
    });
});
