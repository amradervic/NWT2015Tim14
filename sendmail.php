<?php


require_once('class.phpmailer.php');
require_once('class.smtp.php');
      function sendmail($to,$subject,$message,$name)
    {
                   
                  $mail             = new PHPMailer();
                  $body             = $message;
                  $mail->IsSMTP();
                 // $mail->SMTPDebug = 3; 
                  $mail->SMTPAuth   = true;
                 $mail->Host       = "smtp.gmail.com";
                 // $mail->Host = "ssl://smtp.gmail.com";
                  $mail->Port       = 587;
                  $mail->Username   = "placestogonwt@gmail.com";
                  $mail->Password   = "passwordtim14";
                  $mail->SMTPSecure = 'tls';
                  $mail->SetFrom('placestogonwt@gmail.com', 'PlacesTOgo');
                  $mail->AddReplyTo("placestogonwt@gmail.com","PlacesTOgo");
                  $mail->Subject    = $subject;
                  $mail->AltBody    = "Any message.";
                  $mail->MsgHTML($body);
                  $address = $to;
                  $mail->AddAddress($address, $name);
                  if(!$mail->Send()) {
                     
                      return 0;
                  } else {
                        return 1;
                 }
    }
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

