import { Router } from "express";

import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  static get routes(): Router {
    const route = Router();

    // Definir todas mis rutas principales
    route.use("/api/auth", AuthRoutes.routes);

    return route;
  }
}
