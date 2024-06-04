// Импортируем библиотеку mongoose для работы с MongoDB
import mongoose from "mongoose";

// Создаем схему для коллекции "Convertation"
const convertationSchema = new mongoose.Schema({
	// Участники разговора
	particpaints: [{
		// Каждый участник представлен в виде ObjectId, ссылающегося на коллекцию "User"
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	}],
	// Сообщения в разговоре
	messages: [{
		// Каждое сообщение представлено в виде ObjectId, ссылающегося на коллекцию "Message"
		type: mongoose.Schema.Types.ObjectId,
		ref: "Message",
		// По умолчанию массив сообщений пустой
		default: [],
	}]
},
	// Автоматически добавляем время создания и обновления записи
	{ timestamps: true });

// Создаем модель "Convertation" на основе схемы convertationSchema
const Convertation = mongoose.model("Convertation", convertationSchema);

// Экспортируем модель "Convertation" для использования в других частях приложения
export default Convertation;
