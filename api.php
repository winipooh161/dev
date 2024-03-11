<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Принимаем данные от index.php
    $user_message = $_POST['user_message'];

    // Отправляем запрос к main.php с пользовательским сообщением
    $assistant_response = exec('python3 main.py ' . escapeshellarg($user_message));

    // Проверяем, получен ли ответ от ассистента
    if ($assistant_response !== false) {
        // Формируем ответ в формате JSON
        $response = array(
            'assistant_response' => $assistant_response
        );
    } else {
        // Если ответ от ассистента пустой или возникла ошибка, возвращаем сообщение об ошибке
        $response = array(
            'error' => 'Ошибка при получении ответа от ассистента'
        );
    }

    // Отправляем ответ обратно в index.php
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // В случае GET-запроса можно написать код, который вернет сообщение о недопустимом методе
    echo "Метод не разрешен";
}
?>
