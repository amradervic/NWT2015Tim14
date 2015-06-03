<?php

class ApiController extends Controller
{
    // Members
    /**
     * Key which has to be in HTTP USERNAME and PASSWORD headers
     */
    Const APPLICATION_ID = 'ASCCPE';
 
    /**
     * Default response format
     * either 'json' or 'xml'
     */
    private $format = 'json';
    /**
     * @return array action filters
     */
    public function filters()
    {
            return array();
    }
  public function actionLogin()
    {
        // Check if username was submitted via GET
        if(!isset($_GET['un']))
            $this->_sendResponse(500, 'Error: Parameter <b>un</b> is missing' );
        // Check if username was submitted via GET
        if(!isset($_GET['pw']))
            $this->_sendResponse(500, 'Error: Parameter <b>pw</b> is missing' );
        // $model = User::model()->findByPk($_GET['id']);
        $model = Korisnik::model()->findByAttributes(array('korisnickoIme'=>$_GET['un']));
        // Did we find the requested User? If not, raise an error
        if(is_null($model))
            $this->_sendResponse(404, 'No User found with username '.$_GET['un']);
        if($model->sifra != $_GET['pw'])
            $this->_sendResponse(404, 'Wrong password '.$_GET['un']);
       else if ($model->banovan == 1)
           $this->_sendResponse(403, 'User banned '.$_GET['un']);
       else  if ($model->aktivan != 1)
            $this->_sendResponse(401, 'User not active '.$_GET['un']);
        else
            $this->_sendResponse(200, CJSON::encode($model));
    }
    
