$(document).ready(function() {
    var variable = 9;
    $('form').submit(function() {
        var user_string = $('input[type="text"]').val();
        event.preventDefault();
        $('input[type="text"]').val("");
        $('ul').append("<li><input type=\"checkbox\" name=\"list-items\" value=\"1\" id=\"one\"><label for=\"one\">" + user_string + "</label><button type=\"button\" id=\"button-one\">Delete</button></li>")
    });

	$(document).on("click", "fieldset button", function() {
	    console.log("button clicked!");
	    $(this).parent().remove();
	});

	$(document).on( "change", "input[type='checkbox']",
    function(){
        if ($(this).is(':checked')) {
            $(this).next().css('text-decoration', 'line-through');
        } else if (!$(this).prop("checked")){
        	$(this).next().css('text-decoration', 'none');
        }
    });

    $(document).on("click", "#uncheck-all", function() {
        console.log("this works");
        $("input[type='checkbox']:checked").prop("checked", false).next().css('text-decoration', 'none');
    });
});
