import { Router } from "express";
import UserController from "./app/controllers/UserController";
import PostController from "./app/controllers/PostController";
import SessionController from "./app/controllers/SessionController";
const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/posts", PostController.store);
routes.post("/sessions", SessionController.store);
routes.get("/posts", PostController.index);

export default routes;
