import { Router } from "express";
import SessionController from "./app/controllers/sessionController";
import StudentController from "./app/controllers/studentController";
const routes = new Router();

routes.post("/sessions", SessionController.store);
routes.post("/student", StudentController.store);
export default routes;
