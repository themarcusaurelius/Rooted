//    Firebase for the housing criteria form 
$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDW7VVTo0QIJkHrYXQX_ywKUBHc44AfXGs",
        authDomain: "rooted-d62ff.firebaseapp.com",
        databaseURL: "https://rooted-d62ff.firebaseio.com",
        projectId: "rooted-d62ff",
        storageBucket: "rooted-d62ff.appspot.com",
        messagingSenderId: "95280005810"
    };

    var database = firebase.database();

    $('#criteria-input').on("change", function () {
        var selectedValue = $('#price option:selected').val();
        var selectedText = $('#price option:selected').val();
        $('#price').on("change", function () {
            var value = $(this).val();
            var text = $(this).find('option:selected').text();
        })

            $("#second").click(function () {
                let price = $("#price").val();
                let start = $("#start").val();
                let end = $("#end").val();


                console.log("click");

                let newCriteria = {
                    price: $("#price").val(),
                    start: $("#start").val(),
                    end: $("#end").val(),


                };

                console.log(price);
                console.log(start);
                console.log(end);

                database.ref("/Users/userStats/Criteria").push({
                    price: price,
                    start: start,
                    end: end,
                    dateAdded: firebase.database.ServerValue.TIMESTAMP

                });

                $("#price").val().trim();
                $("#start").val().trim();
                $("#end").val().trim();

            })

        })

    });