    public function actionGetLoggedUser()
    {
        $user = Korisnik::model()->findAllByAttributes(array('korisnickoIme'=>$_GET['un'] ));
        $this->_sendResponse(200, CJSON::encode($user));
    }
    // Actions
    public function actionList()
    {
                // Get the respective model instance
                switch($_GET['model'])
                {
                        case 'kategorije':
                                $models = Kategorija::model()->findAll();
                                break;
                        case 'komentari':
                                $models = Komentar::model()->findAll();
                                break;
                        case 'korisnici':
                                $models = Korisnik::model()->findAll();
                                break;
                        case 'log':
                                $models = Log::model()->findAll();
                                break;
                        case 'objekti':
                                $models = Objekat::model()->findAll();
                                break;
                        case 'objekat_has_kategorija':
                                $models = ObjekatHasKategorija::model()->findAll();
                                break;
                        case 'ocjene':
                                $models = Ocjena::model()->findAll();
                                break;
                        case 'privatneporuke':
                                $models = PrivatnaPoruka::model()->findAll();
                                break;
                        case 'recenzije':
                                $models = Recenzija::model()->findAll();
                                break;
                        default:
                                // Model not implemented error
                                $this->_sendResponse(501, sprintf(
                                        'Error: Mode <b>list</b> is not implemented for model <b>%s</b>',
                                        $_GET['model']) );
                                Yii::app()->end();
                }
                // Did we get some results?
                if(empty($models)) {
                        // No
                        $this->_sendResponse(200,
                                        sprintf('No items where found for model <b>%s</b>', $_GET['model']) );
                } else {
                        // Prepare response
                        $rows = array();
                        foreach($models as $model)
                                $rows[] = $model->attributes;
                        // Send the response
                        $this->_sendResponse(200, CJSON::encode($rows));
                }
    }
    public function actionView()
    {
                // Check if id was submitted via GET
                if(!isset($_GET['id']))
                        $this->_sendResponse(500, 'Error: Parameter <b>id</b> is missing' );
/*
$criteria = new CDbCriteria();
$criteria->condition = 'korisnickoIme=:korisnickoIme';
$criteria->params = array(':korisnickoIme'=>$_GET['id']); 
*/
$criteria = new CDbCriteria();
$criteria->condition = 'korisnickoIme=:korisnickoIme';
$criteria->params = array(':korisnickoIme'=>$_GET['id']); 
                switch($_GET['model'])
                {
                        // Find respective model    


                        case 'kategorije':
                                $model = Kategorija::model()->findByPk($_GET['id']);
                                break;
                        case 'komentari':
                                $model = Komentar::model()->findByPk($_GET['id']);
                                break;
                        case 'korisnici':
                               	$model = Korisnik::model()->findByPk($_GET['id']);
                                break;
                        case 'log':
                                $model = Log::model()->findByPk($_GET['id']);
                                break;
                        case 'objekti':
                                $model = Objekat::model()->findByPk($_GET['id']);
                                break;
                        case 'ocjene':
                                $model = Ocjena::model()->findByPk($_GET['id']);
                                break;
                        case 'privatneporuke':
                                $model = PrivatnaPoruka::model()->findByPk($_GET['id']);
                                break;
                        case 'recenzije':
                                $model = Recenzija::model()->findByPk($_GET['id']);
                                break;
                        case 'korisnik':
                                $model = Korisnik::model()->find($criteria);
                                break;
                        default:
                                $this->_sendResponse(501, sprintf(
                                        'Mode <b>view</b> is not implemented for model <b>%s</b>',
                                        $_GET['model']) );
                                Yii::app()->end();
                }
                // Did we find the requested model? If not, raise an error
                if(is_null($model))
                        $this->_sendResponse(404, 'No Item found with id '.$_GET['id']);
                else
                        $this->_sendResponse(200, CJSON::encode($model));
    }
    public function actionCreate()
    {
				$json = file_get_contents('php://input'); //$GLOBALS['HTTP_RAW_POST_DATA'] is not preferred: http://www.php.net/manual/en/ini.core.php#ini.always-populate-raw-post-data
				$put_vars = CJSON::decode($json,true);  //true means use associative array
                switch($_GET['model'])
                {
                        // Get an instance of the respective model
                        case 'kategorije':
                                $model = new Kategorija;                    
                                break;
                        case 'komentari':
                                $model = new Komentar;                    
                                break;
                        case 'korisnici':
                                $model = new Korisnik();                    
                                break;
                        case 'log':
                                $model = new Log;                    
                                break;
                        case 'objekti':
                                $model = new Objekat();                    
                                break;
                        case 'ocjene':
                                $model = new Ocjena;                    
                                break;
                        case 'privatneporuke':
                                $model = new PrivatnaPoruka();                    
                                break;
                        case 'recenzije':
                                $model = new Recenzija;                    
                                break;
                        default:
                                $this->_sendResponse(501,
                                        sprintf('Mode <b>create</b> is not implemented for model <b>%s</b>',
                                        $_GET['model']) );
                                        Yii::app()->end();
                }
    foreach($put_vars as $var=>$value) {
        // Does model have this attribute? If not, raise an error
        if($model->hasAttribute($var)) {

            if($var=='sifra')

            $model->$var=md5($value);
        else {
            $model->$var = $value; 
        }}
        else {
            $this->_sendResponse(500,
                sprintf('Parameter <b>%s</b> is not allowed for model <b>%s</b>',
                $var, $_GET['model']) );
        }
    }				
				/*
                // Try to assign POST values to attributes
                foreach($_POST as $var=>$value) {
                        // Does the model have this attribute? If not raise an error
                        if($model->hasAttribute($var))
                                $model->$var = $value;
                        else
                                $this->_sendResponse(500,
                                        sprintf('Parameter <b>%s</b> is not allowed for model <b>%s</b>', $var,
                                        $_GET['model']) );
                }
				*/
                // Try to save the model
                if($model->save())
                        $this->_sendResponse(200, CJSON::encode($model));
                else {
                        // Errors occurred
                        $msg = "<h1>Error</h1>";
                        $msg .= sprintf("Couldn't create model <b>%s</b>", $_GET['model']);
                        $msg .= "<ul>";
                        foreach($model->errors as $attribute=>$attr_errors) {
                                $msg .= "<li>Attribute: $attribute</li>";
                                $msg .= "<ul>";
                                foreach($attr_errors as $attr_error)
                                        $msg .= "<li>$attr_error</li>";
                                $msg .= "</ul>";
                        }
                        $msg .= "</ul>";
                        $this->_sendResponse(500, $msg );
                }
    }

    
    
