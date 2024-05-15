
import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routers/auth.router.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import messagesRouter from './routers/massege.router.js';
import userRoute from './routers/user.router.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;


dotenv.config();

app.use(express.json()); // for parsing application/json(from request body)
app.use(cookieParser());


app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/users", userRoute)



app.listen(PORT, () => {

	connectToMongoDB();
	console.log(`Server started on port ${PORT}`);
});
