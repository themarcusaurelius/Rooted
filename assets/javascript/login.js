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
    
    window.firebaseAuth = firebase.auth;

    ////////////////////////////////////////////////////////////////////////////////////
    var database = firebase.database();

    var name = "";
    var email = "";
    var password = "";
    
    // Capture Button Click
    $("#buttonLogin").on("click", function(event) {
        event.preventDefault();

        // Grabbed values from text boxes
        name = $("#inputName").val().trim();
        email = $("#inputEmail").val().trim();
        password = $("#inputPassword").val().trim();

        console.log(name);
        console.log(email);
        console.log(password);

        // Code for handling the push
        database.ref("/Users").push({
            name: name,
            email: email,
            password: password,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
});

// Firebase watcher .on("child_added"
database.ref("/Users").on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.email);
    console.log(sv.password);
    
    // Change the HTML to reflect
    $("#name-display").text(sv.name);

    // Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


$("#buttonLogOut").on("click", function(event) {
        event.preventDefault();
        $("#name-display").append("Log-In");
});




    //elements acquired
    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonLogin = document.getElementById('buttonLogin');
    const buttonCreate = document.getElementById('buttonCreate');
    const buttonLogOut = document.getElementById('buttonLogOut');

    //login event

    buttonLogin.addEventListener('click', e => {
        //get email and password
        const email = inputEmail.value;
        const password = inputPassword.value;
        const authorize = firebase.auth();
        //Sign in
        const entry = authorize.signInWithEmailAndPassword(email, password);
        entry.catch(e => console.log(e.message));

    });

    buttonCreate.addEventListener('click', e => {
        //get email and password
        const email = inputEmail.value;
        const password = inputPassword.value;
        const authorize = firebase.auth();
        //Sign in
        const entry = authorize.createUserWithEmailAndPassword(email, password);
        entry.catch(e => console.log(e.message));
    });


    buttonLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
    });


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            buttonLogOut.classList.remove('hide');
              // User is signed in.

        }

        else {
            console.log("not logged in");
            buttonLogOut.classList.add('hide');
              // User is not logged in.
        }
    });

    var user = firebase.auth().currentUser;

    console.log(user);
});