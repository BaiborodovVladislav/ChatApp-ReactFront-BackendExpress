import mongoose from "mongoose";


const convertationSchema = new mongoose.Schema({
	particpaints: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	}],
	messages: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Message",
		default: [],
	}]
}, { timestamps: true });


const Convertation = mongoose.model("Convertation", convertationSchema);

export default Convertation;