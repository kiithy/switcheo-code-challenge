function validateForm() {
    const addressInput = document.getElementById('input-address');
    const otpInput = document.getElementById('input-otp');
    const addressError = document.getElementById('address-error');
    const otpError = document.getElementById('otp-error');
    const sentConfirm = document.getElementById('sent-confirm');

    addressError.textContent = '';
    otpError.textContent = '';

    let isValid = true;

    if (addressInput.value.trim() === '') {
      addressError.textContent = 'ETH Address is required';
      isValid = false;
    }

    if (otpInput.value.trim() === '') {
      otpError.textContent = 'OTP Authentication is required';
      isValid = false;
    }

    if (isValid) {
      console.log('Form submitted successfully');
    }
  }

  const inputNumber = document.getElementById('input-number');
  const cursor = document.querySelector('.cursor');

  inputNumber.addEventListener('click', () => {
    inputNumber.removeAttribute('readonly');
    cursor.style.display = 'none';
  });

  inputNumber.addEventListener('blur', () => {
    inputNumber.setAttribute('readonly', 'readonly');
    cursor.style.display = 'block';
  });
