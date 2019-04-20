<?php
  
    $email = $_POST['email-nick'];
   

    $email_from = 'Contact CIO MP Site';
    $email_subject = 'From MP Wellness Page';
    $email_body =  "Email: $email.\n".
                  

    $to ="nmirabello@masspay.net";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";
  
    mail($to,$email_subject,$email_body,$headers);
  
    header("location: thankyou.html");
?>