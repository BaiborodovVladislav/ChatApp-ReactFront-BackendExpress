// Импортируем библиотеку mongoose, чтобы работать с MongoDB
import mongoose from "mongoose";

// Создаем асинхронную функцию для подключения к MongoDB
const connectToMongoDB = async () => {
	try {
		// Пытаемся подключиться к MongoDB, используя URL из переменной окружения
		await mongoose.connect(process.env.MONGO_DB_URL);
		// Если подключение успешно, выводим сообщение в консоль
		console.log("Успешное подключение к MongoDB");
	} catch (error) {
		// Если возникла ошибка при подключении, выводим сообщение об ошибке
		console.log("Ошибка при подключении к MongoDB:", error.message);
	}
}

// Экспортируем функцию, чтобы можно было использовать её в других файлах
export default connectToMongoDB;
