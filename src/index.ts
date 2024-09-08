import app, { initializeMiddlewares, initializeRoutes } from "./configs/app";
import appConfig from "./configs";
import { connectMongoDb } from "./configs/persistence/database";

const { port, environment } = appConfig;

(() => {
  initializeMiddlewares();
  initializeRoutes();

  connectMongoDb()
    .then(async () => {
      console.log("Database connected!");

      app.listen(port, () => {
        console.log(
          `${environment?.toLocaleUpperCase()} is running on port ${port}...`
        );
      });
    })
    .catch((err: any) => console.log(err, "error"));
})();
