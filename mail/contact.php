<?php
// Include swiftmailer
require_once('vendors/swiftmailer/lib/swift_required.php');

// Lecture du flux php
$postdata = file_get_contents("php://input");

if($postdata) {
   $postdata = json_decode($postdata);
} else {
   return;
}

// Parse data
$email   = $postdata->email;
$name    = $postdata->name;
$content = $postdata->message;
$phone   = $postdata->phone;

// Gestion des messages
$msg['error'] = array();
$msg['success'] = array();

// Gestion des erreurs
if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
   $msg['error'][] = 'Adresse e-mail invalide';
}

if(!$content) {
   $msg['error'][] = 'Merci de renseigner le contenu du message';
}

// Create the message
$message = Swift_Message::newInstance('Contact depuis xavierdeneux.fr');

$messageContent =
'<html>' .
' <head></head>' .
' <body style="background: #A5D7D7;font-family:\'Helvetica Neue\',Helvetica,Arial;color:#2C3E50;padding-bottom:10px;">'.
'     <h1 style="padding:20px;margin:0px;background:#2C3E50;color:white;text-transform:capitalize;font-family:Montserrat,\'Helvetica Neue\',Helvetica,Arial;">Xavier Deneux</h1>'.
'     <div style="background:#E0EAEA;margin:15px 15px 25px 15px;border-left:5px solid white;padding:10px;">'.
'     	<p>Une demande de contact a été envoyée depuis le site www.xavierdeneux.fr.</p>'.
' 	<p>Voici le message envoyé par '.$name.' ('.$email.') :</p>'.
' 	<p>'.$content.'</p>';

if($phone) {
	$messageContent .= '<i>Téléphone : </i>' . $phone;
}

$messageContent .= '</div></body>' .
	'</html>';		

$message->setBody($messageContent, 'text/html');
$message->setTo(array($email => $name));
$message->setFrom('contact@xavierdeneux.fr');
$transport = Swift_MailTransport::newInstance();
$mailer = Swift_Mailer::newInstance($transport);

// Envoi du message
if($result = $mailer->send($message)) {
   $msg['success'] = 'Merci de m\'avoir contacté, je répondrai à votre message dans les plus brefs délais';  
}

echo json_encode($msg);
?>
