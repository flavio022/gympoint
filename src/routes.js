import { Router } from "express";
import authHeader from "./app/middlewares/auth";
import SessionController from "./app/controllers/SessionController";
import StudentController from "./app/controllers/StudentController";
import UserController from "./app/controllers/UserController";
import PlanController from "./app/controllers/PlanController";

const routes = new Router();

routes.post("/sessions", SessionController.store);
routes.post("/student/signIn", StudentController.signIn);

routes.use(authHeader);

routes.post("/student", StudentController.store);

routes.get("/student", StudentController.index);
routes.put("/student/:id", StudentController.update);

routes.get("/user", UserController.index);
routes.post("/user", UserController.store);
routes.put("/user/:id", UserController.update);

routes.get("/plans", PlanController.index);
routes.post("/plans", PlanController.store);
routes.put("/plans/:id", PlanController.update);
routes.delete("/plans/:id", PlanController.delete);
export default routes;
