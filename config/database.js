const mongoose=require('mongoose')

exports.connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI)
        .then( (c) => console.log( `Database Connected ${c.connection.host}` ))
        .catch((e)=>console.log(e))
}