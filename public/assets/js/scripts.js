$(".add-email-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newEmail = {
        first_name: $("#firstname").val().trim(),
        last_name: $("#lastname").val().trim(),
        email: $("#email").val().trim()
    };
    console.log(newEmail);
    // Send the POST request.
    $.ajax({
        url: "/api/addemail",
        type: "POST",
        data: newEmail
    }).done(
        function () {
            console.log("Email Added to DB");
            // Reload the page to get the updated list
            // location.reload();
            // return
        }
        );
});