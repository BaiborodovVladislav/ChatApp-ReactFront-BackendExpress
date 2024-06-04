// Импортируем необходимые библиотеки и файлы
import React from 'react'; // Импортируем React, чтобы использовать его возможности
import ReactDOM from 'react-dom/client'; // Импортируем ReactDOM для работы с деревом компонентов в браузере
import App from './App.jsx'; // Импортируем главный компонент нашего приложения
import './index.css'; // Импортируем файл стилей, чтобы наше приложение выглядело красиво
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter для работы с маршрутизацией
import { AuthProvider } from './context/AuthContext'; // Импортируем AuthProvider для управления авторизацией
import { SocketContextProvider } from './context/socketContext.jsx';

// Создаем корневой элемент React и рендерим наше приложение
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode> {/* Включаем строгий режим React для выявления ошибок */}
		<BrowserRouter> {/* Оборачиваем приложение в BrowserRouter для работы с маршрутизацией */}
			<AuthProvider>
				<SocketContextProvider> {/* Оборачиваем приложение в AuthProvider для управления авторизацией */}
					<App /> {/* Рендерим главный компонент нашего приложения */}
				</SocketContextProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
