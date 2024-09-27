function openFacebook() {
    var username = 'Priority-Guard-Security';
    var usercode = '61566478231557/';
    var appUrl = 'fb://profile/' + usercode; 
    var webUrl = 'https://www.facebook.com/people/' + username + '/' + usercode;

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
