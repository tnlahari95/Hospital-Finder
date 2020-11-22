
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

    require_once "PHPMailer/src/PHPMailer.php";
    require_once "PHPMailer/src/SMTP.php";
    require_once "PHPMailer/src/Exception.php";

//Initialize PHP Mailer and set SMTP as mailing protocol
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Mailer = "smtp";
//set required parameters for making an SMTP connection
    $mail->SMTPDebug = 1;
    $mail->SMTPAuth = true;
    $mail->Port = 587; //465
    $mail->SMTPSecure = 'tls'; //SSL
    $mail->Host = "smtp.gmail.com";
    $mail->Username = "hospitalfinder2020@gmail.com";
    $mail->Password = "COMP324&424";

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

//email settings
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$body = $_POST['contact-content'];


$mail->IsHTML(true);
$mail->AddAddress('hospitalfinder2020@gmail.com', "Admin");
$mail->SetFrom($email,$name);
$mail->AddReplyTo($email, $name);
//$mail->AddCC("cc-recipient-email@domain", "cc-recipient-name");
$mail->Subject = $subject;
$body = $body;

$mail->MsgHTML($body);
if(!$mail->Send()) {
    echo "Error while sending Email.";
    var_dump($mail);
} else {
    echo "Email sent successfully";
}

//mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

?>