import mongoose, {Schema} from "mongoose";


//Schema es una clase de Moongose
const colorSchema = new Schema({
    nombreColor:{
        type: String,
        required:true,
        minLength:2,
        maxLength:50 
    },
    colorHexadecimal:{
        type:String,      
        
    },
    colorRGBRGBA:{
        type: String,      
                     
    }
})

// aqui realizamos el modelo
const Color = mongoose.model('color', colorSchema);

export default Color;