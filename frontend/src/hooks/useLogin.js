import { useState } from 'react'; // Импортируем useState из React
import toast from 'react-hot-toast'; // Импортируем toast для показа уведомлений
import { useAuthContext } from '../context/AuthContext'; // Импортируем useAuthContext для работы с контекстом аутентификации

// Создаем кастомный хук useLogin
const useLogin = () => {
	const [loading, setLoading] = useState(false); // Создаем состояние loading, которое показывает, загружается ли что-то
	const { setAuth } = useAuthContext(); // Получаем функцию setAuth из контекста аутентификации

	// Функция login, которая будет выполняться при входе пользователя в систему
	const login = async ({ userName, password }) => {
		const successError = handleInputError({ userName, password }); // Проверяем правильность введенных данных

		if (!successError) return; // Если данные неверные, выходим из функции

		setLoading(true); // Устанавливаем состояние загрузки в true
		try {
			// Отправляем запрос на сервер для входа в систему
			const res = await fetch("/api/auth/login", {
				method: "POST", // Метод запроса - POST
				headers: {
					"Content-Type": "application/json", // Устанавливаем заголовок, что данные будут в формате JSON
				},
				body: JSON.stringify({ userName, password }), // Преобразуем данные в JSON строку
			});
			const data = await res.json(); // Получаем ответ от сервера и преобразуем его в объект

			if (data.error) { // Если сервер вернул ошибку
				throw new Error(data.error); // Выбрасываем ошибку
			}

			localStorage.setItem("chat-user", JSON.stringify(data)); // Сохраняем данные пользователя в локальное хранилище
			setAuth(data); // Устанавливаем данные пользователя в контексте аутентификации
		} catch (error) {
			toast.error(error.message); // Если ошибка в процессе запроса, показываем сообщение об ошибке
		} finally {
			setLoading(false); // Устанавливаем состояние загрузки в false
		}
	};

	return { login, loading }; // Возвращаем функцию login и состояние loading
};

export default useLogin; // Экспортируем наш хук

// Функция для проверки правильности введенных данных
function handleInputError({ userName, password }) {
	if (!userName || !password) { // Проверяем, заполнены ли все поля
		toast.error("Please fill in all fields."); // Если какие-то поля пустые, показываем ошибку
		return false; // Возвращаем false, так как данные неверные
	}
	return true; // Если все данные верные, возвращаем true
}
