import mongoose from "mongoose";


//localhost: 127.0.0.1 

const url = 'mongodb://localhost:27017/colores';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})