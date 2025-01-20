// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to highlight the current page in the navigation
    function highlightCurrentPage() {
        const navLinks = document.querySelectorAll('nav ul li a');
        const currentPath = window.location.pathname;
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.style.fontWeight = 'bold';  // Highlight the active link
                link.style.textDecoration = 'underline';  // Add underline for active link
            }
        });
    }

    // Call the highlightCurrentPage function on page load
    highlightCurrentPage();

    // Scroll-to-top button functionality (if needed)
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = '↑ Scroll to Top';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px';
    scrollToTopButton.style.backgroundColor = '#4a4a4a';
    scrollToTopButton.style.color = '#fff';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';  // Hide by default

    document.body.appendChild(scrollToTopButton);

    // Show the scroll-to-top button when scrolling down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
