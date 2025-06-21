document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle'); // Sidebar theme toggle
    const topThemeToggle = document.getElementById('topThemeToggle'); // Top theme toggle
    const body = document.body;
    const themes = ['dark', 'light', 'professional'];
    let currentThemeIndex = themes.indexOf(localStorage.getItem('theme')) !== -1 
        ? themes.indexOf(localStorage.getItem('theme')) 
        : 0; // Default to dark if not set

    // Apply the initial theme
    body.classList.add(themes[currentThemeIndex] + '-theme');

    // Function to toggle themes
    function toggleTheme() {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length; // Cycle through themes
        const newTheme = themes[currentThemeIndex];
        body.classList.remove('dark-theme', 'light-theme', 'professional-theme');
        body.classList.add(newTheme + '-theme');
        localStorage.setItem('theme', newTheme);
    }

    // Add event listeners for both theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (topThemeToggle) {
        topThemeToggle.addEventListener('click', toggleTheme);
    }

    // Login/Register navigation
    const loginRegisterLink = document.getElementById('loginRegisterLink');
    loginRegisterLink.addEventListener('click', () => {
        window.location.href = 'login and register.html';
    });

    // Start Practicing navigation
    const startPracticingBtn = document.querySelector('.btn.btn-primary');
    startPracticingBtn.addEventListener('click', () => {
        window.location.href = 'Topics.html';
    });

    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    if (sidebarToggle && sidebar && mainContent) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('sidebar-visible');
        });

        sidebarItems.forEach(item => {
            item.addEventListener('click', function() {
                sidebarItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                if (window.innerWidth <= 994) {
                    sidebar.classList.remove('active');
                    mainContent.classList.remove('sidebar-visible');
                }
            });
        });

        document.addEventListener('click', (event) => {
            if (window.innerWidth <= 994 && 
                !sidebar.contains(event.target) && 
                !sidebarToggle.contains(event.target)) {
                sidebar.classList.remove('active');
                mainContent.classList.remove('sidebar-visible');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 994) {
                sidebar.classList.remove('active');
                mainContent.classList.remove('sidebar-visible');
            }
        });
    }

    // Testimonial Carousel functionality
    const testimonialContainer = document.getElementById('testimonialContainer');
    const indicatorsContainer = document.getElementById('indicators');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    let intervalId;

    if (testimonialContainer && indicatorsContainer && testimonials.length > 0) {
        testimonials.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });

        function goToSlide(index) {
            currentIndex = index;
            testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.indicator').forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentIndex);
            });
        }

        function autoRotate() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            goToSlide(currentIndex);
        }

        function startRotation() {
            stopRotation();
            intervalId = setInterval(autoRotate, 4000);
        }

        function stopRotation() {
            clearInterval(intervalId);
        }

        startRotation();

        testimonialContainer.addEventListener('mouseenter', stopRotation);
        testimonialContainer.addEventListener('mouseleave', startRotation);
    }

    // Navigation to sections
    const homeIcon = document.querySelector('.sidebar-item.active');
    const heroBadge = document.getElementById('heroBadge');
    homeIcon.addEventListener('click', (event) => {
        event.preventDefault();
        heroBadge.scrollIntoView({ behavior: 'smooth' });
    });

    const testimonialsLink = document.querySelector('.sidebar-item:nth-child(3)');
    const whatUsersSay = document.getElementById('whatUsersSay');
    testimonialsLink.addEventListener('click', (event) => {
        event.preventDefault();
        whatUsersSay.scrollIntoView({ behavior: 'smooth' });
    });

    const topicsLink = document.querySelector('.sidebar-item:nth-child(4)');
    const specializedPracticeAreas = document.getElementById('specializedPracticeAreas');
    if (topicsLink && specializedPracticeAreas) {
        topicsLink.addEventListener('click', (event) => {
            event.preventDefault();
            specializedPracticeAreas.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const technicalHrLink = document.querySelector('.sidebar-item:nth-child(6)');
    const ctaTitle = document.getElementById('ctaTitle');
    technicalHrLink.addEventListener('click', (event) => {
        event.preventDefault();
        ctaTitle.scrollIntoView({ behavior: 'smooth' });
    });

    // Specialty cards navigation
    const specialtyCards = document.querySelectorAll('.specialty-card');
    const practiceButtons = document.querySelectorAll('.btn-link');
    specialtyCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'Topics.html';
        });
    });
    practiceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = 'Topics.html';
        });
    });

    // Mock test navigation
    const mockTestBtn = document.querySelector('.btn-secondary');
    if (mockTestBtn) {
        mockTestBtn.addEventListener('click', () => {
            window.location.href = 'Topics.html#testarea';
            const testArea = document.getElementById('testarea');
            if (testArea) {
                testArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const mocktestSidebarItem = document.querySelector('.sidebar-item i.bx-clipboard').parentElement;
    mocktestSidebarItem.addEventListener('click', () => {
        if (window.location.pathname.endsWith('Topics.html')) {
            const testArea = document.getElementById('testarea');
            if (testArea) {
                testArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.location.href = 'Topics.html#testarea';
        }
    });

    if (window.location.hash === '#testarea') {
        setTimeout(() => {
            const testArea = document.getElementById('testarea');
            if (testArea) {
                testArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
});