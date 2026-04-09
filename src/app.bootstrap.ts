import express from "express";
import { authRouter } from "./modules";
import { globalErrorHandler } from "./middleware";
import { PORT } from "./config/config";
import connectDB from "./DB/connection.db";

const bootstrap = async (): Promise<void> => {
  const app: express.Express = express();

  app.use(express.json());

  app.get(
    "/",
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ): express.Response => {
      return res.status(200).json({ message: "Landing Page" });
    },
  );

  // application-routing
  app.use("/auth", authRouter);

  app.get(
    "/*dummy",
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ): express.Response => {
      return res.status(404).json({ message: "Invalid application routing" });
    },
  );

  // application-error
  app.use(globalErrorHandler);

  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server Is Running On Port <<<${PORT}>>>`);
  });

  console.log("application bootstrapped successfully ⚡");
};

export default bootstrap;
