document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    // Initially, the login form is active
    loginForm.classList.add('active');
    loginBtn.classList.add('active');

    // Show login form and hide register form
    loginBtn.addEventListener('click', function () {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    });

    // Show register form and hide login form
    registerBtn.addEventListener('click', function () {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    // Handle login form submission
    loginForm.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent default form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert('Logging in...');
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Handle register form submission
    registerForm.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent default form submission
        const regUsername = document.getElementById('regUsername').value;
        const regEmail = document.getElementById('regEmail').value;
        const regPassword = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (regPassword !== confirmPassword) {
            alert('Passwords do not match!');
        } else if (regUsername && regEmail && regPassword) {
            alert('Signing up...');
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Blur background when login/register page is opened
    const mainContent = document.querySelector('.main-content');
    const modalContainer = document.querySelector('.login-container');
    
    function blurBackground() {
        if (mainContent) {
            mainContent.style.filter = 'blur(0px)';
        }
    }

    function removeBlurBackground() {
        if (mainContent) {
            mainContent.style.filter = 'none';
        }
    }

    // Make sure to blur the background when modal is shown
    modalContainer.classList.add('modal-active');
    blurBackground();

    // Close modal and remove blur when closed
    const closeModalButton = document.querySelector('.close-login-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modalContainer.remove();  // Remove the modal from DOM
            removeBlurBackground();  // Remove the blur effect
        });
    }
});
