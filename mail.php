<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name      = filter_var($_POST["user-name"], FILTER_SANITIZE_STRING);
	$email = filter_var($_POST["user-email"], FILTER_SANITIZE_EMAIL);
	$phone = filter_var($_POST["user-phone"], FILTER_SANITIZE_STRING);
	$errors; 

	// В PHP добавить лишь проверку на пустоту
	if (empty($name)) {
		$errors = "Ошибка имени";
	} else {
		$user_name = $name;
	}
	if (empty($email)) {
		$errors = "Ошибка почты";
	} else {
		$user_email = $email;
	}
	if (empty($phone)) {
		$errors = "Ошибка телефона";
	} else {
		$user_phone = $phone;
	}

	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже

	$to = "<shpeeck@gmail.com>";
	$mailBody = "Сообщение с сайта\n";
	$mailBody .= "Поле имя: " . $user_name . "\n";
	$mailBody .= "Поле почта: " . $user_email . "\n";
	$mailBody .= "Поле телефон: " . $user_phone . "\n";

	// и так столько, сколько нужно

	// Это отправка. Это не трогаем
	if (mail($to, 'Сообщение с сайта', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>