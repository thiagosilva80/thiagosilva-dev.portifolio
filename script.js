const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');
const revealItems = document.querySelectorAll('.reveal');

function closeMenu() {
    menu?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    const icon = menuButton?.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-bars';
}

menuButton?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    const icon = menuButton.querySelector('i');
    icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);

    let currentSection = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 160) currentSection = section.id;
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));
