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

    var name = "";
    var email = "";
    var subject = "";
    var message = "";
   
        $("#send").on("click", function(event) {
            event.preventDefault();
        
             name= $("#name-input").val();
             email= $("#email-input").val();
             subject= $("#subject-input").val();
             message= $("#message-input").val();

            console.log(name);
            console.log(email); 
            console.log(subject); 
            console.log(message); 
        
        
            // Push to Firebase
            database.ref("/Contact").push({
                name: name, 
                email: email, 
                subject: subject,
                message: message,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            })
        })
        // database.ref("/Contact").on("child_added", function(snapshot) {
        //     // storing the snapshot.val() in a variable for convenience
        //     var sv = snapshot.val();
         
        //     // Console.loging the last user's data
        //     console.log(sv.name);
        //     console.log(sv.wins);p

        //$("#name-input").val()
       // $("#email-input").val()
        //$("#subject-input").val()
        //$("#message-input").val()

    }) ; 