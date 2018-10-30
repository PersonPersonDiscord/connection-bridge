const Express = require("express");
const Http = require("http");
const WebSocket = require("ws");

const app = Express();
const port = process.env.PORT;

const httpServer = Http.createServer(app);
const webSocketServer = new WebSocket.Server({server});

var names = ["Adams", "Baker", "Clark", "Davis", "Evans", "Frank", "Ghosh", "Hills", "Irwin", "Jones", "Klein", "Lopez", "Mason", "Nalty", "Ochoa", "Patel", "Quinn", "Reily","Smith","Trott","Usman","Valdo","White","Xiang", "Yakub","Zafar"];
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

webSocketServer.on("connection", (socket) => {
  // Connected, can send initial message if wanted
  var name = random(names);
  
  console.log(name + "Joined!");
  
  socket.on("message", (message) => {
    console.log(
    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {
      console.log(name + " says: " + message);
    });
    
    socket.send("Hello!");
});

server.listen(port, () => {
    console.log(`Listening on port ${server.address().port}!`);
});
