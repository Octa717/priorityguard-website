<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $company = htmlspecialchars($_POST['companie'] ?? '');    
    $phone = htmlspecialchars($_POST['telefon']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $headers = 'From: no-reply@priorityguard.com' . "\r\n" .
           'Reply-To: no-reply@priorityguard.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();
    $to = 'contact@priorityguard.ro'; 
    $subject = 'Solicitare ofertă';

    $email_content = "Nume: $name\n";
    $email_content .= "Companie: $company\n";
    $email_content .= "Telefon: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mesaj:\n$message\n";

    if(mail($to, $subject, $email_content, $headers)) {
        echo "Mesaj trimis cu succes!";
    } else {
        echo "Eroare la trimiterea mesajului.";
    }
    
    exit;
}
?>