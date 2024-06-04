// Импортируем модель User из файла "user.model.js"
import User from "../models/user.model.js";

// Экспортируем функцию getUsersForSidebar, которая будет получать пользователей для боковой панели
export const getUsersForSidebar = async (req, res) => {

	try {
		// Получаем идентификатор пользователя, который сейчас залогинен
		const loggedUsersId = req.user._id;

		// Находим всех пользователей, кроме залогиненного, и убираем их пароли из выборки
		const filterUsers = await User.find({ _id: { $ne: loggedUsersId } }).select("-password");

		// Отправляем найденных пользователей с кодом 200 (ОК) в ответе
		res.status(200).json(filterUsers);

	} catch (error) {
		// Если произошла ошибка, выводим сообщение об ошибке в консоль
		console.log("Error sending sidebar, error.message")
		// Отправляем ответ с кодом 500 (Ошибка сервера) и сообщением об ошибке
		res.status(500).json({ message: error.message })
	}
}
