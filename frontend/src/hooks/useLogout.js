import { useState } from 'react'; // Импортируем useState из React
import { useAuthContext } from '../context/AuthContext'; // Импортируем useAuthContext для работы с контекстом аутентификации
import { toast } from 'react-hot-toast'; // Импортируем toast для показа уведомлений

// Создаем кастомный хук useLogout
const useLogout = () => {
	const [loading, setLoading] = useState(false); // Создаем состояние loading, которое показывает, загружается ли что-то

	const { setAuth } = useAuthContext(); // Получаем функцию setAuth из контекста аутентификации

	// Функция logout, которая будет выполняться при выходе пользователя из системы
	const logout = async () => {
		setLoading(true); // Устанавливаем состояние загрузки в true

		try {
			// Отправляем запрос на сервер для выхода из системы
			const res = await fetch("/api/auth/logout", {
				method: "POST", // Метод запроса - POST
				headers: {
					"Content-Type": "application/json", // Устанавливаем заголовок, что данные будут в формате JSON
				}
			});

			const data = await res.json(); // Получаем ответ от сервера и преобразуем его в объект

			if (data.error) { // Если сервер вернул ошибку
				throw new Error(data.error); // Выбрасываем ошибку
			}

			localStorage.removeItem("chat-user"); // Удаляем данные пользователя из локального хранилища
			setAuth(null); // Устанавливаем данные пользователя в контексте аутентификации как null (то есть пользователь не авторизован)
		} catch (error) {
			toast.error(error.message); // Если ошибка в процессе запроса, показываем сообщение об ошибке
		} finally {
			setLoading(false); // Устанавливаем состояние загрузки в false
		}
	};

	return { logout, loading }; // Возвращаем функцию logout и состояние loading
};

export default useLogout; // Экспортируем наш хук
