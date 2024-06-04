// Импортируем нужные библиотеки
import dotenv from 'dotenv'; // Для работы с переменными окружения
import express from 'express'; // Для создания сервера
import authRouter from './routers/auth.router.js'; // Маршрутизатор для авторизации
import connectToMongoDB from './db/connectToMongoDB.js'; // Функция для подключения к базе данных MongoDB
import messagesRouter from './routers/massege.router.js'; // Маршрутизатор для сообщений
import userRoute from './routers/user.router.js'; // Маршрутизатор для пользователей
import cookieParser from 'cookie-parser'; // Для работы с куки
import cors from 'cors'; // Для работы с CORS (Cross-Origin Resource Sharing)
import { app, server } from "../backend/socket/socket.js"

// Создаем приложение Express

const PORT = process.env.PORT || 3000; // Устанавливаем порт для сервера (3000 по умолчанию или из переменных окружения)

dotenv.config(); // Загружаем переменные окружения из файла .env

app.use(express.json()); // Настраиваем приложение для работы с JSON данными из тела запросов
app.use(cookieParser()); // Настраиваем приложение для работы с куки

app.use(cors({
	origin: 'http://localhost:5000', // Разрешаем запросы с этого адреса (например, нашего фронтенда)
	methods: 'GET,POST,PUT,DELETE,OPTIONS', // Разрешаем эти HTTP методы
	allowedHeaders: 'Content-Type,Authorization', // Разрешаем эти заголовки в запросах
	credentials: true // Разрешаем передавать куки
}));

// Настраиваем маршруты (URL пути) для обработки запросов
app.use("/api/auth", authRouter); // Все запросы на /api/auth будут обрабатываться в authRouter
app.use("/api/messages", messagesRouter); // Все запросы на /api/messages будут обрабатываться в messagesRouter
app.use("/api/users", userRoute); // Все запросы на /api/users будут обрабатываться в userRoute

// Запускаем сервер на указанном порту
server.listen(PORT, () => {
	connectToMongoDB(); // Подключаемся к базе данных MongoDB
	console.log(`Server started on port ${PORT}`); // Выводим сообщение, что сервер запущен
});
