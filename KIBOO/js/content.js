var myHeading = document.getElementById('myHeading');
var input = document.querySelector('input');
var p = document.querySelector('p.description');
var button = document.querySelector('button');
var userInput = document.getElementById('userInput');

button.addEventListener('click', (e) => {
  // p.textContent = 'I think ' + input.value + ' suits me well!';
  //   input.value = '';
  //   var text = p.textContent;
  if(!input.value == true) {
     event.preventDefault();
    alert("Field required");
  }

   if ( p == p ) {
    window.setTimeout((something) => {
      window.location.href = "/Users/geremyibobi/Desktop/Website/KIBOO full website/html/index.html";
    }, 2000);
  }
});
