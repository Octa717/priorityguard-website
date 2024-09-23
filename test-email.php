<?php
$to = 'octavianduiu@yahoo.com'; // Replace with a valid email address
$subject = 'Test Email';
$message = 'This is a test email.';
$headers = 'From: sender@yourdomain.com' . "\r\n" .
           'Reply-To: sender@yourdomain.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
} else {
    echo "Failed to send email.";
}
?>