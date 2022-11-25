const mongoose=require('mongoose')

exports.connectDatabase = ()=>{
    mongoose.connect("mongodb+srv://Kalyan:xx118P9azRFTY4Ij@msite.ckriv.mongodb.net/?retryWrites=true&w=majority")
        .then( (c) => console.log( `Database Connected ${c.connection.host}` ))
        .catch((e)=>console.log(e))
}