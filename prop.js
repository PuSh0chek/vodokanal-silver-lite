import * as http from "http";

import * as config from './dbconfig.js'

http
  .createServer((request, response) => {
    response.end("Hello NodeJS!");
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Сервер начал прослушивание запросов на порту 3000");
    console.dir(config);
  });
