document.addEventListener('DOMContentLoaded', function () {
    // Toggle light and dark mode with icon change
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // toggleButton.addEventListener('click', function () {
    //     document.body.classList.toggle('light-mode');

    //     if (document.body.classList.contains('light-mode')) {
    //         themeIcon.classList.remove('fa-sun');
    //         themeIcon.classList.add('fa-moon');
    //     } else {
    //         themeIcon.classList.remove('fa-moon');
    //         themeIcon.classList.add('fa-sun');
    //     }
    // });

    // Sticky navigation background change on scroll
    window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Responsive hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    hamburgerBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Search suggestions logic (Mockup)
    // const searchInput = document.getElementById('search-input');
    // const suggestionsBox = document.querySelector('.suggestions');

    // searchInput.addEventListener('input', function () {
    //     const searchValue = searchInput.value.trim();

    //     if (searchValue !== '') {
    //         suggestionsBox.style.display = 'block';
    //         suggestionsBox.innerHTML = '<p>Story suggestion 1</p><p>Story suggestion 2</p>'; // Mock data
    //     } else {
    //         suggestionsBox.style.display = 'none';
    //     }
    // });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-options button');

    function adjustButtonSize() {
        if (window.innerWidth <= 768) {
            filterButtons.forEach(btn => {
                btn.style.padding = '8px 15px';
                btn.style.fontSize = '12px';
            });
        } else if (window.innerWidth <= 480) {
            filterButtons.forEach(btn => {
                btn.style.padding = '6px 12px';
                btn.style.fontSize = '10px';
            });
        } else {
            filterButtons.forEach(btn => {
                btn.style.padding = '10px 20px';
                btn.style.fontSize = '14px';
            });
        }
    }

    // Run function on page load and on resize
    adjustButtonSize();
    window.addEventListener('resize', adjustButtonSize);
});

document.addEventListener("DOMContentLoaded", function() {
    function adjustMainContent() {
        const mainContent = document.querySelector('.main-content');
        const sideStories = document.querySelector('.side-stories');

        // Check if the window is smaller than 768px
        if (window.innerWidth <= 768) {
            sideStories.style.display = 'none';  // Hide side stories
        } else {
            sideStories.style.display = 'flex';  // Show side stories on larger screens
        }
    }

    // Call the function on page load and window resize
    adjustMainContent();
    window.addEventListener('resize', adjustMainContent);
});

const slider = document.querySelector('.collection-slider');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentPosition = 0;

nextButton.addEventListener('click', () => {
    const totalWidth = slider.scrollWidth;
    const visibleWidth = slider.offsetWidth;

    if (currentPosition < totalWidth - visibleWidth) {
        currentPosition += visibleWidth; // Scroll by the visible width
        slider.style.transform = `translateX(-${currentPosition}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition -= slider.offsetWidth;
        slider.style.transform = `translateX(-${currentPosition}px)`;
    }
});

