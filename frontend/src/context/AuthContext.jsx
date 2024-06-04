import { createContext, useState, useContext } from "react"; // Импортируем необходимые функции из React

// Создаем контекст для аутентификации
export const AuthContext = createContext();

// Создаем кастомный хук для использования контекста аутентификации
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext); // Возвращаем значение контекста аутентификации
};

// Компонент-провайдер для контекста аутентификации
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	// Создаем состояние auth, которое хранит данные пользователя
	const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	return (
		// Оборачиваем дочерние компоненты в провайдер контекста аутентификации
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
