<?php
include("sendmail.php");
      
      $to       =   "kunalic.nadina@gmail.com";
      
      $subject  =   "subjekat";
      $message  =   "hello <i>how are you.</i>";
      $name     =   "Shahid Shaikh";
      $mailsend =   sendmail($to,$subject,$message,$name);
      
      if($mailsend==1){
        echo '<h2>email sent.</h2>';
        var_dump($_POST); exit;
      }
      else{
        echo '<h2>There are some issue.</h2>';
    }
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

