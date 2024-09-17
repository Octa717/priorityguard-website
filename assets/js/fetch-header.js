document.addEventListener('DOMContentLoaded', function() {
  fetch('/header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header').innerHTML = data;
          // Initialize Dropotron after the header content is loaded
          if (typeof jQuery !== 'undefined' && jQuery.fn.dropotron) {
              $('#nav > ul').dropotron({
                  mode: 'fade',
                  noOpenerFade: true,
                  alignment: 'center',
                  detach: false
              });
          } else {
              console.error('jQuery or Dropotron is not loaded');
          }
      })
      .catch(error => console.error('Error loading header:', error));
});