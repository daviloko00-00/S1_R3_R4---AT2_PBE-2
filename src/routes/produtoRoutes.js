import {Router} from "express";
import produtoController from "../controllers/produtoController.js";
import uploadImage from "../middlewares/uploadImage.middleware.js";
const produtoRoutes = Router(); 

produtoRoutes.post("/", uploadImage, produtoController.criar);
produtoRoutes.put("/", produtoController.atualizar);
produtoRoutes.delete("/:id", uploadImage, produtoController.deletar);
produtoRoutes.get("/", produtoController.selecionar);
export default produtoRoutes