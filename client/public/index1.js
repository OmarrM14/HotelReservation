console.log("start");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVGseDyP2Yon0sbIQl48C7wan-iCCLH9U",
    authDomain: "test-js-firebase-web-app-9237f.firebaseapp.com",
    projectId: "test-js-firebase-web-app-9237f",
    storageBucket: "test-js-firebase-web-app-9237f.appspot.com",
    messagingSenderId: "1065424262361",
    appId: "1:1065424262361:web:61b4d4a9d02de0b68f1ac8"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
    // Get all input fields
    var full_name = document.getElementById('full_name').value
    var user_name = document.getElementById('user_name').value
    var email = document.getElementById('email').value
    var phone_number = document.getElementById('phone_number').value
    var password = document.getElementById('password').value
    var gender

    if (document.getElementById('dot-1').value){
        gender = "Male"
    } else if (document.getElementById('dot-2').value){
        gender = "Female"
    } else if (document.getElementById('dot-3').value){
        gender = "Prefer not to say"
    }

    //Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line !!')
        return
        // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(user_name) == false || validate_field(phone_number) == false) {
        alert('One or More Extra Fields are Outta Line !!')
        return
    }

    // Move on with auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(async function() {
        //Declare user variable
        var user = auth.currentUser
        
        // Add this to firebase database
        var database_ref = database.ref()

        // Create user data
        var user_data = {
            full_name : full_name,
            user_name : user_name,
            email : email,
            phone_number : phone_number
        }

        await database_ref.child('users/' + user.uid).set(user_data)

        alert('User Created!!')
        window.location.replace("http://localhost:3000/2")
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })

}

// Set up our login function
function login () {
   
    // Get all input fields
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    //Validate input fields
   // if (validate_email(email) == false || validate_password(password) == false) {
     //   alert('Email or Password is Outta Line !!')
      //  return
        // Don't continue running the code
   // }

    auth.signInWithEmailAndPassword(email, password)
    .then(async function() {
         //Declare user variable
         var user = auth.currentUser
        
         // Add this to firebase database
         var database_ref = database.ref()
 
         // Create user data
         var user_data = {
             
         }
 
         await database_ref.child('users/' + user.uid).update(user_data)
 
         alert('User Logged In!!')
         window.location.replace("http://localhost:3000/2")
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
}

// Set up our _continue function
function _continue () {
    // Get all input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    card_name = document.getElementById('card_name').value
    card_number = document.getElementById('card_number').value
    exp_month = document.getElementById('exp_month').value
    exp_year = document.getElementById('exp_year').value
    _CVV = document.getElementById('CVV').value
    paid_value = document.getElementById('paid_value').value

    /*
    //Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line !!')
        return
        // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(user_name) == false || validate_field(phone_number) == false) {
        alert('One or More Extra Fields are Outta Line !!')
        return
    }
    */

    // Move on with auth
    auth.signInWithEmailAndPassword(email, password)
    .then(async function() {
        //Declare user variable
        user1 = auth.currentUser
        
        // Add this to firebase database
        var database_ref = database.ref()

        // Create user data
        user1_data = {
            card_name : card_name,
            card_number : card_number,
            exp_month : exp_month,
            exp_year : exp_year,
            _CVV : _CVV,
            paid_value : paid_value
        }

        await database_ref.child('users1/' + user1.uid).set(user1_data)

        alert('data  Created!!')
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        error_code = error.code
        var error_message = error.message

        alert(error_message)
    })

}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6 || password != document.getElementById('confirm_password').value) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}
