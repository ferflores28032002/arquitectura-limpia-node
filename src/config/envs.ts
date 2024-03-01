import "dotenv/config";

import * as env from "env-var";

// variables de entorno
export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
};
