import mongoose, {Schema} from "mongoose";


//Schema es una clase de Moongose
const colorSchema = new Schema({
    nombreColor:{
        type: String,
        required:true,
        unique:true,
        minLength:2,
        maxLength:50 
    },
    codigoHexadecimal:{
        type:String,
        required:true,
        min: 1,
        max: 200
    },
    codigoRGBRGBA:{
        type: String,
        required:true,
        min: 1,
        max: 200
    }
})

// aqui realizamos el modelo
const Color = mongoose.model('color', colorSchema);

export default Color;