"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const bdd_1 = require("./bdd");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
server.listen({ port: 3001, host: "0.0.0.0", }, () => {
    console.log("SERVER STARTED");
});
exports.io = new socket_io_1.Server(server, { path: '/api' });
bdd_1.onReady.subscribe(() => {
    exports.io.on('connection', (socket) => {
        console.log("USER CON");
        socket.emit("welcome", socket.id);
        socket.on("chien", (p) => {
            console.log(p);
        });
    });
});
