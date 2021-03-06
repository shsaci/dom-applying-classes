// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one();
  two();
  three();
  makeVisible()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we apply a new CSS class to it:
  one.classList.add('blue');
}

// CREATE FUNCTION two HERE
function two() {
// find element 'two':
var two = document.getElementById('two');

// apply a new class to element two:
two.classList.add('green');
}

// CREATE FUNCTION three HERE
function three() {
  // find element 'three':
  var three = document.getElementById('three');

  // apply a new class to element three:
  three.classList.add('red');
}

// CREATE FUNCTION makeVisible HERE
function makeVisible() {
  // find elements with class name invisible
  var found = document.getElementsByClassName('invisible');

  // apply a new class to elements found:
  found[0].className = found[0].className.replace("invisible", "visible");
  // found[0].classList.add('visible');

}
