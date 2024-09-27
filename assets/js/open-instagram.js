function openInstagram() {
    var username = 'priorityguard';
    var appUrl = 'instagram://user?username=' + username;
    var webUrl = 'https://www.instagram.com/' + username;

    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Try to open the app
        window.location.href = appUrl;

        // Fallback to web after a timeout
        setTimeout(function() {
            window.location.href = webUrl;
        }, 2000);
    } else {
        // Open the web version for desktop users
        window.open(webUrl, '_blank');
    }
}