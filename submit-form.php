<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $company = htmlspecialchars($_POST['companie']);
    $phone = htmlspecialchars($_POST['telefon']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'office.priorityguard@gmail.com'; 

    $subject = 'Solicitare oferta';

    $email_content = "Name: $name\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    mail($to, $subject, $email_content);
    exit;
}
?>