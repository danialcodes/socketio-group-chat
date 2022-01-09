const app = require("express")();
const { createServer } = require("http");
const { Server } = require("socket.io");

const expressServer = createServer(app);
const io = new Server(expressServer);

const allmsg = [];
io.on("connection", (socket) => {
    console.log(allmsg);
    console.log(`New User connected---------!!!`);

    setTimeout(() => {
        console.log(`Sending Msg history to user`);
        socket.send(allmsg);
    }, 10);

    socket.on('newmsg', (newmsg) => {
        allmsg.push(newmsg);
        io.emit("newmsg", newmsg);
    })


});


























app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

expressServer.listen(5000, () => {
    console.log("Connected to port 5000");
});