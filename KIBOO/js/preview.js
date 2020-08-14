var myHeading = document.getElementById('myHeading');
var button = document.getElementById('button');
var userInput = document.getElementById('userInput');

button.addEventListener('click', () => {
  myHeading.style.color = userInput.value;
});
