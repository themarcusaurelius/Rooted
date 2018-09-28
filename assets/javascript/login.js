<<<<<<< HEAD
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
=======
(function ($) {
    "use strict";
>>>>>>> 403cccfaf59ebaee60bbf22c7205d6f32393dc4e

    ////////////////////////////////////////////////////////////////////////////////////
    var database = firebase.database();

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