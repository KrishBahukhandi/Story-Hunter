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

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Toggle theme and save preference in localStorage
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');  // Save light theme in localStorage
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');   // Save dark theme in localStorage
        }
    });
});

const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions-box');
const clearBtn = document.getElementById('clear-btn');

// Mock data for suggestions with links
const storySuggestions = [
    { name: 'Funny Story', url: '../STORIES/STORY_7/index.html' },
    { name: 'Horror Story', url: '../STORIES/STORY_10/index.html' },
    { name: 'Adventure tales', url: '../STORIES/STORY_2/index.html' },
    { name: 'Mystery thriller', url: '../STORIES/STORY_5/index.html' }
];

searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.trim().toLowerCase();
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    if (searchValue) {
        clearBtn.style.display = 'inline';
        const filteredSuggestions = storySuggestions.filter(story => story.name.toLowerCase().includes(searchValue));
        
        // Generate and display suggestions
        suggestionsBox.style.display = 'block';
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('p');
            suggestionItem.textContent = suggestion.name;
            suggestionItem.classList.add('suggestion-item');

            // Add click event to open the URL when suggestion is clicked
            suggestionItem.addEventListener('click', () => {
                window.location.href = suggestion.url;  // Opens the story page
            });

            suggestionsBox.appendChild(suggestionItem);
        });
    } else {
        suggestionsBox.style.display = 'none';
        clearBtn.style.display = 'none';
    }
});

// Clear input field and hide suggestions
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    suggestionsBox.style.display = 'none';
    clearBtn.style.display = 'none';
    searchInput.focus();
});
