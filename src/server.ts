import express from "express";

const server = express();

server.get("/", (request, response) => {
  return response.send("Hello!");
});

export default server;
