function validateInput() {
    const textInput = document.getElementById('textInput');
    const value = textInput.value.trim();
    const isValid = value.includes('.') && (value.includes('https://') || value.includes('http://'));
    textInput.classList.toggle('valid', isValid);
    textInput.classList.toggle('invalid', !isValid);
  }
  
  
  function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const value = emailInput.value.trim();
    const isValid = value.includes('.') && value.includes('@');
    emailInput.classList.toggle('valid', isValid);
    emailInput.classList.toggle('invalid', !isValid);
  }