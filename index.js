document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuIcon.addEventListener('click', (e) => {
        dropdownMenu.classList.toggle('show');
        e.stopPropagation();
    });


    document.addEventListener('click', (e) => {
        if (!menuIcon.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.arrow');

        question.addEventListener('click', () => {
            // Close other open answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.arrow').innerHTML = '&#9660;';
                }
            });

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                arrow.innerHTML = '&#9650;';
            } else {
                arrow.innerHTML = '&#9660;';
            }
        });
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
