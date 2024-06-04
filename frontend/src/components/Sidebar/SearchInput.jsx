import { SiMeilisearch } from "react-icons/si";
import { useState, useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversationQuery";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState('');
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	useEffect(() => {
		if (conversations) {
			console.log('Conversations loaded:', conversations);
		} else {
			console.log('Conversations not loaded');
		}
	}, [conversations]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error('Search term must be at least 3 characters');
		}

		if (!conversations) {
			return toast.error('Conversations data is not available');
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
		if (conversation) {
			setSelectedConversation(conversation);
			setSearch('');
		} else {
			toast.error('No such user found');
		}
	}

	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} className='input input-bordered rounded-full' />

			<button className='btn btn-circle bg-yellow-500 text-white'>
				<SiMeilisearch className="w-6 h-6 outline-none text-black" />
			</button>
		</form>
	)
}

export default SearchInput;
