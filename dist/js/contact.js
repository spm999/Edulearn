var firebaseConfig = {
    apiKey: "AIzaSyCfyBtIKmhJohbCeK_67Ap1kDyds289jnk",
    authDomain: "edulearn1-e3bfb.firebaseapp.com",
    databaseURL: "https://edulearn1-e3bfb.firebaseio.com",
    projectId: "edulearn1-e3bfb",
    storageBucket: "edulearn1-e3bfb.appspot.com",
    messagingSenderId: "1024082983979",
    appId: "1:1024082983979:web:ac5ab303e1c9b4ea1bbe6e",
    measurementId: "G-QQSWP8BKE8"
};

//Init firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore;

//Start Grabing our database.
const submitBtn = document.querySelector('#submit')
let userfname = document.querySelector('#fname')
let userlname = document.querySelector('#lname')
let useremail = document.querySelector('#email')
let usermessage = document.querySelector('#subject')

//Database connecting
const db = firestore.collection("contactData");
submitBtn.addEventListener('click', function() {

    let userfnameInput = userfname.value;
    let userlnameInput = userlname.value;
    let useremailInput = useremail.value;
    let usermessageInput = usermessage.value;

    // Access the database
    db.doc().set({
            fname: userfnameInput,
            lname: userlnameInput,
            email: useremailInput,
            message: usermessageInput
        }).then(function() {
            console.log("Data saved")
            window.alert("You have successfully sent the message. ")
        })
        .catch(function(error) {
            console.log(error);
            window.alert("Please try again.")
        })

});