import http from "http";
import express, { response } from "express";
import bodyParser from "body-parser";
import sql from "mssql";

import * as dotenv from "dotenv";
import { retry } from "async";
dotenv.config();
const { PORT, HOST, HOST_URL, SQL_USER, SQL_PWD, SQL_DATABASE, SQL_SERVER } =
  process.env;

// import SqlClient from "msnodesqlv8";
// import assert from "assert";

const app = express();

// Get request
console.log("Hello world, This is an app to connect to sql server.");
const config = {
  user: SQL_USER, //default is sa
  password: SQL_PWD,
  server: HOST, // for local machine
  database: SQL_DATABASE, // name of database
  options: {
    encrypt: false,
  },
};

app.get("/h", async (req, res) => {
  const record = await getList();
  console.log(record);

  return res.status(200).send(record);
});

app.get("/s", async (req, res) => {
  const record = await getDocflow();
  console.log(record);

  return res.status(200).send(record);
});

app.get("/select", async (req, res) => {
  let response;
  //res.status(200).json(req.query);

  sql.connect(config, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connection Successful !");

    const requestDB = new sql.Request();
    requestDB.query("SELECT TOP 10 * from Events", (err, result) => {
      //handle err
      if (err) {
        console.log(err);
        res.json({ error: err });
      }
      response = result;
      console.dir(result);

      sql.close();
      return res.status(200).send({ response });
      // This example uses callbacks strategy for getting results.
    });
  });
});

async function getList() {
  try {
    console.log("Connection Successful !");
    let pool = await sql.connect(config);
    let result1 = await pool.request().query("SELECT TOP 10 * FROM ALTNAMES");

    sql.close();
    return result1;
  } catch (error) {
    console.error(error);
  }
}

async function getDocflow() {
  try {
    console.log("getDocflow()");
    let querySql =
      "SELECT TOP (10) [id],[id_year],[number],[id_owner],[name],[comments],[counter],[object_type],[tech_number],[typeOb],[FldIndex] FROM [archive_new].[dbo].[docflow_archive_folder]";
    let pool = await sql.connect(config);
    let result = await pool.request().query(querySql);
    sql.close();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// sql.connect(config, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Connection Successful !");

//   const requestDB = new sql.Request();
//   requestDB.query("select * from Events", (err, result) => {
//     //handle err
//     console.dir(result);
//     // This example uses callbacks strategy for getting results.
//   });
// });

// sql.on("error", (err) => {
//   // ... error handler
//   console.log("Sql database connection error ", err);
// });

let server = app.listen(5000, function () {
  console.log("Server is listening at port 5000...");
});

function index(request, response) {
  response.writeHead(200);
  response.end("Hello, World!");
}

http
  .createServer(function (request, response) {
    if (request.url === "/") {
      return index(request, response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
  })
  .listen(1337);

// app.get('/', function (req, res) {

//     // config for your database
//     var config = {
//         user: 'sa',
//         password: 'Vv54321',
//         server: 'localhost',
//         database: 'SampleDB'
//     };

//     // connect to your database
//     sql.connect(config, function (err) {

//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();

//         // query to the database and get the records
//         request.query('select * from SampleDB', function (err, recordset) {

//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);

//         });
//     });
// });

// var server = app.listen(5000, function () {
//     console.log('Server is running..');

// const connStr = "Driver={SQL Server};Server=(local);Trusted_Connection=Yes;Database=AdventureWorks";
// const connectionString =
//   "Driver={SQL Server Native Client 11.0};Server=localhost,1433;Database=SampleDB;Uid=sa;Pwd=Vv54321;Trusted_Connection=No;";
// const query = "SELECT * FROM Events";
// sql.open(connStr, function (err, conn) {
//           assert.ifError(err);
//           // connection is now ready to use.
//           sql.query(connectionString, query, (err, rows) => {
//             //   console.log(rows);
//             // });
//       });
// });

//   var connStr = "Driver={SQL Server Native Client 11.0};Server=localhost;Database=SampleDB;Trusted_Connection=Yes;";
//  var connStr = "Driver={SQL Server};Server=(local);Trusted_Connection=Yes;Database=AdventureWorks;"

//

// //set up a sql server credentials
// let config = {
//   server: "localhost",
//   database: "SampleDB",
//   user: "sa",
//   password: "Vv54321",
//   port: 1433,
// };

// http
//   .createServer((request, response) => {
//     response.end("Hello NodeJS!");
//   })
//   .listen(3000, "127.0.0.1", () => {
//     console.log("Сервер начал прослушивание запросов на порту 3000");
//     console.dir(config);
//   });
