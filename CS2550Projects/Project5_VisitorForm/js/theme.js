
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    let themeEnabled = false; // Track the current theme state
    let themeLink = null; // Store the link element for the theme

    // Add click event listener to the theme toggle button
    themeToggle.addEventListener('click', () => {
        if (!themeEnabled) {
            // Enable dark theme
            themeLink = document.createElement('link');
            themeLink.rel = 'stylesheet';
            themeLink.id = 'dark-theme-style';
            themeLink.href = 'css/theme.css';
            document.head.appendChild(themeLink);
            themeEnabled = true;
            themeToggle.textContent = 'Switch to Light Theme';
        } else {
            // Disable dark theme
            if (themeLink) {
                document.head.removeChild(themeLink);
            }
            themeEnabled = false;
            themeToggle.textContent = 'Toggle Dark Theme';
        }
    });
}