  public function actionActivate()
{
$criteria = new CDbCriteria();
$criteria->condition = 'email=:email';
$criteria->params = array(':email'=>$_GET['email']); 
 $user = Korisnik::model()->find($criteria);    
    
        
        $from = 'Activation email <admin@yoursite.com>';
        $to = $_GET['email'];
        $name = $user->korisnickoIme;
        $subject = 'Activation email';
        $activation_url=Yii::app()->createAbsoluteUrl('api/checkforupdate', array('idKorisnik' => $user->idKorisnik));
       
        $message = Yii::t('user', 'Dear').' '.$user->korisnickoIme.',
'.Yii::t('user', 'A request has been made to activate your account.').'
'.Yii::t('user', 'Your activation link is').': '.$activation_url.'
'; // Our message above

        $headers = 'From: '.$from."\r\n"; // Set from headers
        $this->sendmail($to, $subject, $message, $headers); // Send our email

}  
    
    
    
public function actionReset()
{
$criteria = new CDbCriteria();
$criteria->condition = 'email=:email';
$criteria->params = array(':email'=>$_GET['email']); 
 $user = Korisnik::model()->find($criteria);    
    /*            switch($_GET['model'])
                {
                        // Get an instance of the respective model
                        case 'password':
                                      $user = Korisnik::model()->find($criteria);             
                                break;
                        case 'log':                 
                                break;

                        default:
                                $this->_sendResponse(501,
                                        sprintf('Mode <b>reset</b> is not implemented for model <b>%s</b>',
                                        $_GET['model']) );
                                        Yii::app()->end();
                }

     $user = User::model()->findAll('email=:email',
                array('email'=>$email);

    if(count($user) != 1) {
        Yii::app()->user->setFlash('user',
            Yii::t('messages', 'Unable to find user.'));
        );
        $this->refresh();
    }
    else {
        $user = $user[0];*/
        $user->sifra = $this->randomPassword();
        
    // Send new password to email
        $from = 'Password Reset <admin@yoursite.com>';
        $to = $_GET['email'];
        $name = $user->korisnickoIme;
        $subject = 'Reset Password';

        $message = Yii::t('user', 'Dear').' '.$user->korisnickoIme.',
'.Yii::t('user', 'A request has been made to reset your password.').'
'.Yii::t('user', 'Your new password is').': '.$user->sifra.'
'; // Our message above

        $headers = 'From: '.$from."\r\n"; // Set from headers
        $this->sendmail($to, $subject, $message, $headers); // Send our email
        $user->sifra=md5($user->sifra);
        $user->update();
/*
    
        Yii::app()->user->setFlash('user',
            Yii::t('notices', 'A new password has been sent to your email address.')
        );
        $this->refresh();
    }

    $this->layout = '//layouts/main';
    $this->render('resetpassword');*/
}

public function actionCheckforupdate(){
    
 $id = Yii::app()->request->getQuery('idKorisnik');
            
                // collect user input data
                if(isset($id))
                {
                  
              $model = Korisnik::model()->find('idKorisnik=:idKorisnik', array(':idKorisnik'=>$id));   
             
            $criteria = new CDbCriteria();
            $criteria->condition = 'idKorisnik=:idKorisnik';
            $criteria->params = array(':idKorisnik'=>$id); 
             $model = Korisnik::model()->find($criteria);   
 
              if($id== $model->idKorisnik){            
                $model->aktivan=1;
                $model->update();
                echo "<script type='text/javascript'>alert('Your account has successfully been activated!')</script>";
                $this->redirect('http://localhost/NWT2015Tim14/app/index.html#/login');
              }
              
                        
                }
      
                
}
public function actionUpdate()
{
    // Parse the PUT parameters. This didn't work: parse_str(file_get_contents('php://input'), $put_vars);
    $json = file_get_contents('php://input'); //$GLOBALS['HTTP_RAW_POST_DATA'] is not preferred: http://www.php.net/manual/en/ini.core.php#ini.always-populate-raw-post-data
    $put_vars = CJSON::decode($json,true);  //true means use associative array
 
    switch($_GET['model'])
    {
        // Find respective model
       
                case 'kategorije':
                                $model = Kategorija::model()->findByPk($_GET['id']);
                                break;
                        case 'komentari':
                                $model = Komentar::model()->findByPk($_GET['id']);
                                break;
                        case 'korisnici':
                                $model = Korisnik::model()->findByPk($_GET['id']);
                                break;
                        case 'log':
                                $model = Log::model()->findByPk($_GET['id']);
                                break;
                        case 'objekti':
                                $model = Objekat::model()->findByPk($_GET['id']);
                                break;
                        case 'ocjene':
                                $model = Ocjena::model()->findByPk($_GET['id']);
                                break;
                        case 'privatneporuke':
                                $model = PrivatnaPoruka::model()->findByPk($_GET['id']);
                                break;
                        case 'recenzije':
                                $model = Recenzija::model()->findByPk($_GET['id']);
                                break;
        default:
            $this->_sendResponse(501,
                sprintf( 'Error: Mode <b>update</b> is not implemented for model <b>%s</b>',
                $_GET['model']) );
            Yii::app()->end();
    }
    // Did we find the requested model? If not, raise an error
    if($model === null)
        $this->_sendResponse(400,
                sprintf("Error: Didn't find any model <b>%s</b> with ID <b>%s</b>.",
                $_GET['model'], $_GET['id']) );
 
    // Try to assign PUT parameters to attributes
    foreach($put_vars as $var=>$value) {
        // Does model have this attribute? If not, raise an error
        if($model->hasAttribute($var)) {
       
            $model->$var = $value; 
   
    }
        else {
            $this->_sendResponse(500,
                sprintf('Parameter <b>%s</b> is not allowed for model <b>%s</b>',
                $var, $_GET['model']) );
        }
    }
    // Try to save the model
    if($model->save())
        $this->_sendResponse(200, CJSON::encode($model));
    else
        // prepare the error $msg
        // see actionCreate
        // ...
        $this->_sendResponse(500, $msg );
}
public function actionDelete()
{
    switch($_GET['model'])
    {
        // Load the respective model
                        case 'kategorije':
                                $model = Kategorija::model()->findByPk($_GET['id']);
                                break;
                        case 'komentari':
                                $model = Komentar::model()->findByPk($_GET['id']);
                                break;
                        case 'korisnici':
                                $model = Korisnik::model()->findByPk($_GET['id']);
                                break;
                        case 'log':
                                $model = Log::model()->findByPk($_GET['id']);
                                break;
                        case 'objekti':
                                $model = Objekat::model()->findByPk($_GET['id']);
                                break;
                        case 'ocjene':
                                $model = Ocjena::model()->findByPk($_GET['id']);
                                break;
                        case 'privatneporuke':
                                $model = PrivatnaPoruka::model()->findByPk($_GET['id']);
                                break;
                        case 'recenzije':
                                $model = Recenzija::model()->findByPk($_GET['id']);
                                break;
        default:
            $this->_sendResponse(501,
                sprintf('Error: Mode <b>delete</b> is not implemented for model <b>%s</b>',
                $_GET['model']) );
            Yii::app()->end();
    }
    // Was a model found? If not, raise an error
    if($model === null)
        $this->_sendResponse(400,
                sprintf("Error: Didn't find any model <b>%s</b> with ID <b>%s</b>.",
                $_GET['model'], $_GET['id']) );
 
    // Delete the model
    $num = $model->delete();
    if($num>0)
        $this->_sendResponse(200, $num);    //this is the only way to work with backbone
    else
        $this->_sendResponse(500,
                sprintf("Error: Couldn't delete model <b>%s</b> with ID <b>%s</b>.",
                $_GET['model'], $_GET['id']) );
}
 
//funkcije
 
private function _sendResponse($status = 200, $body = '', $content_type = 'text/html')
{
    // set the status
    $status_header = 'HTTP/1.1 ' . $status . ' ' . $this->_getStatusCodeMessage($status);
    header($status_header);
    // and the content type
    header('Content-type: ' . $content_type);
 
    // pages with body are easy
    if($body != '')
    {
        // send the body
        echo $body;
    }
    // we need to create the body if none is passed
    else
    {
        // create some body messages
        $message = '';
 
        // this is purely optional, but makes the pages a little nicer to read
        // for your users.  Since you won't likely send a lot of different status codes,
        // this also shouldn't be too ponderous to maintain
        switch($status)
        {
            case 401:
                $message = 'You must be authorized to view this page.';
                break;
            case 404:
                $message = 'The requested URL ' . $_SERVER['REQUEST_URI'] . ' was not found.';
                break;
            case 500:
                $message = 'The server encountered an error processing your request.';
                break;
            case 501:
                $message = 'The requested method is not implemented.';
                break;
        }
 
        // servers don't always have a signature turned on
        // (this is an apache directive "ServerSignature On")
        $signature = ($_SERVER['SERVER_SIGNATURE'] == '') ? $_SERVER['SERVER_SOFTWARE'] . ' Server at ' . $_SERVER['SERVER_NAME'] . ' Port ' . $_SERVER['SERVER_PORT'] : $_SERVER['SERVER_SIGNATURE'];
 
        // this should be templated in a real-world solution
        $body = '
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>' . $status . ' ' . $this->_getStatusCodeMessage($status) . '</title>
</head>
<body>
    <h1>' . $this->_getStatusCodeMessage($status) . '</h1>
    <p>' . $message . '</p>
    <hr />
    <address>' . $signature . '</address>
</body>
</html>';
 
        echo $body;
    }
    Yii::app()->end();
}

private function randomPassword() {
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass); //turn the array into a string
}

  function sendmail($to,$subject,$message,$name)
    {
      require_once('class.phpmailer.php');
require_once('class.smtp.php');
                   
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

private function _getStatusCodeMessage($status)
{
    // these could be stored in a .ini file and loaded
    // via parse_ini_file()... however, this will suffice
    // for an example
    $codes = Array(
        200 => 'OK',
        400 => 'Bad Request',
        401 => 'Unauthorized',
        402 => 'Payment Required',
        403 => 'Forbidden',
        404 => 'Not Found',
        500 => 'Internal Server Error',
        501 => 'Not Implemented',
    );
    return (isset($codes[$status])) ? $codes[$status] : '';
}
 
// funkcija za autorizaciju korisnika ako je potrebno
 
/*
private function _checkAuth()
{
    // Check if we have the USERNAME and PASSWORD HTTP headers set?
    if(!(isset($_SERVER['HTTP_X_USERNAME']) and isset($_SERVER['HTTP_X_PASSWORD']))) {
        // Error: Unauthorized
        $this->_sendResponse(401);
    }
    $username = $_SERVER['HTTP_X_USERNAME'];
    $password = $_SERVER['HTTP_X_PASSWORD'];
    // Find the user
    $user=User::model()->find('LOWER(username)=?',array(strtolower($username)));
    if($user===null) {
        // Error: Unauthorized
        $this->_sendResponse(401, 'Error: User Name is invalid');
    } else if(!$user->validatePassword($password)) {
        // Error: Unauthorized
        $this->_sendResponse(401, 'Error: User Password is invalid');
    }
}
 
*/
 
}
?>