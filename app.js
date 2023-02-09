import * as http from "http";
import express from "express";
import { sqlConfig } from "./dbconfig.js";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes/eventRoutes.js";

const app = express();
const eventRouters = routes();

app.use(cors());
app.use(bodyParser.json());

app.use('/api',eventRouters.routes);

app.listen(sqlConfig.port, () =>
  console.log(` Server is listening on http://localhost: ${sqlConfig.port}`)
);

(function () {
  console.log("Hello world, This is an app to connect to sql server.");
})();

// app
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World!");
//   })
//   .listen(8080);
