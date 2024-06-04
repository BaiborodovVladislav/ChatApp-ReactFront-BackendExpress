import useGetConversationQuery from "../../hooks/useGetConversationQuery"
import { randomEmoji } from "../../utils/emojies"
import Conversations from "./Conversations"

const Conversation = () => {
	const { loading, conversation } = useGetConversationQuery()

	console.log("CONVERT", conversation)

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversation.map((conversation, indx) => (
				<Conversations key={conversation._id}
					conversation={conversation}
					emoji={randomEmoji()}
					lastIndx={indx === conversation.length - 1}
				/>
			))}
			{loading ? <span className="loading loading-spinner mx-auto"></span> : null}
		</div>
	)
}

export default Conversation
