import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

// funcion autoinvocada
(() => {
  main();
})();

async function main() {
  // todo: await base de datos

  new Server({ port: envs.PORT, routes: AppRoutes.routes }).start();
}
