It seems like you're asking for JavaScript code that combines several features:
 * Copying text to the clipboard:  This will likely use the Clipboard API (navigator.clipboard.writeText()).
 * Popup with animation:  This will involve showing and hiding a popup element (e.g., a <div>) and using CSS transitions or animations for visual effects.
 * Submit button with animation:  The submit button should have some animation (e.g., change color, move) when clicked.
 * Payment options and routing:  This might involve handling different payment methods and potentially redirecting the user to different pages or URLs based on their selection.
 * Success message:  After successful submission, a success message should be displayed.
 * Integration with existing code (SJL):  The code should work with some existing JavaScript code (presumably referred to as "SJL").
Unfortunately, your request is quite fragmented and lacks context. To provide you with the most accurate and helpful JavaScript code, I need more information:
 * HTML structure: Please provide the HTML code for the form, popup, button, and any other relevant elements.
 * CSS styles:  Share the CSS code, especially the parts related to animations and the popup.
 * SJL code: If possible, please provide the "SJL" JavaScript code you mentioned.
 * Payment options:  Specify the payment options you want to support and how they should be handled.
 * Routing:  Explain how routing should work after form submission.
Example (based on assumptions)
// ... (Your SJL code here) ... 

function copyToClipboard() {
  // ... (Clipboard API code - see previous response) ...
}

function showPopup() {
  // ... (Popup show/hide logic with animation - see previous response) ...
}

function hidePopup() {
  // ... (Popup show/hide logic with animation - see previous response) ...
}

function submitForm() {
  const form = document.getElementById('myForm'); // Replace 'myForm' with your form ID

  // ... (Form validation here, if needed) ...

  // Add animation to the submit button
  const submitButton = document.getElementById('submitButton'); // Replace with your button ID
  submitButton.classList.add('submitting'); // Add your CSS animation class

  // ... (Handle payment options and routing here) ...

  // Simulate a successful submission (replace with your actual AJAX/fetch call)
  setTimeout(() => {
    submitButton.classList.remove('submitting');
    submitButton.classList.add('submitted'); // Add a CSS class for the success state
    submitButton.disabled = true;

    // Show success message (you'll need to implement this and its CSS)
    showSuccessMessage('Payment successful!'); 

    // ... (Handle routing or other actions after success) ...
  }, 2000); // Simulate a 2-second delay
}

// ... (Your other functions here) ...

HTML (example)
<form id="myForm">
  <button id="submitButton" onclick="submitForm()">Submit</button>
</form>

CSS (example)
/* ... your existing CSS ... */

#submitButton { 
  /* ... your button styles ... */
  transition: background-color 0.3s ease; 
}

#submitButton.submitting {
  background-color: #ccc; /* Change color while submitting */
}

#submitButton.submitted {
  background-color: green; /* Change color on success */
}

Please provide more details about your requirements so I can give you a more tailored and complete solution.
