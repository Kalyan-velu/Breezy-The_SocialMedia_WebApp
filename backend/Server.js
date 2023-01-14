require("dotenv/config")
const app = require('./app')
const {connectDatabase} = require("./config/database");
const cloudinary = require("cloudinary").v2;
const path = require( "path" );
const express=require('express')
cloudinary.config({                     //cloudinary configuration
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
} );

const __dirname1 = path.resolve()
if (process.env.NODE_ENV === 'production') {
	app.use( express.static( path.join( __dirname1, '../client/build' ) ) )

	app.get( '*', (request, response) => {
		response.sendFile( path.resolve( __dirname1, "../client", "build", "index.html" ) )
	} )
} else {
	app.get( "/", (request, response) => {
		response.json( {message: "Server is Up"} );
	} );
}

connectDatabase()
const PORT=process.env.PORT||8000
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
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

    socket.on('new message', (newMessageReceived) => {
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