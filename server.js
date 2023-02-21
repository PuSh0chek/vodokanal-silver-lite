import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as pkg from "./package.json" assert { type: "json" };

//configure DataBase MSSQL
const config = {
  user: "sa", //default is sa
  password: "Vv54321",
  server: "localhost", // for local machine
  database: "SampleDB", // name of database
  options: {
    encrypt: false,
  },
};

//configure example DB
const db = {
  christopher: {
    user: "christopher",
    currency: "USD",
    balance: 100,
    description: "A sample account",
    transactions: [],
  },
};

const port = process.env.port || process.env.PORT || 5000;
const apiRoot = "/api";

const getSomeEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    res.json({ eventId: eventId });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const app = express();
//configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ original: /http:\/\/localhost/ }));
app.options("*", cors());

//configure routes
const router = express.Router();

router.get("/accounts/:user", (req, res) => {
  const user = req.params.user;
  const account = db[user];

  if (!account) {
    return res.status(404).json({ error: "User does not exist" });
  }
  return res.json(account);
});

router.post("/accounts", (req, res) => {
  const body = req.body;

  //validate reqiured values
  if (!body.user || !body.currency) {
    return res.status(400).json({ error: "user and currency are required" });
  }

  //check account doesn't exist
  if (db[body.user]) {
    return res.status(400).json({ error: "Account already exist" });
  }

  //balance
  let balance = body.balance;
  if (balance && typeof balance !== "number") {
    balance = parseFloat(balance);
    if (isNaN(balance)) {
      return res.status(400).json({ error: "balance must be a number" });
    }
  }

  //now we can create the account!
  const account = {
    user: body.user,
    currency: body.currency,
    description: body.description || `${body.user}'s account`,
    balance: balance || 0,
    transactions: [],
  };

  db[account.user] = account;

  return res.status(201).json(account);
});

router.put("/accounts/:user", (req, res) => {
  const body = req.body;
  const user = req.params.user;
  const account = db[user];

  if (!account) {
    return res.status(404).json({ error: "User not found" });
  }
  if (body.user || body.balance || body.transactions) {
    return res
      .status(400)
      .json({ error: "Can only edit currency ans description" });
  }
  if (body.description) {
    account.description = body.description;
  }

  if (body.currency) {
    account.currency = body.currency;
  }

  return res.status(200).json(account);
});

router.delete("/accounts/:user", (req, res) => {
  const user = req.params.user;
  const account = db[user];

  if (!account) {
    return res.status(404).json({ error: "User not found" });
  }

  delete db[user];
  return res.status(204);
});

router.get("/events/:id", getSomeEvent);

router.get("/", (req, res) => {
  res.send(`${pkg.description} -v${pkg.version}`);
});

//register all our routes
app.use(apiRoot, router);

app.listen(port, () => {
  console.log("Sever up,,,,");
});
