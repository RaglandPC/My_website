
 // Initialize Firebase
 var config = {
    apiKey: "",
    authDomain: "mywebsite-94e2b.firebaseapp.com",
    databaseURL: "https://mywebsite-94e2b.firebaseio.com",
    projectId: "mywebsite-94e2b",
    storageBucket: "mywebsite-94e2b.appspot.com",
    messagingSenderId: "813927513528"
  };
  firebase.initializeApp(config);
  // Reference message collection
 
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



// Resume link

function relocate_home() {
    location.href = "KU Resume .pdf";
  }




// scroll To
$(".port").on("click", function () {
  document.querySelector("#port").scrollIntoView({
      behavior: "smooth"
  });
});

$(".contact").on("click", function () {
  document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
  });
});
