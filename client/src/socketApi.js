import { io } from "socket.io-client";

export const connectSocket = () => {
    io("http://localhost:3000", { transports: ["websocket"] });
}