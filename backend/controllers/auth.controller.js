import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const { fullName, userName, password, confirmPassword, email, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Password and confirm password must be same" });
		}

		const existingUser = await User.findOne({ userName });

		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

		const newUser = new User({
			fullName,
			userName,
			password: hashedPassword,
			email,
			gender,
			profile: gender === "male" ? boyProfile : girlProfile
		});

		await newUser.save();
		generateToken(newUser._id, res);

		res.status(201).json({
			_id: newUser._id,
			fullName: newUser.fullName,
			userName: newUser.userName,
			email: newUser.email,
			profile: newUser.profile
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};

export const login = async (req, res) => {
	try {
		const { userName, password } = req.body;
		const user = await User.findOne({ userName });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid credentials" });
		}

		generateToken(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			userName: user.userName,
			email: user.email,
			profile: user.profile
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ status: "success logout ok" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};
