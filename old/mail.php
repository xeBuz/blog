
<?php
	// Here we get all the information from the fields sent over by the form.
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	 
	$to = 'jesus.roldan@gmail.com';
	$subject = 'MAIL: jesusroldan.com';
	$message = 'FROM: '.$name.' Email: '.$email.'Message: '.$message;
	$headers = 'From: info@jesusroldan.com' . "\r\n";

	mail($to, $subject, $message, $headers); //This method sends the mail.
	echo "TADA! Your email was sent!"; // success message
?>