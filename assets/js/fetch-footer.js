document.addEventListener('DOMContentLoaded', function() {
  fetch('/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer').innerHTML = data;
          initializeFormHandling();
      })
      .catch(error => console.error('Error loading footer:', error));
});

function initializeFormHandling() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            fetch('submit-form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById('form-response-message').innerText = data;
                form.reset();
            })
            .catch(error => {
                document.getElementById('form-response-message').innerText = 'A apărut o eroare: ' + error.message;
            });
        });
    }
}