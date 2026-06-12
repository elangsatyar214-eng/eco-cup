// =============================
// PAGE NAVIGATION
// =============================

const navLinks = document.querySelectorAll('.nav-menu a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        // Ambil nama page dari data-page
        const targetPage = link.getAttribute('data-page');

        // Sembunyikan semua halaman
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Tampilkan halaman yang dipilih
        document
            .getElementById(targetPage)
            .classList.add('active');

        // Update navbar aktif
        navLinks.forEach(item => {
            item.classList.remove('active-link');
        });

        link.classList.add('active-link');

        // Scroll ke atas setiap ganti page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

});


// =============================
// SET HOME AS DEFAULT
// =============================

document.addEventListener('DOMContentLoaded', () => {

    document
        .querySelector('[data-page="home"]')
        .classList.add('active-link');

});

// =============================
// NAVBAR TOGGLE (HAMBURGER)
// =============================

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when a nav link is clicked
        document.querySelectorAll('.nav-menu a').forEach(a => {
            a.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }
});