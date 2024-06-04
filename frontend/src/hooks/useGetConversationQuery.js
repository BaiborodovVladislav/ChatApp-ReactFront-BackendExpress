import { useState, useEffect } from "react"
import toast from "react-hot-toast"

const useGetConversationQuery = () => {
	const [loading, setLoading] = useState(false)
	const [conversation, setConversation] = useState([])

	useEffect(() => {
		const getConversation = async () => {
			setLoading(true)
			try {
				const res = await fetch('/api/users')
				const data = await res.json()

				if (data.error) {
					throw new Error(data.error)
				}

				setConversation(data)
			} catch (error) {
				toast.error(error.message)
			} finally {
				setLoading(false)
			}
		}

		getConversation()
	}, [])

	return { loading, conversation }
}

export default useGetConversationQuery
