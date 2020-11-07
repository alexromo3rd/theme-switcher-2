console.log('Our script is running');

// console.dir(document);

// let instructionsElement = document.getElementById('instructions');

let instructionsElement = document.querySelector('#instructions');
instructionsElement.innerText = 'Choose a theme:';
// console.log(instructionsElement.className);
// console.log(instructionsElement.classList);
// console.log(instructionsElement);

const buttons = document.querySelectorAll('button');

// console.log(buttons);

let clicked = () => alert('clicked');

let facebookButton = document.querySelector('#facebook');
facebookButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  clicked();
});