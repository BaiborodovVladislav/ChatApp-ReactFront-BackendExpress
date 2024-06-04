// Импортируем библиотеку для работы с JWT (JSON Web Tokens)
import jwt from "jsonwebtoken";

// Функция для создания и отправки токена
const generateToken = (userId, res) => {
	// Создаем токен с ID пользователя и секретным ключом
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d", // Токен будет действителен 15 дней
	})

	// Отправляем токен в виде куки
	res.cookie("jwt", token, {
		maxAge: 1000 * 60 * 60 * 24 * 15, // Куки будет действовать 15 дней
		httpOnly: true, // Куки можно использовать только через HTTP (не доступно через JavaScript)
		sameSite: "strict", // Куки будет отправляться только с запросами с того же сайта
		secure: process.env.NODE_ENV === "production", // Куки будет передаваться только по HTTPS, если сайт в продакшене
	})
}

// Экспортируем функцию, чтобы можно было использовать её в других файлах
export default generateToken;
