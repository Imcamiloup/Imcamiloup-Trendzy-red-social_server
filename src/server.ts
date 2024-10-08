import express from "express";
import router from "./routes/index";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import morgan from "morgan";
import cors from "cors";

// const { FRONT_END_URL } = process.env;

const server = express();
server.use(cors());
server.use(morgan("dev"));
server.use(express.json()); //middleware post
server.use(express.urlencoded({ extended: true }));
server.use("/api", router);
server.use("/docs", swaggerUi.serve);
server.get("/docs", swaggerUi.setup(swaggerSetup));

export default server;
