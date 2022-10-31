import {Router} from "express"; 
import { obtenerColor, crearColor, listarColores, editarColor, borrarColor } from "../controllers/colores.controllers";
import { check } from "express-validator";

//ojo, Router no es lo mismo que router.
const router = Router();

router
  .route("/colores")
  .get(listarColores)
  .post(
    [
      check("nombreColor")
        .notEmpty()
        .withMessage("El nombre del color es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
        "El nombre del color debe tener entre 2 y 50 caracteres")
        .matches(/^[a-zA-Z0-9_.-]*$/)
        .withMessage('Debe ingresar un nombre de color válido'
        ),
      check("codigoHexadecimal")
        .notEmpty()
        .withMessage("El código hexadecimal del color es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El código hexadecimal del color debe tener entre 2 y 50 caracteres")
        .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
        .withMessage('Debe ingresar un código hexadecimal válido'
        ),
      check("codigoRGBRGBA")
        .notEmpty()
        .withMessage("El código RGB o RGBA del color es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El código RGB o RGBA  del color debe tener entre 2 y 50 caracteres")
        .matches(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
        .withMessage('Debe ingresar un código RGB o RGBA  válido'
        ),
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
      check("codigoHexadecimal")
        .notEmpty()
        .withMessage("El código hexadecimal del color es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El código hexadecimal del color debe tener entre 2 y 50 caracteres")
        .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
        .withMessage('Debe ingresar un código hexadecimal válido'
        ),
      check("codigoRGBRGBA")
        .notEmpty()
        .withMessage("El código RGB o RGBA del color es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El código RGB o RGBA  del color debe tener entre 2 y 50 caracteres")
        .matches(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
        .withMessage('Debe ingresar un código RGB o RGBA  válido'
        ),
      ],
      editarColor)
  .delete(borrarColor);

export default router;