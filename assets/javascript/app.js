      var topics = ["Steak", "Mashed Potatoes", "Green Beans", "Chicken Fajitas"];

      function displayFoodInfo() {

        var food = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=4VWsY12eftOPiPWRl8E3a7ZxUSWF4Y8f";
            
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          var foodDiv = $("<div class='food'>");
          var rating = response.Rated;
          var facts = $("<p>").text("Rating: " + rating);
            foodDiv.prepend(facts);

          var gifURL = response.data.images;

          var gif = $("<gif>").attr("src", gifURL);

          foodDiv.append(gif);

          $("#giphyList").append(foodDiv);
        });

      }

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
      $(document).on("click", ".food-btn", displayFoodInfo);
      renderButtons();