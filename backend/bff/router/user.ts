import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// mysql.createConnection()(createPool())という関数は、MySQLデータベースとの新しい接続を作成するための機能。これにより、アプリケーションとMySQLデータベース間でのやりとりを行うことができます。簡単に言うと、MySQLデータベースとの「手続き」を開始するための「手続きの始まり」を行う関数
const pool = mysql.createPool({
  host: "db",
  port: 3306,
  user: "user",
  password: "pass",
  database: "myblog",
});

router.get("/", (req: express.Request, res: express.Response) => {
  const data = {
    name: "John Doe",
    age: 32,
  };
  console.log(data);
  return res.send(JSON.stringify(data));
});

router.get("/signup", async (req: express.Request, res: express.Response) => {
  return res.send("aaaaaaaaaaa");
});

router.post("/signup", async (req: express.Request, res: express.Response) => {
  const { username, email, pass } = req.body._value;
  console.log(username, email, pass);

  const INSERT_USER_QUERY = `INSERT INTO userdata (username, email, pass) VALUES ('${username}', '${email}', '${pass}')`;

  pool.query(INSERT_USER_QUERY, (err: any, results: any) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    return res.status(201).json({ message: "User created" });
  });
});

module.exports = router;
