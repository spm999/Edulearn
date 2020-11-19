// Initialize Firebase
var config = {
    apiKey: "AIzaSyCfyBtIKmhJohbCeK_67Ap1kDyds289jnk",
    authDomain: "edulearn1-e3bfb.firebaseapp.com",
    databaseURL: "https://edulearn1-e3bfb.firebaseio.com",
    projectId: "edulearn1-e3bfb",
    storageBucket: "edulearn1-e3bfb.appspot.com",
    messagingSenderId: "1024082983979",
    appId: "1:1024082983979:web:ac5ab303e1c9b4ea1bbe6e",
    measurementId: "G-QQSWP8BKE8"
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // get Values
    let fname = getInputVal('fname');
    let sname = getInputVal('sname');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //save message

    saveMessage(fname, sname, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 s
    setTimeout(function() {
            document.querySelector('.alert').style.display = 'none';
        }, 3000)
        //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(fname, sname, email, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        sname: sname,
        email: email,
        phone: phone,
        message: message
    })
}