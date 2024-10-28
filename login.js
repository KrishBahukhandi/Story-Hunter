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

        // Check if username and password match stored data
        const storedUserData = JSON.parse(localStorage.getItem(username));
        if (storedUserData && storedUserData.password === password) {
            alert('Login successful!');
        } else {
            alert('Incorrect username or password.');
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
            // Store new user data in LocalStorage
            const newUserData = {
                username: regUsername,
                email: regEmail,
                password: regPassword
            };
            localStorage.setItem(regUsername, JSON.stringify(newUserData));
            alert('Registration successful!');
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

// Handle login form submission
loginForm.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password match stored data
    const storedUserData = JSON.parse(localStorage.getItem(username));
    if (storedUserData && storedUserData.password === password) {
        alert('Login successful!');
        window.location.href = 'LANDING PAGE/index.html'; // Redirect to the landing page
    } else {
        alert('Incorrect username or password.');
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
        // Store new user data in LocalStorage
        const newUserData = {
            username: regUsername,
            email: regEmail,
            password: regPassword
        };
        localStorage.setItem(regUsername, JSON.stringify(newUserData));
        alert('Registration successful!');
        window.location.href = 'LANDING PAGE/index.html'; // Redirect to the landing page after registration
    } else {
        alert('Please fill out all fields.');
    }
});
