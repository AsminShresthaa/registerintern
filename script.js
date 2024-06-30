document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate Full Name
    const fullName = document.getElementById('fullname').value.trim();
    if (fullName === "") {
        showError('fullnameError', 'Full Name is required.');
        isValid = false;
    }

    // Validate Username
    const username = document.getElementById('username').value.trim();
    if (username === "") {
        showError('usernameError', 'Username is required.');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (email === "") {
        showError('emailError', 'Email is required.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email.');
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value.trim();
    if (phone === "") {
        showError('phoneError', 'Phone Number is required.');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('phoneError', 'Please enter a valid phone number.');
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value.trim();
    if (password === "") {
        showError('passwordError', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters.');
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    if (confirmPassword !== password) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // Validate Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError('genderError', 'Please select your gender.');
        isValid = false;
    }

    // If all validations pass, redirect to another page
    if (isValid) {
        window.location.href = "success.html";
    }
});

function clearErrors() {
    document.querySelectorAll('.error').forEach(function(error) {
        error.style.display = 'none';
    });
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function validateEmail(email) {
    // Simple email regex for validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Simple phone number regex for validation (basic US format)
    const re = /^\d{10}$/;
    return re.test(phone);
}
