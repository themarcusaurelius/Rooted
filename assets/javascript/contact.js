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
    
    ////////////////////////////////////////////////////////////////////////////////////
    var database = firebase.database();
   
<<<<<<< HEAD
=======
    $(document).ready(function () {

>>>>>>> 403cccfaf59ebaee60bbf22c7205d6f32393dc4e
        $("#send").click(function () {
            let name= $("#name-input").val();
            let email= $("#email-input").val();
            let subject= $("#subject-input").val();
            let message= $("#message-input").val();

            console.log("click");

            let newContact = {
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
        var name = $("#name-input").val()
        var email = $("#email-input").val()
        var subject = $("#subject-input").val()
        var message = $("#message-input").val()

        // message not saving to firebase, will console.log though 

        // Push to Firebase
        database.ref("/Contact").push({
            name: name, 
            email: email, 
            subject: subject,
            message: message,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })

        // database.ref("/Contact").on("child_added", function(snapshot) {
        //     // storing the snapshot.val() in a variable for convenience
        //     var sv = snapshot.val();
         
        //     // Console.loging the last user's data
        //     console.log(sv.name);
        //     console.log(sv.wins);p

        $("#name-input").val()
        $("#email-input").val()
        $("#subject-input").val()
        $("#message-input").val()

    }) ; 
<<<<<<< HEAD
    
=======
    }) ; 
>>>>>>> 403cccfaf59ebaee60bbf22c7205d6f32393dc4e
