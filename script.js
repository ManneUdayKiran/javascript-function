let count = 0;

function updateDisplay() {
  const countElement = document.getElementById('count');
  countElement.textContent = count;

  // Add animation class
  countElement.classList.add('animate');

  // Remove animation class after animation completes
  setTimeout(() => {
    countElement.classList.remove('animate');
  }, 300);
}


function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

function resetCount() {
  count = 0;
  updateDisplay();
}
