//    // Firebase for the housing criteria form 
// //    $(document).ready(function () {

// //     // Initialize Firebase
// //     var config = {
// //         apiKey: "AIzaSyDW7VVTo0QIJkHrYXQX_ywKUBHc44AfXGs",
// //         authDomain: "rooted-d62ff.firebaseapp.com",
// //         databaseURL: "https://rooted-d62ff.firebaseio.com",
// //         projectId: "rooted-d62ff",
// //         storageBucket: "rooted-d62ff.appspot.com",
// //         messagingSenderId: "95280005810"
// //     };
// //     firebase.initializeApp(config);

   
//    var database = firebase.database();

//     // $('#criteria-input').on("change", function () {
//     //     var selectedValue = $('#price-input option:selected').val();
//     //     var selectedText = $('#price-input option:selected').val();
//     //     $('#price-input').on("change", function () {
//     //         var value = $(this).val();
//     //         var text = $(this).find('option:selected').text();
//     //     })

//         $("#second").click(function () {
//             let price = $("#price-input").val();
//             let housing = $("#housing-input").val(); 
//             let bedroom = $("#bedroom-input").val(); 
//             let bathroom = $("#bathroom-input").val(); 
//             let pet = $("#pet-input").val();

//             console.log("click");

//             let newCriteria = {
//                 price: $("#price-input").val(),
//                 housing: $("#housing-input").val(), 
//                 bedroom: $("#bedroom-input").val(),
//                 bathroom: $("#bathroom-input").val(),
//                 pet: $("#pet-input").val()

//             };

//             console.log(newCriteria);

//             database.ref("/Criteria").push({
//                 price: price,
//                 housing: housing, 
//                 bedroom: bedroom, 
//                 bathroom: bathroom, 
//                 pet: pet,

//                 dateAdded: firebase.database.ServerValue.TIMESTAMP

//             });

//             $("#price-input").val().trim();
//             $("#housing-input").val().trim(); 
//             $("#bedroom-input").val().trim(); 
//             $("#bathroom-input").val().trim();
//             $("#pet-input").val().trim();

//             console.log(selectedValue);
//         })

//     }); 