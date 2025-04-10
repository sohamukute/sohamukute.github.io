document.addEventListener('DOMContentLoaded', function() {
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Navbar toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active section highlight
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.classList.contains(current)) {
                link.classList.add('active');
            }
        });
    }
    );
    // Smooth scroll for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Form validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    const validateForm = () => {
        let valid = true;
        errorMessage.textContent = '';
        successMessage.textContent = '';
        
        if (nameInput.value.trim() === '') {
            valid = false;
            errorMessage.textContent += 'Name is required. ';
        }
        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
            valid = false;
            errorMessage.textContent += 'Valid email is required. ';
        }
        if (messageInput.value.trim() === '') {
            valid = false;
            errorMessage.textContent += 'Message is required. ';
        }
        
        return valid;
    };
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Simulate form submission
            setTimeout(() => {
                successMessage.textContent = 'Form submitted successfully!';
                errorMessage.textContent = '';
                form.reset();
            }, 1000);
        } else {
            successMessage.textContent = '';
        }
    });
    // Image gallery
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    // Close modal on outside click
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,
        once: true
    });
    // Initialize Swiper (for testimonials)
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    // Initialize Typed.js (for typing effect)
    const options = {
        strings: ["Web Developer", "Designer", "Content Creator"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };
    const typed = new Typed('.typed', options);
    // Initialize WOW.js (for reveal animations)
    new WOW().init();
    // Initialize lightbox for gallery
    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250
    });
    