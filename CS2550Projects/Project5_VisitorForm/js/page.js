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
