<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require_once('vendors/swiftmailer/lib/swift_required.php');

$postdata = file_get_contents("php://input");
$postdata = json_decode($postdata);

$email = $postdata->email;
$name = $postdata->name;
$content = $postdata->message;
$phone = $postdata->phone;

//print_r($postdata);

// Create the message
$message = Swift_Message::newInstance('Contact depuis xavierdeneux.fr');

$messageContent =
'<html>' .
' <head></head>' .
' <body style="background: #A5D7D7;font-family:\'Helvetica Neue\',Helvetica,Arial;color:#2C3E50;">'.
'     <div style="background:#E0EAEA;margin:15px;border-left:5px white;padding:10px;">'.
'	<h1 style="padding:20px;width:100%;background:#2C3E50;color:white;text-transform:capitalize;font-family:Montserrat,\'Helvetica Neue\',Helvetica,Arial;">Xavier Deneux</h1>'.
'     	<p>Une demande de contact a été envoyée depuis le site www.xavierdeneux.fr.</p>'.
' 	<p>Voici le message envoyé par '.$name.' ('.$email.') :</p>'.
' 	<p>'.$content.'</p>';

if($phone) {
	$messageContent .= '<i>Téléphone : </i>' . $phone;
}

$messageContent .= ' </div></body>' .
	'</html>';		

$message->setBody($messageContent, 'text/html');

$message->setTo(array($email => $name));

$message->setFrom('contact@xavierdeneux.fr');

//$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');
$transport = Swift_MailTransport::newInstance();

$mailer = Swift_Mailer::newInstance($transport);

// Send the message
$result = $mailer->send($message);
?>
