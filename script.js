document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.classList.remove('active');
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Contact form submission simulation
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      // Simple validation is ensured by HTML required attribute
  
      // Simulate sending message with delay
      feedback.textContent = 'Sending...';
      setTimeout(() => {
        feedback.textContent = 'Thank you for your message! I will get back to you soon.';
        form.reset();
      }, 1500);
    });
  });
  