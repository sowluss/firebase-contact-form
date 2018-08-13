// Initialize Firebase
var config = {
    apiKey: "AIzaSyCWkK91YwMHLHN1WraUUAjgzvAVZTD1wLE",
    authDomain: "contact-form-a8fa6.firebaseapp.com",
    databaseURL: "https://contact-form-a8fa6.firebaseio.com",
    projectId: "contact-form-a8fa6",
    storageBucket: "contact-form-a8fa6.appspot.com",
    messagingSenderId: "945193469242"
  };
  firebase.initializeApp(config);


//   Reference messages collection
var messagesRef = firebase.database().ref('messages');  

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //  save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 secs
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // clear the form
   document.getElementById('contactForm').reset();

}

// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    }) ;

}
