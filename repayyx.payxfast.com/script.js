// Function to animate buttons (using CSS transitions)
function animateButton(button) {
  button.classList.add('button-animate');
}

// Select all copy buttons
const copyButtons = document.querySelectorAll('.van-button__text');
copyButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    animateButton(event.target);

    // Determine which text to copy based on the button clicked
    let textToCopy = '';
    if (button.textContent.trim() === 'COPY') {
      // For "Amount" and "VPA/UPI" copy buttons
      textToCopy = button.parentElement.previousElementSibling.textContent.trim();
    } else if (button.textContent.trim() === 'COPY UTR') {
      // For the "Copy UTR" button (assuming it exists in your HTML)
      textToCopy = document.getElementById('van-field-1-input').value;
    }

    // Copy the text to clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showNotification('Copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        showNotification('Failed to copy!', 'error');
      });
  });
});

// Function to show a notification
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add(type);
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
    notification.classList.remove(type);
  }, 3000); // Hide after 3 seconds
}

// Form handling and UTR validation
const myForm = document.querySelector('.van-form');
let submitCount = 0;
const utrInput = document.getElementById('van-field-1-input');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const utr = utrInput.value;

  if (submitCount >= 2) {
    showNotification('UTR already used!', 'error');
    return;
  }

  // Replace with your actual form submission logic
  // ...

  submitCount++;
  utrInput.value = ''; // Clear the input
  showNotification('UTR submitted successfully!');

  // Show "UTR used" message after two submissions
  if (submitCount >= 2) {
    showNotification('UTR already used!', 'error');
  }
});

// Radio button animations
const radioButtons = document.querySelectorAll('.van-radio');
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', () => {
    // Remove animation from all radio buttons
    radioButtons.forEach(rb => rb.parentElement.classList.remove('radio-animate'));
    // Animate the clicked radio button
    radioButton.parentElement.classList.add('radio-animate');
  });
});
