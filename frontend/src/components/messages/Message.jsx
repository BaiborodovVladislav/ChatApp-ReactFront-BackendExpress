import PropTypes from 'prop-types';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { extraktTimes } from '../../utils/extraktTimes';

function Message({ message }) {
	const { auth } = useAuthContext();
	const { selectedConversation } = useConversation();

	// Debug logs
	// console.log('Message data:', message);
	// console.log('authUser:', auth);
	// console.log('selectedConversation:', selectedConversation);

	const fromMe = message.senderId === auth._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const formatDate = extraktTimes(message.createdAt);
	const profilePick = fromMe ? auth.profile : selectedConversation?.profile;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img alt="Tailwind component" src={profilePick} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
			{formatDate && <div className="chat-footer mt-1 text-gray-50  text-xs opacity-50 flex gap-3 items-center">{formatDate}</div>}
		</div>
	);
}

Message.propTypes = {
	message: PropTypes.shape({
		message: PropTypes.string.isRequired,
		senderId: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired
	}).isRequired
};

export default Message;
