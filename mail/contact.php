<?php
require_once('vendors/swiftmailer/lib/swift_required.php');

$postdata = file_get_contents("php://input");

print_r(json_decode($postdata));

// Create the message
$message = Swift_Message::newInstance('My subject');

$message->setBody(
'<html>' .
' <head></head>' .
' <body>' .
'  Heres comme the time' .
'  Rest of message' .
' </body>' .
'</html>',
  'text/html' // Mark the content-type as HTML
);		

$message->setFrom('some@address.tld');

$message->setTo('x.deneux@gmail.com');

//$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');
$transport = Swift_MailTransport::newInstance();

$mailer = Swift_Mailer::newInstance($transport);

// Send the message
$result = $mailer->send($message);
?>