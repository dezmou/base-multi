import { io } from "socket.io-client";

const socket = io(`${window.location.origin}`, {
    path: "/api",
    upgrade: false,
    transports: ['websocket'],
});

export const main = async () => {
    window.onbeforeunload = () => {
        console.log("UNLOAD");
        socket.close();
    }

    socket.on("welcome", (id) => {
        console.log("WELCOME");
        socket.emit("chien", "rage")
    })
}