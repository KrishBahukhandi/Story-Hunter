// Toggle the mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// const toggleButton = document.getElementById('theme-toggle');
//     const themeIcon = document.getElementById('theme-icon');

//     toggleButton.addEventListener('click', function () {
//         document.body.classList.toggle('light-mode');

//         if (document.body.classList.contains('light-mode')) {
//             themeIcon.classList.remove('fa-sun');
//             themeIcon.classList.add('fa-moon');
//         } else {
//             themeIcon.classList.remove('fa-moon');
//             themeIcon.classList.add('fa-sun');
//         }
//     });