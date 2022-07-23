const mongoose=require('mongoose')

exports.connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI) //Mongodb URI is fetched from environment variable
        .then( (c) => console.log( `Database Connected ${c.connection.host}` ))
        .catch((e)=>console.log(e))
}