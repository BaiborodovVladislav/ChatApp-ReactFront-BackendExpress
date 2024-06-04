// Импортируем модель пользователя из файла user.model.js
import User from "../models/user.model.js";

// Импортируем библиотеку bcrypt для шифрования паролей
import bcrypt from "bcrypt";

// Импортируем функцию для генерации токенов
import generateToken from "../utils/generateToken.js";

// Экспортируем функцию для регистрации нового пользователя
export const signup = async (req, res) => {
	try {
		// Получаем данные пользователя из запроса
		const { fullName, userName, password, confirmPassword, email, gender } = req.body;

		// Проверяем, совпадают ли пароль и подтверждение пароля
		if (password !== confirmPassword) {
			// Если не совпадают, возвращаем ошибку
			return res.status(400).json({ error: "Password and confirm password must be same" });
		}

		// Проверяем, существует ли пользователь с таким именем
		const existingUser = await User.findOne({ userName });

		// Если пользователь уже существует, возвращаем ошибку
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Генерируем соль для шифрования пароля
		const salt = await bcrypt.genSalt(10);
		// Шифруем пароль
		const hashedPassword = await bcrypt.hash(password, salt);

		// Создаем URL для профиля пользователя в зависимости от его пола
		const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

		// Создаем нового пользователя с зашифрованным паролем и URL профиля
		const newUser = new User({
			fullName,
			userName,
			password: hashedPassword,
			email,
			gender,
			profile: gender === "male" ? boyProfile : girlProfile
		});

		// Сохраняем нового пользователя в базе данных
		await newUser.save();
		// Генерируем токен для нового пользователя и отправляем его
		generateToken(newUser._id, res);

		// Возвращаем данные нового пользователя в ответе
		res.status(201).json({
			_id: newUser._id,
			fullName: newUser.fullName,
			userName: newUser.userName,
			email: newUser.email,
			profile: newUser.profile
		});
	} catch (error) {
		// Логируем ошибку и возвращаем её в ответе
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};

// Экспортируем функцию для входа пользователя
export const login = async (req, res) => {
	try {
		// Получаем имя пользователя и пароль из запроса
		const { userName, password } = req.body;
		// Ищем пользователя в базе данных по имени
		const user = await User.findOne({ userName });
		// Проверяем, совпадает ли введённый пароль с паролем в базе данных
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		// Если пользователь не найден или пароль неверный, возвращаем ошибку
		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid credentials" });
		}

		// Генерируем токен для пользователя и отправляем его
		generateToken(user._id, res);

		// Возвращаем данные пользователя в ответе
		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			userName: user.userName,
			email: user.email,
			profile: user.profile
		});
	} catch (error) {
		// Логируем ошибку и возвращаем её в ответе
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};

// Экспортируем функцию для выхода пользователя
export const logout = (req, res) => {
	try {
		// Удаляем токен из куки
		res.cookie("jwt", "", { maxAge: 0 });
		// Возвращаем успешный статус выхода
		res.status(200).json({ status: "success logout ok" });
	} catch (error) {
		// Логируем ошибку и возвращаем её в ответе
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};
