const app = require('./app')
const {connectDatabase} = require("./config/database");
const cloudinary = require("cloudinary").v2;

connectDatabase()

cloudinary.config({                     //cloudinary configuration
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
} );


const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

const io = require('socket.io')(server, {   //socket.io configuration
    pingTimeout: 60000, // 60 seconds
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
    })

    socket.on('typing', (room) => socket.in(room).emit("typing"))
    socket.on('stop typing', (room) => socket.in(room).emit("stop typing"))

    socket.on('new message', (newMessageReceived) => {      //
        let chat = newMessageReceived.chat;
        if (!chat.users) return
        console.log("chat.users not defined")
        //not to send same chat-styles back to the sender
        chat.users.forEach(user => {
            if (user._id === newMessageReceived.sender._id) return;
            socket.in(user._id).emit("message received", newMessageReceived)
        })
    })
})