document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const backButtons = document.querySelectorAll('.back-btn');
    const subtopicsPanels = document.querySelectorAll('.subtopics-panel');
    const themeToggle = document.querySelector('.sidebar-item i.bx-palette').parentElement;
    const topicCards = document.querySelectorAll('.topic-card');
    
    // Toggle sidebar on mobile
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
        // Close sidebar when clicking outside (for mobile)
        document.addEventListener('click', function(event) {
            if (
                window.innerWidth <= 768 &&
                !sidebar.contains(event.target) &&
                !sidebarToggle.contains(event.target)
            ) {
                sidebar.classList.remove('active');
            }
        });
    }
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            // Save theme preference to localStorage
            if (document.body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Load theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    // Back buttons in subtopics panels
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the parent subtopics panel and hide it
            const panel = this.closest('.subtopics-panel');
            if (panel) {
                panel.style.opacity = '0';
                panel.style.transform = 'translateY(20px)';
                panel.style.pointerEvents = 'none';
                
                // Reset after transition to allow hover to work again
                setTimeout(() => {
                    panel.removeAttribute('style');
                }, 300);
            }
        });
    });
    
    // Prevent subtopics panel from closing when clicking inside it
    subtopicsPanels.forEach(panel => {
        panel.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Reset subtopics panel on mouseleave to ensure hover works after leaving
    topicCards.forEach(card => {
        card.addEventListener('mouseleave', function() {
            const panel = this.querySelector('.subtopics-panel');
            if (panel) {
                panel.style.opacity = '0';
                panel.style.transform = 'translateY(20px)';
                panel.style.pointerEvents = 'none';
                
                // Reset styles after transition
                setTimeout(() => {
                    panel.removeAttribute('style');
                }, 300);
            }
        });
    });
    
    // Add hover effect for practice buttons
    const practiceButtons = document.querySelectorAll('.practice-btn');
    practiceButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.color = '#22c55e';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.color = '#888';
        });
    });
    
    // Sidebar items hover effect (additional to CSS)
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            sidebarItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Add event listener for Home sidebar item
    const homeLink = document.querySelector('.sidebar-item i.bx-home-alt').parentElement;
    homeLink.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Add event listeners for test buttons
    const startTestButtons = document.querySelectorAll('.start-test-btn');
    startTestButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the parent test card
            const testCard = button.closest('.test-card');
            // Get the test title
            const testTitle = testCard.querySelector('.test-title').textContent;
            
            // Redirect based on test type
            switch(testTitle) {
                case 'General Aptitude Test':
                    window.location.href = 'GeneralAptitude.html';
                    break;
                case 'Quick Assessment':
                    window.location.href = 'QuickAssessment.html';
                    break;
                case 'Technical Focus':
                    window.location.href = 'TechnicalFocus.html';
                    break;
                case 'Aptitude Focus':
                    window.location.href = 'AptitudeFocus.html';
                    break;
            }
        });
    });

    // Add smooth scroll for Practice Area
    const practiceAreaLink = document.querySelector('.sidebar-item i.bx-book-open').parentElement;
    const practiceAreaTitle = document.querySelector('.page-title');
    practiceAreaLink.addEventListener('click', () => {
        practiceAreaTitle.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Add smooth scroll for Mock Test Area
    const testAreaLink = document.querySelector('.sidebar-item i.bx-clipboard').parentElement;
    const testAreaSection = document.getElementById('testarea');
    testAreaLink.addEventListener('click', () => {
        testAreaSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});