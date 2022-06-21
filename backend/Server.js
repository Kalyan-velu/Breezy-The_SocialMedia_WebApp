const app = require('./app')
const {connectDatabase} = require("./config/database");

connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

const io = require('socket.io')(server, {
    pingTimeout: 60000,
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("Connected to Socket.io")

    socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit('connected')
    });

    socket.on('join chat', (room) => {
        socket.join(room);
        console.log("user joined room:" + room)
    })

    socket.on('typing', (room) => socket.in(room).emit("typing"))
    socket.on('stop typing', (room) => socket.in(room).emit("stop typing"))

    socket.on('new message', (newMessageReceived) => {
        let chat = newMessageReceived.chat;
        if (!chat.users) return
        console.log("chat.users not defined")

        //not to send same message back to the sender
        chat.users.forEach(user => {
            if (user._id === newMessageReceived.sender._id) return;
            socket.in(user._id).emit("message received", newMessageReceived)
        })
    })
})