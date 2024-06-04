import Login from './pages/Login/Login'; // Импортируем компонент для страницы входа
import Signup from './pages/Signup/Signup'; // Импортируем компонент для страницы регистрации
import './App.css'; // Импортируем стили для нашего приложения
import Home from './pages/home/Home'; // Импортируем компонент для домашней страницы
import { Routes, Route, Navigate } from 'react-router-dom'; // Импортируем нужные штуки для навигации по страницам
import { Toaster } from 'react-hot-toast'; // Импортируем компонент для всплывающих уведомлений
import { useAuthContext } from './context/AuthContext'; // Импортируем контекст авторизации

const App = () => {
	const { auth } = useAuthContext(); // Получаем информацию о том, авторизован ли пользователь

	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			{/* Это контейнер для нашего приложения */}
			<Routes>
				{/* Здесь указываем все маршруты нашего приложения */}
				<Route path='/' element={auth ? <Home /> : <Navigate to={"/login"} />} />
				{/* Если пользователь авторизован, он попадет на домашнюю страницу, 
				иначе его перенаправят на страницу входа */}
				<Route path='/login' element={auth ? <Navigate to="/" /> : <Login />} />
				{/* Если пользователь авторизован, его перенаправят на домашнюю страницу, 
				иначе он попадет на страницу входа */}
				<Route path='/signup' element={auth ? <Navigate to="/" /> : <Signup />} />
				{/* Если пользователь авторизован, его перенаправят на домашнюю страницу, 
				иначе он попадет на страницу регистрации */}
			</Routes>
			<Toaster />
			{/* Компонент для отображения всплывающих уведомлений */}
		</div>
	);
};

export default App; // Экспортируем наш компонент App, чтобы его можно было использовать в других частях приложения
