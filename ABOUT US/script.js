// JavaScript to make buttons and mobile menu work
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Add click events for buttons
    const exploreBtn = document.querySelector('.explore-btn');
    const loginBtn = document.querySelector('.login-btn');
    const viewMoreBtn = document.querySelector('.view-more-btn');

    exploreBtn.addEventListener('click', () => {
        window.location.href = '../discover/index.html'; // Replace with the URL of the Explore page
    });

    loginBtn.addEventListener('click', () => {
        window.location.href = '../login/index.html'; // Replace with the URL of the Sign In page
    });

    viewMoreBtn.addEventListener('click', () => {
        window.location.href = '../discover/index.html'; // Replace with the URL of the page to view more stories
    });
});