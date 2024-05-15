import Messages from "./Messages"
import MessagesInput from "./MessageInput"
import { TiMessages } from "react-icons/ti"

function MesageContainer() {
	const noChatSelected = true
	return (
		<div className="md:min-w-[450px] flex flex-col">

			{noChatSelected ? <NoChatSelected /> : (
				<>
					{/* header */}
					<div className="bg-state-500 px-4 py-2 md-2">
						<span className="label-text text-gray-400">To</span>{" "}
						<span className="text-gray-400 font-bold">Jon Doe</span>
					</div>
					<Messages />
					<MessagesInput />
				</>
			)}

		</div>
	)
}

export default MesageContainer


const NoChatSelected = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
				<p>welcome 🇷🇺 mou dorogou drug!</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-3xl md:text-6x1 text-center" />
			</div>
		</div>
	)
}

