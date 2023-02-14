import express from "express";
const userRouter = require("./router/user.ts");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("サーバーが起動しました"));

// ルーティング

// User
app.use("/user", userRouter);
