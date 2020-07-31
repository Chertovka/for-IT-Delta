
<meta charset="UTF-8" />
<?php
$name = $_POST['name'];
$phone= $_POST['phone'];
$email = $_POST['email'];
$header = $_POST['header'];
$message = $_POST['message'];

$mes = "Your name: $name \nPhone number: $phone \nE-mail: $email \nTopic: $header \nText message: $message";
$send = mail ("semingova00@gmail.com",$header,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom: 4erto8ka21@gmail.com \r\n");

if ($send == 'true'){
	echo "The message is sent";
}
else {
	echo "Error";
}
?>