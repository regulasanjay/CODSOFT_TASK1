let currentInput = '';
let operator = '';
let previousInput = '';

function press(key) {
  const display = document.getElementById('display');
  
  if (key === 'C') {
    clearDisplay();
    return;
  }
  
  if (key === '=') {
    try {
      display.innerText = eval(currentInput);
      currentInput = display.innerText;
    } catch {
      display.innerText = 'Error';
      currentInput = '';
    }
    return;
  }
  
  currentInput += key;
  display.innerText = currentInput;
}

function clearDisplay() {
  const display = document.getElementById('display');
  currentInput = '';
  display.innerText = '0';
}
