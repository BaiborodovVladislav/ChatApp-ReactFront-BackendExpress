// Импортируем нужные функции и компоненты
import { useState } from "react"; // Используем useState, чтобы хранить данные
import { Link } from "react-router-dom"; // Используем Link, чтобы создать ссылку для перехода на другую страницу
import useSignup from "../../hooks/useSignup"; // Используем пользовательский хук для регистрации
import GenderCheckbox from "./GenderCheckbox"; // Импортируем компонент для выбора пола

// Создаем компонент Signup
const Signup = () => {
	// Определяем состояния для каждого поля формы
	const [fullName, setFullName] = useState(""); // Полное имя
	const [userName, setUserName] = useState(""); // Имя пользователя
	const [email, setEmail] = useState(""); // Электронная почта
	const [password, setPassword] = useState(""); // Пароль
	const [confirmPassword, setConfirmPassword] = useState(""); // Подтверждение пароля
	const [gender, setGender] = useState(""); // Пол

	const { signup, loading } = useSignup(); // Получаем функцию signup и статус загрузки

	// Функция для отправки формы
	const handleSubmit = async (e) => {
		e.preventDefault(); // Предотвращаем перезагрузку страницы
		await signup({ fullName, userName, email, password, confirmPassword, gender }); // Отправляем данные для регистрации
	};

	// Функция для изменения пола
	const handleGenderChange = (selectedGender) => {
		setGender(selectedGender); // Устанавливаем выбранный пол
	};

	// Возвращаем разметку для отображения формы регистрации
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto py-8'>
			<div className='w-96 p-6 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Signup
					<span className="text-blue-500"> ChatApp</span> {/* Заголовок */}
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4"> {/* Форма */}
					<div>
						<label className="label">
							<span className="text-base label-text text-gray-200">Full Name</span> {/* Метка для полного имени */}
						</label>
						<input
							type="text"
							placeholder="Enter full name"
							className="bg-green-200 w-full input input-bordered"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)} // Изменение значения полного имени
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text text-gray-200">Username</span> {/* Метка для имени пользователя */}
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="bg-green-200 w-full input input-bordered"
							value={userName}
							onChange={(e) => setUserName(e.target.value)} // Изменение значения имени пользователя
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text text-gray-200">Email</span> {/* Метка для электронной почты */}
						</label>
						<input
							type="email"
							placeholder="Enter email"
							className="bg-green-200 w-full input input-bordered"
							value={email}
							onChange={(e) => setEmail(e.target.value)} // Изменение значения электронной почты
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text text-gray-200">Password</span> {/* Метка для пароля */}
						</label>
						<input
							type="password"
							placeholder="Enter password"
							className="bg-green-200 w-full input input-bordered"
							value={password}
							onChange={(e) => setPassword(e.target.value)} // Изменение значения пароля
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text text-gray-200">Confirm Password</span> {/* Метка для подтверждения пароля */}
						</label>
						<input
							type="password"
							placeholder="Confirm password"
							className="bg-green-200 w-full input input-bordered"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)} // Изменение значения подтверждения пароля
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text text-gray-200"></span>
						</label>
						<GenderCheckbox handleCheckboxSubmit={handleGenderChange} selected={gender} /> {/* Компонент для выбора пола */}
					</div>
					<Link to="/login" className="text-sm text-gray-300 hover:text-blue-600 hover:underline mt-2 inline-block">
						Already have an account?
					</Link> {/* Ссылка на страницу входа */}

					<button className="btn btn-primary w-full mt-4" disabled={loading}>Signup</button> {/* Кнопка регистрации */}
				</form>
			</div>
		</div>
	);
};

export default Signup; // Экспортируем компонент Signup
