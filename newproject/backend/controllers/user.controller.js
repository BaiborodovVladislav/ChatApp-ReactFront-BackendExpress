
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {

	try {

		const loggedUsersId = req.user._id;

		const filterUsers = await User.find({ _id: { $ne: loggedUsersId } }).select("-password");

		res.status(200).json(filterUsers);



	} catch (error) {
		console.log("Error sending sidebar, error.message")
		res.status(500).json({ message: error.message })
	}
}