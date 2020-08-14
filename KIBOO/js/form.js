var form  = document.getElementsByTagName('form')[0];
var submitButton = document.querySelector("button");
var email = document.getElementById("email");
var text = document.getElementById('bro');
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');


   //-------------------FUNCTIONS------------------

   function validateEmail(email) {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
   }

   function validateForm() {
      // else if (text.value.length < 140) {
      //   alert("Maximun character 140");
      //   text.focus();
      // }
   }



   //-------------------WIRING-------------------

   submitButton.addEventListener("click", function(event){
         if(!email.value || !fName.value || !lName.value || !text.value === true){
           event.preventDefault();
           alert("All fields required");
         }
         else if ( !validateEmail(email.value) ) {
           event.preventDefault();
           alert("Invalid email entered.");
           email.focus();
         }
         else if (fName.value.length < 3 || lName.value.lenght < 3 === true ){
           event.preventDefault();
           alert('First name and last name maximum 5');
         }
   });
