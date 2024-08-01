/*
Project:  Project 5-Personal Web Site-Visitor Form Validation-Refactor JS
Name: Quinton Grant

I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student,
or leaving my code on a public web site constitutes cheating.
I acknowledge that  If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.

Reflection (1-2 paragraphs): TODO
*/

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
