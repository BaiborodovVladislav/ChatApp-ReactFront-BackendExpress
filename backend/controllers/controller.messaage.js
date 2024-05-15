import Convertation from "../models/convertation.modal.js";
import Message from "../models/message.modal.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let convertation = await Convertation.findOne({
			particpaints: {
				$all: [senderId, receiverId]
			}
		})


		if (!convertation) {
			convertation = await Convertation.create({
				particpaints: [senderId, receiverId],
			})
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		})

		if (newMessage) {
			convertation.messages.push(newMessage._id);
		}



		await Promise.all(
			[convertation.save(),
			newMessage.save()]
		)

		res.status(201).json(newMessage)

	} catch (error) {
		console.log("Error sending message, error.message")
		res.status(500).json({ message: error.message })
	}
}

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Convertation.findOne({
			particpaints: {
				$all: [senderId, userToChatId]
			}
		}).populate("messages")

		if (!conversation) {
			return res.status(404).json({ message: "Conversation not found" })
		}

		const messages = conversation.messages

		res.status(200).json(messages)

	} catch (error) {
		console.log("Error getting messages, error.message")
		res.status(500).json({ message: error.message })
	}
}