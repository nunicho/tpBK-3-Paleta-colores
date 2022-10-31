import { validationResult } from "express-validator";
import Color from "../models/color";

export const listarColores = async(req, res) => {
    try {
        //buscar todos los colores en la BD
        const listaColores = await Color.find();
        //responder al usuario que todo salio bien
        res.status(200).json(listaColores)
      } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar buscar los colores'
        })
      }


};

export const crearColor = async(req, res) => {
  try {
    //manejar los errores de express-validator
    const errores = validationResult(req);
    //errores.isEmpty() retorna true cuando no hay errores, retorna false cuando hay errores
    // pregunto si hay errores
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }

    //extraer del body los datos
    console.log(req.body);
    //agregar la validacion correspondiente
    const colorNuevo = new Color(req.body);
    //guardar ese color en la BD
    await colorNuevo.save();
    //responder al usuario que todo salio bien
    res.status(201).json({
        mensaje: 'El color fue correctamente creado'
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje: 'Error al intentar agregar un color'
    })
  }
};


export const obtenerColor = async (req, res)=>{
  try{
    //obtener el parametro
    console.log(req.params.id)
    //pedirle a la BD buscar el documento que coincide con el id del parametro
    const colorBuscado = await Color.findById(req.params.id);
    //responder con el color encontrado
    res.status(200).json(colorBuscado);
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error no se pudo encontrar el color solicitado'
    })
  }
}
export const editarColor = async (req, res)=>{
  try{

    //buscar el color por el id, luego modificar los datos con el body
    await Color.findByIdAndUpdate(req.params.id,req.body);
       //manejar los errores de express-validator
     const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }
    //extraer del body los datos
    console.log(req.body);
    //responder al frontend
    res.status(200).json({
      mensaje: 'El color fue editado correctamente'
    })
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error el color solicitado no pudo ser modificado'
    })
  }
}
export const borrarColor = async (req, res)=>{
  try{
  //buscar un color por el id y borrar
  await Color.findByIdAndDelete(req.params.id)
  //responder al frontend si pude eliminar el color
  res.status(200).json({
    mensaje: 'El color fue correctamente eliminado'
  })
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error el color solicitado no pudo ser eliminado'
    })
  }
}