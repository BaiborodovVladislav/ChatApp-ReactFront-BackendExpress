import { createContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onLineUsers, setOnLineUsers] = useState([]);
	const { auth } = useAuthContext();

	useEffect(() => {
		if (auth) {
			console.log("Attempting to connect to WebSocket");
			const newSocket = io("http://localhost:5000");
			setSocket(newSocket);

			newSocket.on("connect", () => {
				console.log("Connected to WebSocket", newSocket.id);
			});

			return () => {
				console.log("Closing WebSocket connection");
				newSocket.close();
			};
		} else {
			if (socket) {
				console.log("Disconnecting from WebSocket");
				socket.close();
				setSocket(null);
			}
		}
	}, [auth]);

	return (
		<SocketContext.Provider value={{ socket, onLineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
