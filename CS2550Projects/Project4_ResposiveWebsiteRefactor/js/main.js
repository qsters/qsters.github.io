document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('main section');

    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    showSection('home');
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    let themeEnabled = false;
    let themeLink = null;

    themeToggle.addEventListener('click', () => {
        if (!themeEnabled) {
            themeLink = document.createElement('link');
            themeLink.rel = 'stylesheet';
            themeLink.id = 'dark-theme-style';
            themeLink.href = 'css/theme.css'; // Path to your dark theme CSS file
            document.head.appendChild(themeLink);
            themeEnabled = true;
            themeToggle.textContent = 'Switch to Light Theme'; // Update button text
        } else {
            if (themeLink) {
                document.head.removeChild(themeLink);
            }
            themeEnabled = false;
            themeToggle.textContent = 'Toggle Dark Theme'; // Reset button text
        }
    });
});
