const mongoose=require('mongoose')

exports.connectDatabase = ()=>{
    const databaseUrl=process.env.MONGO_URI
    mongoose.set('strictQuery', true);
    mongoose.connect(databaseUrl)
        .then( (c) => console.log( `Database Connected ${c.db}` ))
        .catch((e)=>console.log(e))
}