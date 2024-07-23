const mongoose=require('mongoose')

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_url).then((con)=>{
        console.log('mongodb conneccted to host:'+con.connection.host)
    })

}
module.exports=connectDatabase