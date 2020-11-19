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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;
$("#btn-login").click(function() {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email != "" && password != "") {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    } else {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
});

$("#btn-signup").click(function() {
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

    if (email != "" && password != "" && cPassword != "") {
        if (password == cPassword) {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);
            });
        } else {
            window.alert("Password do not match with the Confirm Password.");
        }
    } else {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
});

$("#btn-resetPassword").click(function() {
    var auth = firebase.auth();
    var email = $("#email").val();

    if (email != "") {
        auth.sendPasswordResetEmail(email).then(function() {
                window.alert("Email has been sent to you! Please check and verify.");
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);
            });
    } else {
        window.alert("Please write your email first.");
    }
});

$("#btn-logout").click(function() {
    window.location.href = "signin.html";
    firebase.auth().signOut();
});




$("#btn-update").click(function() {
    var phone = $("#phone").val();
    var address = $("#address").val();
    var bio = $("#bio").val();
    var fName = $("#firstName").val();
    var sName = $("#secondName").val();
    var country = $("#country").val();
    var gender = $("#gender").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if (fName != "" && sName != "" && phone != "" && country != "" && gender != "" && bio != "" && address != "") {
        var userData = {
            "phone": phone,
            "address": address,
            "bio": bio,
            "firstName": fName,
            "secondName": sName,
            "country": country,
            "gender": gender,
        };

        usersRef.set(userData, function(error) {
            if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);
            } else {
                window.location.href = "index.html";
            }
        });
    } else {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
});


function switchView(view) {
    $.get({
            url: view,
            cache: false,
        })
        .then(function(data) {
            $("#container").html(data);
        });
}