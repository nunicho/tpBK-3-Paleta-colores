import {Router} from "express"; 
import { obtenerColor, crearColor, listarColores, editarColor, borrarColor } from "../controllers/colores.controllers";
import { check } from "express-validator";

//ojo, Router no es lo mismo que router.
const router = Router();

router
  .route("/colores")
  .get(listarColores)
  .post([
      check("nombreColor")
        .notEmpty()
        .withMessage("El nombre del color es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
        "El nombre del color debe tener entre 2 y 50 caracteres")
        .matches(/^[a-zA-Z0-9_.-]*$/)
        .withMessage('Debe ingresar un nombre de color válido'
        ),
      check("colorHexadecimal"),
      check("colorRGBRGBA"),
    ],
    crearColor
    );

router
  .route("/colores/:id")
  .get(obtenerColor)
  .put([
    check("nombreColor")
        .notEmpty()
        .withMessage("El nombre del color es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
        "El nombre del color debe tener entre 2 y 50 caracteres")
        .matches(/^[a-zA-Z0-9_.-]*$/)
        .withMessage('Debe ingresar un nombre de color válido'
        ),
      check("colorHexadecimal"),
      check("colorRGBRGBA"),
    ],
      editarColor)
  .delete(borrarColor);

export default router;