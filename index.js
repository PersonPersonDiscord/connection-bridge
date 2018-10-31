const Net = require('net');

const server = Net.createServer();

var users = [];
var names = ["Adams", "Baker", "Clark", "Davis", "Evans", "Frank", "Ghosh", "Hills", "Irwin", "Jones", "Klein", "Lopez", "Mason", "Nalty", "Ochoa", "Patel", "Quinn", "Reily","Smith","Trott","Usman","Valdo","White","Xiang", "Yakub","Zafar"];

function join() {
    var name = users[Math.floor(Math.random() * users.length)];
    if (users.indexOf(name) > -1)
        return join();
    
    console.log(name + " Joined!");
    return name;
}

function leave(name) {
    console.log(name + "Left!");
    users.splice(users.indexOf(name), 1);
}

server.on("connection", (socket) => {
    // Connected, can send initial message if wanted
    var name = join();
    
    
    socket.on("message", (message) => {
        console.log(name + " says: " + message);
    });
    
    socket.on("close", () => {
        leave(name);
    });
    
    socket.send("Hello!");
});

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Listening on port ${server.address().port}!`);
});
