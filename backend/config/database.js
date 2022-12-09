const mongoose=require('mongoose')

exports.connectDatabase = ()=>{
    const databaseUrl=process.env.MONGO_URI
    console.log(databaseUrl)
    mongoose.set('strictQuery', false);
    mongoose.connect(databaseUrl)
        .then( (c) => console.log( `Database Connected ${c.connection.host}` ))
        .catch((e)=>console.log(e))
}