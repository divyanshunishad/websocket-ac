import express from "express";
import { createServer } from "http"; // Import createServer from http module
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = createServer(app); // Create an HTTP server using Express app
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log(`Clint :${message}`);
        ws.send("Server : Respose Recived"); // Send back the received message
    });
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
