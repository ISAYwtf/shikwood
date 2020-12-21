<?php

    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    // if (isset($_POST['submit'])) {
        $project = $_POST['project'];
        $material = $_POST['material'];
        $size = $_POST['sizes'];
        $location = $_POST['location'];
        $name = $_POST['name'];
        $phone = $_POST['phone'];

        if (isset($_POST['comments'])) {
            $comments = $_POST['comments'];
        }

        //$mail->SMTPDebug = 3;                               // Enable verbose debug output

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'admin@shikwood.ru'; // Ваш логин от почты с которой будут отправляться письма
        $mail->Password = 'February2020@'; // Ваш пароль от почты с которой будут отправляться письма
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

        $mail->setFrom('admin@shikwood.ru'); // от кого будет уходить письмо?
        $mail->addAddress('admin@shikwood.ru');     // Кому будет уходить письмо 
        //$mail->addAddress('ellen@example.com');               // Name is optional
        //$mail->addReplyTo('info@example.com', 'Information');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');
        //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'SHIKWOOD - Заявка на расчет стоимости';
        $mail->Body = 'Интересующий проект:&emsp;'.$project.
                        '<br>Порода дерева:&emsp;'.$material.
                        '<br>Размеры погонные / кв. м.:&emsp;'.$size.
                        '<br>Место монтажа / доставки (регион, район, населенный пункт):&emsp;'.$location.
                        '<br>Имя:&emsp;'.$name.
                        '<br>Телефон:&emsp;'.$phone;
        if ($comments) {
            $mail->Body = $mail->Body.'<br>Комментарии:&emsp;'.$comments;
        }
        $mail->AltBody = '';

        if(!$mail->send()) {
            echo '0';
        } else {
            // header('location: thank-you.html');
            echo '1';
        }
    // }

?>