const mongoose=require('mongoose');

//Your mongodb url
//url-:mongodb+srv://id:password@cluster0.dtbfvbd.mongodb.net/
mongoose.connect('mongodb+srv://umar389:nanana1222@cluster0.dtbfvbd.mongodb.net/prac');

const db=mongoose.connection;


db.on('error',console.error.bind('error','Error in connecting'));

db.once('open',function(){
    console.log("Successfully connected to db");
})

module.exports=db;
