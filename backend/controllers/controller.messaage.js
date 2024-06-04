// Импортируем модели для работы с сообщениями и переписками
import Convertation from "../models/convertation.modal.js";
import Message from "../models/message.modal.js";

// Экспортируем функцию для отправки сообщения
export const sendMessage = async (req, res) => {
	try {
		// Получаем текст сообщения из запроса
		const { message } = req.body;
		// Получаем ID получателя из параметров запроса
		const { id: receiverId } = req.params;
		// Получаем ID отправителя из авторизованного пользователя
		const senderId = req.user._id;

		// Ищем переписку между отправителем и получателем
		let convertation = await Convertation.findOne({
			particpaints: {
				$all: [senderId, receiverId]
			}
		});

		// Если переписка не найдена, создаем новую
		if (!convertation) {
			convertation = await Convertation.create({
				particpaints: [senderId, receiverId],
			});
		}

		// Создаем новое сообщение
		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		// Если сообщение успешно создано, добавляем его в переписку
		if (newMessage) {
			convertation.messages.push(newMessage._id);
		}

		// Сохраняем переписку и сообщение в базе данных
		await Promise.all([convertation.save(), newMessage.save()]);

		// Возвращаем созданное сообщение в ответе
		res.status(201).json(newMessage);
	} catch (error) {
		// Логируем ошибку и возвращаем её в ответе
		console.log("Error sending message, error.message");
		res.status(500).json({ message: error.message });
	}
};

// Экспортируем функцию для получения сообщений
export const getMessages = async (req, res) => {
	try {
		// Получаем ID пользователя для переписки из параметров запроса
		const { id: userToChatId } = req.params;
		// Получаем ID отправителя из авторизованного пользователя
		const senderId = req.user._id;

		// Ищем переписку между отправителем и получателем и загружаем сообщения
		const conversation = await Convertation.findOne({
			particpaints: {
				$all: [senderId, userToChatId]
			}
		}).populate("messages");

		// Если переписка не найдена, возвращаем ошибку
		if (!conversation) {
			return res.status(404).json({ message: "Conversation not found" });
		}

		// Получаем сообщения из переписки
		const messages = conversation.messages;

		// Возвращаем сообщения в ответе
		res.status(200).json(messages);
	} catch (error) {
		// Логируем ошибку и возвращаем её в ответе
		console.log("Error getting messages, error.message");
		res.status(500).json({ message: error.message });
	}
};
