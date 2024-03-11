<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $phone = isset($_POST["phone"]) ? strip_tags($_POST["phone"]) : "";
    $email = isset($_POST["email"]) ? strip_tags($_POST["email"]) : "";
    $thema = isset($_POST["thema"]) ? strip_tags($_POST["thema"]) : "";

    if (preg_match("/<script>|<\/script>/i", $name)) {
        echo "Пожалуйста, введите корректное имя.";
        exit();
    }

    // Проверка на пустые значения
    if (empty($name) || empty($phone)) {
        echo "Пожалуйста, заполните все поля формы.";
        exit();
    }

    $to = "w1nishko@yandex.ru";
    $subject = "Заявка с сайта | 1.fr-express.ru";
    $message = "Имя: $name\nТелефон: $phone\nТема: $thema\nПочта: $email";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>window.location = 'spasibo.html';</script>";
        exit();
    } else {
        echo "Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз позже.";
    }
} else {
    echo "Ошибка: Недопустимый метод запроса.";
}
?>