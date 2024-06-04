import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				if (!selectedConversation?._id) {
					throw new Error('Conversation ID is not defined');
				}

				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				if (!res.ok) {
					throw new Error('Failed to fetch messages');
				}
				const data = await res.json();



				if (data.error) {
					throw new Error(data.error);
				} else if (data.length === 0) {
					console.log('No messages found');
				} else {
					setMessages(data);
				}
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};

export default useGetMessages;
