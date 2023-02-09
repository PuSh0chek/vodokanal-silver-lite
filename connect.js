//var Connection = require('tedious').Connection;
import { Connection } from "tedious";

//var Request = require('tedious').Request;
import { Request } from "tedious";
//var TYPES = require('tedious').TYPES;
import { TYPES } from "tedious";

// Create connection to database
const config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: "sa", // update me
      password: "Vv54321", // update me
    },
  },
  options: {
    database: "SampleDB",
    // else -> ConnectionError: Failed to connect to localhost:1433 - self-signed certificate
    trustServerCertificate: true,
  },
};
const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`-> Connected to ${config.options.database}`);
  }
});

connection.connect((err) => {
  if (err) {
    console.log("Connection Failed");
    throw err;
  }

  executeStatement();
});

function executeStatement() {
  let request = new Request("select * from dbo.Table", function (
    err,
    rowCount
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + " rows");
      console.log("-> DONE!");
      // and we close the connection
      connection.close();
    }
  });

  // request.on("row", function (columns) {
  //   columns.forEach(function (column) {
  //     console.log(column.value);
  //   });
  // });

  connection.execSql(request);
}

//const table = "[dbo].[test_bulk]";

// Creating new table called [dbo].[test_bulk]
//--------------------------------------------------------------------------------

// const config = {
//                 "user": "userWeb", //default is sa
//                 "password": "Vv54321",
//                 "server": "localhost", // for local machine
//                 "database": "staging", // name of database
//                 "options": {
//                     "encrypt": true,
//                 }
//             }

// sql.connect(config, err => {
//   if(err){
//     throw err ;
// }
// console.log("Connection Successful !");

// new sql.Request().query('select 1 as number', (err, result) => {
//     //handle err
//     console.dir(result)
//     // This example uses callbacks strategy for getting results.
// })

// });

// sql.on('error', err => {
// // ... error handler
// console.log("Sql database connection error " ,err);
// })

/*config for port 1433 , must enable TCP Port property to 1433 
in SQL Server Network Configuration -> Protocols for ... 
-> TCP/IP -> IP Addresses -> IPAll.
*/
// var config = {
//     "user": 'admin',
//     "password": 'password',
//     "server": 'WINDOWS-PC',
//     "database": 'database_name',
//     "port": 61427, // make sure to change port
//     "dialect": "mssql",
//     "dialectOptions": {
//         "instanceName": "SQLEXPRESS"
//     }
// };
