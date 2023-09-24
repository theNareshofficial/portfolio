<?php

$to = "thenareshoffcial@gmail.com";

$subject = "Test Mail 1";

$message = "Hello World = 1.";

$headers = "From: nareshnareshhyyy@gmail.com\r\n";
$headers .= "Replay-To: nareshnareshhyyy@gmail.com\r\n";


$mail_send = mail($to, $subject, $message,$headers);


if($mail_send) {
        echo "<h1>Mail Send Sucessfully...</h1>";
}
else{
        echo "<h1>Mail Send Failed...</h1>";
}

?>