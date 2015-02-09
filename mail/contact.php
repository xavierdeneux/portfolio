<?php
require_once('vendors/swiftmailer/lib/swift_required.php');

$postdata = file_get_contents("php://input");

//$postdata = json_decode($postdata));

$email = $postdata['email'];
$name = $postdata['name'];
$content = $postdata['message'];
$phone = $postdata['phone'];

// Create the message
$message = Swift_Message::newInstance('My subject');

$message->setBody(
'<html>' .
' <head></head>' .
' <body>Phone : ' . $phone. ' - '
$content.
' </body>' .
'</html>',
  'text/html' // Mark the content-type as HTML
);		

$message->setFrom(array($email => $name));

$message->setTo('x.deneux@gmail.com');

//$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');
$transport = Swift_MailTransport::newInstance();

$mailer = Swift_Mailer::newInstance($transport);

// Send the message
$result = $mailer->send($message);
?>