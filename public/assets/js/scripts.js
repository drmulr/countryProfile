$(".add-email-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newEmail = {
      author: $("#auth").val().trim(),
      quote: $("#quo").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/addemail", {
      type: "POST",
      data: newEmail
    }).then(
      function() {
        console.log("Email Added to DB");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });