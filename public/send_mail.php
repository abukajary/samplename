<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        echo json_encode(["status" => "error", "message" => "Пустые данные"]);
        exit;
    }

    $firstName = htmlspecialchars(strip_tags($data['firstName'] ?? ''));
    $lastName = htmlspecialchars(strip_tags($data['lastName'] ?? ''));
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $jobTitle = htmlspecialchars(strip_tags($data['jobTitle'] ?? '-'));
    $company = htmlspecialchars(strip_tags($data['company'] ?? ''));
    $city = htmlspecialchars(strip_tags($data['city'] ?? ''));
    $message = htmlspecialchars(strip_tags($data['message'] ?? ''));

    if (empty($firstName) || empty($lastName) || empty($email) || empty($company)) {
        echo json_encode(["status" => "error", "message" => "Заполните обязательные поля"]);
        exit;
    }

    $to = "info@pulsemedia.kz"; 
    $subject = "Новая заявка: $firstName $lastName";
    
    // Кодируем заголовок для корректного отображения кириллицы в iOS/Gmail
    $encodedSubject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
    
    $emailBody = "
    <html>
    <head>
        <title>Новая заявка с сайта</title>
    </head>
    <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #111;'>
        <div style='background-color: #ffffff; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05);'>
            <h2 style='color: #45CC82; margin-top: 0; text-transform: uppercase;'>Новая заявка</h2>
            <hr style='border: none; border-top: 1px solid #eee; margin: 20px 0;'>
            
            <p style='margin: 10px 0;'><strong style='color: #888;'>Имя:</strong> <span style='font-size: 16px;'>$firstName $lastName</span></p>
            <p style='margin: 10px 0;'><strong style='color: #888;'>Email:</strong> <span style='font-size: 16px;'><a href='mailto:$email' style='color: #111; text-decoration: none;'>$email</a></span></p>
            <p style='margin: 10px 0;'><strong style='color: #888;'>Должность:</strong> <span style='font-size: 16px;'>$jobTitle</span></p>
            <p style='margin: 10px 0;'><strong style='color: #888;'>Компания:</strong> <span style='font-size: 16px;'>$company</span></p>
            <p style='margin: 10px 0;'><strong style='color: #888;'>Город:</strong> <span style='font-size: 16px;'>$city</span></p>
            
            <p style='margin: 20px 0 5px;'><strong style='color: #888;'>Комментарий:</strong></p>
            <div style='background-color: #f9f9f9; padding: 15px; border-radius: 4px; font-size: 15px; line-height: 1.5;'>" 
            . nl2br($message) . 
            "</div>
        </div>
    </body>
    </html>
    ";

    $headers = "From: noreply@pulsemedia.kz\r\n"; 
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Используем encodedSubject вместо обычного subject
    if (mail($to, $encodedSubject, $emailBody, $headers)) {
        echo json_encode(["status" => "success", "message" => "Письмо успешно отправлено"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Ошибка отправки письма на сервере"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Неверный метод запроса"]);
}
?>