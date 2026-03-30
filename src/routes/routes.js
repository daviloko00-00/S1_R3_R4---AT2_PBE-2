import { Router } from "express";
import categoriaroutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
produtoRoutes
const routes = Router();

routes.use("/categorias", categoriaroutes)
routes.use("/produtos", produtoRoutes)


export default routes;