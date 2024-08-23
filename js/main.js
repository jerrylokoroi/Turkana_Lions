// Validate Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let valid = true;
        
        // Validate Name
        if (name === '') {
            alert('Please enter your name.');
            valid = false;
        }
        
        // Validate Email
        if (email === '' || !email.includes('@')) {
            alert('Please enter a valid email address.');
            valid = false;
        }
        
        // Validate Message
        if (message === '') {
            alert('Please enter your message.');
            valid = false;
        }
        
        if (!valid) {
            event.preventDefault(); // Prevent form submission
        }
    });
});

// Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Sticky Header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    const stickyHeader = () => {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', stickyHeader);
});


