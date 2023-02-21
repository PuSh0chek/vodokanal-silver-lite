import * as http from "http";
import express from "express";
import { sqlConfig } from "./dbconfig.js";
import cors from "cors";
import bodyParser from "body-parser";
import * as eventRoutes from "./routes/eventRoutes.js";

const app = express();
//

app.use(cors());
app.use(bodyParser.json());

app.use("/api", eventRoutes.router);

app.use("/", (req, res) => {
  res.write("<h2> app.use '/'</h2>");
  res.write(JSON.stringify(sqlConfig));
  res.end();
});

app.listen(sqlConfig.port, () =>
  console.log(` Server is listening on http://localhost: ${sqlConfig.port}`)
);

// app
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World!");
//   })
//   .listen(8080);
