let incrementBtn = document.querySelector('button[data-action="increment"]');
let decrementBtn = document.querySelector('button[data-action="decrement"]');
let valSpan = document.querySelector("#value");
let counterValue = 0;
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

function increment() {
  incrementBtn = counterValue += 1;
  valSpan.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  valSpan.textContent = counterValue -= 1;
  console.log(counterValue);
}

// incrementBtn.removeEventListener("click", incrementBtn);
// decrementBtn.removeEventListener("click", decrementBtn);
