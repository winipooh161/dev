<?php
$body = iconv("UTF-8",$body);
header('Refresh: 0; url=spasibo.html');
header('Content-type: text/html; charset=utf-8');//В самом начале файла
$name  = $_POST['name'];
$thema = $_POST['thema'];
$phone = $_POST['phone'];

$name  = htmlspecialchars($name);
$thema = htmlspecialchars($thema);
$phone = htmlspecialchars($phone);

$name  = urldecode($name);
$thema = urldecode($thema);
$phone = urldecode($phone);
$name  = trim($name);
$thema = trim($thema);
$phone = trim($phone);
//echo $fio;
//echo "<br>";
//echo $email;
//"zayvki@express-diz.ru"
if (mail("zayvki@express-diz.ru", "Заявка с сайта-квиза | 1.fr-express.ru", "\nИмя: " . $name . "\nТема: " . $thema . "\nНомер: " . $phone, "From: fr-express.ru\r\n")) {
    echo "Заявка отправлена, переадресовка..";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>