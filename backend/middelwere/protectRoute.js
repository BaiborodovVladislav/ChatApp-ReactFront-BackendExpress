// Импортируем библиотеку для работы с JWT (JSON Web Token)
import jwt from "jsonwebtoken";

// Импортируем модель пользователя
import User from "../models/user.model.js";

// Функция для защиты маршрутов (проверка, что пользователь авторизован)
const protectRoute = async (req, res, next) => {
	try {
		// Получаем токен из кукисов (cookies) запроса
		const token = req.cookies.jwt;

		// Если токена нет, возвращаем ошибку 401 (не авторизован)
		if (!token) {
			return res.status(401).json({ message: "Not token authorized" });
		}

		// Расшифровываем токен с помощью секрета (ключа), хранящегося в переменной окружения
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Если токен не расшифровался, возвращаем ошибку 401 (не авторизован)
		if (!decoded) {
			return res.status(401).json({ message: "Not token invalid" });
		}

		// Находим пользователя по id, который содержится в расшифрованном токене, исключая поле с паролем
		const user = await User.findById(decoded.userId).select("-password");

		// Если пользователь не найден, возвращаем ошибку 401 (пользователь не найден)
		if (!user) {
			return res.status(401).json({ message: "User not found" });
		}

		// Добавляем информацию о пользователе в объект запроса
		req.user = user;

		// Переходим к следующей функции в цепочке middleware
		await next();

	} catch (error) {
		// В случае ошибки возвращаем статус 500 и сообщение об ошибке
		res.status(500).json({ message: error.message });
	}
}

// Экспортируем функцию для использования в других файлах
export default protectRoute;
