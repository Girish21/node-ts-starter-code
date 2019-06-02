import dotenv from "dotenv";
import express from "express";

import * as router from "./routes/routes";

dotenv.config();

const app = express();

router.routes(app);

app.listen(8080, () => {
  // tslint:disable-next-line:no-console
  console.log("Server Up");
});
