import PropTypes from 'prop-types';
import useConversation from '../../zustand/useConversation';

const Conversations = ({ conversation, emoji, lastIndx }) => {

	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;

	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 p-2 rounded py-1 cursor-pointer
            ${isSelected ? "bg-sky-500" : ""}
            `}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img src={conversation.profile} alt="user avatar" />
					</div>
				</div>
				<div className="flex flex-col flex-1 ">
					<div className="flex gap-3 justify-between">
						<p className="font-bold text-gray-200">{conversation.fullName}</p>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIndx ? <div className="divider my-0 py-0 h-1"></div> : null}
		</>
	);
};

Conversations.propTypes = {
	conversation: PropTypes.shape({
		profile: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		_id: PropTypes.string.isRequired
	}).isRequired,
	emoji: PropTypes.string.isRequired,
	lastIndx: PropTypes.bool.isRequired
};

export default Conversations;