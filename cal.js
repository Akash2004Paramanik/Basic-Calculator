let displayValue = '0';

function appendToDisplay(val) {
  if (displayValue === '0' && val !== '.') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch(error) {
    displayValue = 'Error';
    updateDisplay();
  }
}
