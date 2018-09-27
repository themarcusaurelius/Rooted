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
    firebase.initializeApp(config);

    ////////////////////////////////////////////////////////////////////////////////////
    var database = firebase.database();

$(document).ready(function(){

        $("#send").click(function () {
            let name= $("#name-input").val();
            let email= $("#email-input").val();
            let subject= $("#subject-input").val();
            let message= $("#message-input").val();

            console.log("click");

            let newCompany = {
            name: name= $("#name-input").val(),
            email: email= $("#email-input").val(),
            subject: subject= $("#subject-input").val(),
            message: message= $("#message-input").val(),

            };

            console.log(name);
            console.log(email); 
            console.log(subject); 
            console.log(message); 
        })


        // Push to Firebase
        database.ref("/Contact").push({
            name: name, 
            email: email, 
            subject: subject,
            message: message,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })

        $("#name-input").val().trim();
        $("#email-input").val().trim();
        $("#subject-input").val().trim();
        $("#message-input").val().trim();

    }) 

}); 