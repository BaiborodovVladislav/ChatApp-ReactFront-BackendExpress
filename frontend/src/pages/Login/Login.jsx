import { Link } from "react-router-dom"; // Импортируем компонент Link из библиотеки react-router-dom для навигации
import { useState } from "react"; // Импортируем хук useState для управления состоянием
import useLogin from "../../hooks/useLogin"; // Импортируем наш кастомный хук для логина

const Login = () => {
	const [username, setUsername] = useState(""); // Создаем состояние для хранения имени пользователя
	const [password, setPassword] = useState(""); // Создаем состояние для хранения пароля

	const { loading, login } = useLogin(); // Используем наш кастомный хук, чтобы получить функцию логина и состояние загрузки

	const handleSubmit = async (e) => { // Эта функция сработает, когда пользователь отправит форму
		e.preventDefault(); // Предотвращаем перезагрузку страницы
		await login({ userName: username, password }); // Вызываем функцию логина с введенными пользователем данными
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			{/* Основной контейнер для централизованного расположения содержимого */}
			<div className='w-96 p-6 h-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100'>
				{/* Внутренний контейнер с фоном и стилями */}
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className="text-blue-500"> ChatApp</span>
				</h1>
				{/* Заголовок страницы логина */}

				<form onSubmit={handleSubmit}>
					{/* Форма логина */}
					<div className="mt-4">
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Username</span>
						</label>
						<input type="text" placeholder="Enter username" className="bg-green-200 w-full input input-bordered h-10 m-2"
							value={username} // Значение поля равно состоянию username
							onChange={(e) => setUsername(e.target.value)} // Обновляем состояние при изменении поля
						/>
					</div>
					<div>
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Password</span>
						</label>
						<input type="password" placeholder="Enter password" className="bg-green-200 w-full input input-bordered h-10 m-2"
							value={password} // Значение поля равно состоянию password
							onChange={(e) => setPassword(e.target.value)} // Обновляем состояние при изменении поля
						/>
					</div>
					<Link to="/signup" className="text-sm text-gray-300 hover:text-blue-600 hover:underline mt-2 inline-block">
						{"Don't"} have an account?
					</Link>
					{/* Ссылка для перехода на страницу регистрации */}

					<button className="btn btn-primary w-full mt-4" disabled={loading}>Login</button>
					{/* Кнопка для отправки формы, отключена во время загрузки */}
				</form>
			</div>
		</div>
	);
};

export default Login; // Экспортируем компонент для использования в других частях приложения
