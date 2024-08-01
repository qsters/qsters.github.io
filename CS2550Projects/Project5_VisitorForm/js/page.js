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
function initPage() {
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('main section');

    // Function to display the selected section and hide others
    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Add click event listeners to each navigation link
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target section id
            showSection(targetId); // Show the selected section
        });
    });

    // Display the 'home' section by default
    showSection('home');
}
