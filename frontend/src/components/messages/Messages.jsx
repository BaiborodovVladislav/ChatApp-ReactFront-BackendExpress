import useGetMessages from "../../hooks/useGetMessages";
import PropTypes from "prop-types";
import MessageSkeleton from "../skeletons/MessagesSkeletons";
import Message from "./Message";
import { useEffect, useRef } from "react";

function Messages() {
	const { messages, loading } = useGetMessages();

	const lastMessagesRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
		}, 100)
	}, [messages])

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{loading && [...Array(3)].map((_, indx) => <MessageSkeleton key={indx} />)}

			{!loading && messages.length === 0 && (
				<p className="text-center text-gray-400">Send a message to get started</p>
			)}

			{!loading && messages.length > 0 && messages.map((message) => (
				<div key={message._id}
					ref={lastMessagesRef}
				>
					<Message message={message} />
				</div>
			))}
		</div>
	);
}

Messages.propTypes = {
	messages: PropTypes.array,
	loading: PropTypes.bool
};

export default Messages;
