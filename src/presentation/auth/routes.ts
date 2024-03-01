import { Router } from "express";
import { AuthController } from "./controller";

export class AuthRoutes {
  static get routes(): Router {
    const route = Router();
    const controller = new AuthController();

    // Definir mis rutas de authenticacion
    route.post("/login", controller.loginUser);
    route.post("/register", controller.registerUser);

    return route;
  }
}
