$(".add-email-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newEmail = {
        first_name: $("#firstname").val().trim(),
        last_name: $("#lastname").val().trim(),
        email: $("#email").val().trim()
    };
    // Send the POST request.
    $.ajax({
        url: "/api/addemail",
        type: "POST",
        data: newEmail
    }).done(
        $(".add-email-form").empty();
    );
});