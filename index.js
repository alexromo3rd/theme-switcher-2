console.log('Running our script');

let count = 0;
let countDisplayElement = document.querySelector('#count-display');

function increaseCount() {
  count++;
  countDisplayElement.innerText = count;
  console.log(count);
}

function decreaseCount() {
  count--;
  countDisplayElement.innerText = count;
  console.log(count);
}

function resetCount() {
  count = 0;
  countDisplayElement.innerHTML = `<mark>${count}</mark>`
  console.log(count);
}

let decreaseButton = document.getElementById('decrease');
decreaseButton.addEventListener('click', decreaseCount);

let increaseButton = document.getElementById('increase');
increaseButton.addEventListener('click', increaseCount);

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetCount);

let instructionsElement = document.getElementById('instructions');
instructionsElement.innerText = 'Choose your theme:';

function selectTheme(theme) {
  document.querySelector('body').className = theme;
  document.getElementsByTagName('main')[0].className = theme;
  const buttons = document.querySelectorAll('button');

  buttons.forEach(element => element.className = theme)
}

// The return values of these methods are different. getElementsByTagName returns an HTMLlist
// which is array-like, but doesn't have higher order method access.
// querySelectorAll returns a nodeList which can get access to higher order methods.
console.log(document.querySelectorAll('button'));
console.log(document.getElementsByTagName('button'));