document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scroll-to-top');
    
    function toggleScrollToTopButton() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }

    window.addEventListener('scroll', toggleScrollToTopButton);

    scrollToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Initial check in case the page is already scrolled on load
    toggleScrollToTopButton();
});