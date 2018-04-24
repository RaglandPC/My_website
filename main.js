  // Initialize Firebase

  firebase.initializeApp(config);
  // Reference message collection

  var messagesRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);
// Submit form
function submitForm(e){
    e.preventDefault();
    
// Get values
var first = getImputVal('first');
var last = getImputVal('last');
var email = getImputVal('email');
var company = getImputVal('company');
var message = getImputVal('message');
// Save message
saveMessage(first, last, email, company, message);

// Show aleart 
document.querySelector('.alert').style.display= 'block';

// Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display= 'none';
},3000)

//Clear form
document.getElementById('contactForm').reset();

}

// Function to get from values

function getImputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(first, last, email, company, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        first: first,
        last: last,
        email: email,
        company: company,
        message: message
    })
}
