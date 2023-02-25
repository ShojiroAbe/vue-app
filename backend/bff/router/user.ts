import express from "express";
import mysql, { RowDataPacket } from "mysql2";
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

// ユーザー情報の取得用エンドポイント
router.get("/:id", (req: express.Request, res: express.Response) => {
  const userId = req.params.id;
  pool.query(
    `SELECT * FROM userdata WHERE id='${userId}'`,
    (err, results: RowDataPacket[]) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Database error" });
      }
      // Array.isArray 引数 value が配列の場合は true を、そうでない場合は false を返す。
      if (Array.isArray(results) && results.length === 0) {
        console.log(results);
        console.log("No data found");
        return res.status(404).json({ console: "User not found AAA" });
      } else if (Array.isArray(results) && results.length > 0) {
        console.log(results);
        console.log("Data found");
        return res.json(results);
      } else {
        console.log("Unexpected result type");
      }

      const userData = results[0];
      return res.json(userData);
    }
  );
});

// Sign Upからの情報をデータベースに登録
router.post("/signup", async (req: express.Request, res: express.Response) => {
  const { username, email, pass } = req.body._value;
  console.log(username, email, pass);

  const INSERT_USER_QUERY = `INSERT INTO userdata (username, email, pass) VALUES ('${username}', '${email}', '${pass}')`;

  pool.query(INSERT_USER_QUERY, (err: any, results: any) => {
    if (err) {
      console.error(err);
      console.log("Database error");
      return res.status(500).json({ error: "Database error" });
    }

    console.log("User created");
    return res.status(201).json({ message: "User created" });
  });
});

module.exports = router;
