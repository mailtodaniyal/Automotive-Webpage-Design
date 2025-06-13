        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate links
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Hamburger animation
            hamburger.classList.toggle('toggle');
        });

        // Close mobile menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
                links.forEach(link => {
                    link.style.animation = '';
                });
            });
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 0);
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Before & After Slider
        const slider = document.querySelector('.slider');
        const before = document.querySelector('.before-image');
        const sliderHandle = document.querySelector('.slider-handle');
        let isDragging = false;

        sliderHandle.addEventListener('mousedown', () => {
            isDragging = true;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const sliderRect = slider.getBoundingClientRect();
            let x = e.clientX - sliderRect.left;
            
            // Constrain within slider bounds
            x = Math.max(0, Math.min(x, sliderRect.width));
            
            const percent = (x / sliderRect.width) * 100;
            
            before.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0% 100%)`;
            sliderHandle.style.left = `${percent}%`;
        });

        // Form Submission
        const form = document.getElementById('form');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will contact you shortly.');
            form.reset();
        });

        // Newsletter Form
        const newsletterForm = document.querySelector('.newsletter-form');
        
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input').value;
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });

        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.feature-card, .testimonial-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.feature-card, .testimonial-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease-out';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
