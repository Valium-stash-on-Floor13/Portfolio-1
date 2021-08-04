<?php

   $name=$POST['name'];
   $email=$POST['email'];
   $message=$POST['message'];

   $email_from = 'divyayashsaxena2000@gmail.com';

   $email_subject='New form submission';

   $email_body= "Name: $name.\n";
               "Email: $email.\n";
               "Message: $message.\n";


     $to = 'divyayashsaxena2000@gmail.com';

     $headers = "From : $email_from\r\n";
     $headers = "Reply to: $email\r\n";

     mail($to, $email_subject, $email_body, $headers );
