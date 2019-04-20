<?php
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer();
try {

  $subject= isset($_POST['subject']) ? $_POST['subject'] : '';
  $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
  $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $emailc = isset($_POST['emailc']) ? $_POST['emailc'] : '';
  $organization = isset($_POST['organization']) ? $_POST['organization'] : '';
  $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
  $zip = isset($_POST['zip']) ? $_POST['zip'] : '';
  $placeholder_mail = 'info@masspay.net';
  $recipient = isset($_POST['recipient']) ? $_POST['recipient'] : $placeholder_mail;
  $contactmethod = isset($_POST["contactmethod"]) ? $_POST["contactmethod"] : '';
  $message = isset($_POST['message']) ? $_POST["message"] : '';
  $state = isset($_POST['state']) ? $_POST['state'] : 'Not Set';
  $attachment_name = isset($_FILES['attachment']['name'])? $_FILES['attachment']['name'] : '';
  $attachment_path = isset($_FILES['attachment']['tmp_name'])? $_FILES['attachment']['tmp_name'] : '';
  $full_name = $firstname . ' ' . $lastname;


  $mail->setFrom('MP.Secure.Mail@masspay.net', 'MP Secure Mail');
  $mail->addAddress($recipient);
  $mail->Subject = 'New Message From MP Secure Email Form';
  $mail->Body = "Subject: $subject.\n".
                "First Name: $firstname.\n".
                "Last Name: $lastname.\n".
                "Email: $email.\n".
                "Email Confirmation: $emailc.\n".
                "Company: $organization.\n".
                "Phone: $phone.\n".
                "State: $state.\n".
                "Message: $message.\n".
                "Contact Method: $contactmethod.\n";
  $mail->addAttachment($attachment_path, $attachment_name);
  $mail->addReplyTo($email, $full_name);
  $mail->send();
} catch (Exception $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (\Exception $e) { //The leading slash means the Global PHP Exception class will be caught
  echo $e->getMessage(); //Boring error messages from anything else!
}

header("location: thankyou.html");

?>