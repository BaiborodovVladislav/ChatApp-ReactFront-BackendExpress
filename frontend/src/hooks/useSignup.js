import { useState } from "react"; // Импортируем useState из React
import toast from "react-hot-toast"; // Импортируем toast для показа уведомлений
import { useAuthContext } from "../context/AuthContext"; // Импортируем useAuthContext для работы с контекстом аутентификации

// Создаем кастомный хук useSignup
const useSignup = () => {
	const [loading, setLoading] = useState(false); // Создаем состояние loading, которое показывает, загружается ли что-то
	const { setAuth } = useAuthContext(); // Получаем функцию setAuth из контекста аутентификации

	// Функция signup, которая будет выполняться при регистрации пользователя
	const signup = async ({ fullName, userName, email, password, confirmPassword, gender }) => {
		// Проверяем правильность введенных данных
		const successError = handleInputError({ fullName, userName, email, password, confirmPassword, gender });

		if (!successError) return; // Если данные неверные, выходим из функции
		setLoading(true); // Устанавливаем состояние загрузки в true

		try {
			// Отправляем запрос на сервер для регистрации
			const res = await fetch("/api/auth/signup", {
				method: "POST", // Метод запроса - POST
				headers: {
					"Content-Type": "application/json", // Устанавливаем заголовок, что данные будут в формате JSON
				},
				body: JSON.stringify({ fullName, userName, email, password, confirmPassword, gender }), // Преобразуем данные в JSON строку
			});

			const data = await res.json(); // Получаем ответ от сервера и преобразуем его в объект

			if (res.ok) { // Если регистрация успешна
				toast.success(data.message); // Показываем сообщение об успехе
				localStorage.setItem("chat-user", JSON.stringify(data)); // Сохраняем данные пользователя в локальное хранилище
				setAuth(data); // Устанавливаем данные пользователя в контексте аутентификации
			} else {
				toast.error(data.message || "Registration failed"); // Если ошибка, показываем сообщение об ошибке
			}
		} catch (error) {
			toast.error(error.message); // Если ошибка в процессе запроса, показываем сообщение об ошибке
		} finally {
			setLoading(false); // Устанавливаем состояние загрузки в false
		}
	};

	return { signup, loading }; // Возвращаем функцию signup и состояние loading
};

export default useSignup; // Экспортируем наш хук

// Функция для проверки правильности введенных данных
function handleInputError({ fullName, userName, email, password, confirmPassword, gender }) {
	if (!fullName || !userName || !email || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields."); // Если какие-то поля пустые, показываем ошибку
		return false; // Возвращаем false, так как данные неверные
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match."); // Если пароли не совпадают, показываем ошибку
		return false; // Возвращаем false, так как данные неверные
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters."); // Если пароль меньше 6 символов, показываем ошибку
		return false; // Возвращаем false, так как данные неверные
	}

	return true; // Если все данные верные, возвращаем true
}
