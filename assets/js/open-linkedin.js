function openLinkedIn() {
    var username = 'priority-guard-security';
    var appUrl = 'linkedin://company/' + username;
    var webUrl = 'https://www.linkedin.com/company/' + username;

    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Try to open the app
        window.location = appUrl;

        // Fallback to web after a timeout
        setTimeout(function() {
            window.location = webUrl;
        }, 2000);
    } else {
        // Open the web version for desktop users
        window.open(webUrl, '_blank');
    }
}