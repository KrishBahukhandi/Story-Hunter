document.addEventListener('DOMContentLoaded', () => {
    // Function to create the blurred background effect
    function blurBackground() {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.filter = 'blur(0px)';
        }
    }

    // Function to remove the blur after closing the modal
    function removeBlurBackground() {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.filter = 'none';
        }
    }

    // Function to dynamically load CSS for the login page
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    // Function to dynamically load JS for the login page
    function loadJS(src) {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    // Function to fetch and display the login page content
    function showLogin() {
        fetch('../login.html')
            .then(response => response.text())
            .then(data => {
                // Create a modal container if it doesn't already exist
                let modalContainer = document.getElementById('loginModal');
                if (!modalContainer) {
                    modalContainer = document.createElement('div');
                    modalContainer.id = 'loginModal';
                    document.body.appendChild(modalContainer);
                }

                modalContainer.innerHTML = data; // Insert fetched content into modal
                modalContainer.style.display = 'block'; // Make sure modal is visible

                // Load the login.css file dynamically
                loadCSS('../login.css');

                // Load the login.js file dynamically
                loadJS('../login.js');

                // Apply the blur effect
                blurBackground();

                // Close modal logic
                const closeModalButton = modalContainer.querySelector('.close-login-modal');
                closeModalButton.addEventListener('click', () => {
                    modalContainer.style.display = 'none'; // Hide the modal
                    removeBlurBackground(); // Remove the blur effect
                });
            })
            .catch(error => console.error('Error loading login page:', error));
    }

    // Add event listener to the "Sign In" button
    const signInButton = document.querySelector('.sign-in-btn');
    if (signInButton) {
        signInButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            showLogin(); // Fetch and show the login page
        });
    } else {
        console.error('Sign In button not found on the page.');
    }
});
