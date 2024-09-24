document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this); 

    fetch('submit-form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); 
    })
    .then(data => {
        document.getElementById('form-response-message').innerText = data; 
        document.getElementById('contact-form').reset(); 
    })
    .catch(error => {
        document.getElementById('form-response-message').innerText = 'A apărut o eroare: ' + error.message; 
    });
});
});