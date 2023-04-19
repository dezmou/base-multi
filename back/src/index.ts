import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import express from "express";
import http from "http";
import { onReady } from "./bdd";

const app = express();
const server = http.createServer(app);
server.listen({ port: 3001, host: "0.0.0.0", }, () => {
    console.log("SERVER STARTED");
});

export type SSocket = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
export const io = new Server(server, { path: '/api' });

onReady.subscribe(() => {
    io.on('connection', (socket) => {
        console.log("USER CON");
        socket.emit("welcome", socket.id)

        socket.on("chien", (p) => {
            console.log(p);
        })
    });
})
