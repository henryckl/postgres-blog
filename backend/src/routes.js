import { Router } from "express";
import UserController from "./app/controllers/UserController";
import PostController from "./app/controllers/PostController";
const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/posts", PostController.store);
routes.get("/posts", PostController.index);

export default routes;
