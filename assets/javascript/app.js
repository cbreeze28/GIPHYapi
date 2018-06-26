var topics = ["Steak", "Mashed Potatoes", "Green Beans", "Chicken Fajitas"];

      function displayFoodGif() {

        var food = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=4VWsY12eftOPiPWRl8E3a7ZxUSWF4Y8f&limit=10";
            console.log(queryURL);
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          //I think I need to do a JSON parse of some kind--couldn't get stringify to work
          //Response.data returns undefined and no gif's, BUT it does return 10, undefined objects so there's communication.
          var foodDiv = $("<div class='food'>");
          var rating = response.data;
          var facts = $("<p>").text("Rating: " + rating);
            foodDiv.append(facts);
          var gifURL = response.Poster;
                console.log(gifURL);
          var gif = $("<img>").attr("src", gifURL);
          foodDiv.append(gif);
          $("#giphyList").prepend(foodDiv);
        });
      }

      //Function to add new buttons
      function renderButtons() {
        $("#buttonsList").empty();
        for (var i = 0; i < topics.length; i++) {
          var x = $("<button>");
          x.addClass("food-btn");
          x.attr("data-name", topics[i]);
          x.text(topics[i]);
          $("#buttonsList").append(x);
        }
      }


      $("#addGiphy").on("click", function(event) {
        event.preventDefault();
        var food = $("#giphyInput").val().trim();
        topics.push(food);
        renderButtons();
      });
      $(document).on("click", ".food-btn", displayFoodGif);
      renderButtons();
