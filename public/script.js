// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    
   // add burger onclick
    $(".addBurger").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        name: $("#addBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Adding new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // devour burger onclick
    $(".eatBurger").on("click", function(event) {
      event.preventDefault();
      let id = $(this).data('id');
      const setStatus = {
          id: id,
          devoured: true
      }

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: setStatus
      }).then(
        function() {
          console.log("Burger is devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  