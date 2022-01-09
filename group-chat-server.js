const app = require("express")();
const cors = require("cors");
require('dotenv').config()
const { createServer } = require("http");
const { Server } = require("socket.io");
app.use(cors());
const expressServer = createServer(app);
const io = new Server(expressServer);
const port = process.env.PORT ||5000 ;
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