new Vue({
  el: '#app',
  data() {
    return {
      amount: 4200,
      vpa: 'sukh4580@pnb',
      name: 'SUKHVINDER SINGH',
      paymentMethod: '',
      utr: '',
      showPopup: false,
      submittedUTRs: [],
    };
  },
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.$notify({ type: 'success', message: 'Copied to clipboard' });
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          this.$notify({ type: 'danger', message: 'Failed to copy' });
        });
    },
    updatePaymentDetails() {
      // Implement logic to send updated data to server here
      console.log('Updated Payment Details:', {
        amount: this.amount,
        vpa: this.vpa,
        name: this.name,
      });
    },
    submitUTR() {
      if (this.utr) {
        if (this.submittedUTRs.includes(this.utr)) {
          this.$notify({ type: 'danger', message: 'This UTR has already been used' });
          return;
        }
        this.showPopup = true;
        this.submittedUTRs.push(this.utr);
        setTimeout(() => {
          console.log('Submitted UTR:', this.utr);
          window.location.href = 'success.html'; // Replace with your actual success page URL
        }, 20000); // Redirect after 20 seconds
      } else {
        this.$notify({ type: 'danger', message: 'Please enter UTR number' });
      }
    },
    payFailed() {
      console.log('Payment failed');
      this.showPopup = false;
      this.$notify({ type: 'danger', message: 'Payment failed' });
      setTimeout(() => {
        window.location.href = 'bank.html'; // Replace with your actual bank page URL
      }, 1000);
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
function animateButton(button) {
  button.classList.add('button-animate');
}

function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add(type);
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
    notification.classList.remove(type);
  }, 3000);
}

// Optimized event listeners for copy buttons
document.querySelectorAll('.van-button__text').forEach(button => {
  button.addEventListener('click', (event) => {
    animateButton(event.target);

    let textToCopy = '';
    if (event.target.textContent.trim() === 'COPY') {
      textToCopy = event.target.parentElement.previousElementSibling.textContent.trim();
    } else if (event.target.textContent.trim() === 'COPY UTR') {
      textToCopy = document.getElementById('van-field-1-input').value;
    }

    navigator.clipboard.writeText(textToCopy)
      .then(() => showNotification('Copied to clipboard!'))
      .catch(err => {
        console.error('Failed to copy: ', err);
        showNotification('Failed to copy!', 'error');
      });
  });
});

