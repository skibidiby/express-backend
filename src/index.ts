import express, { Request, Response } from "express";
import { json } from "body-parser";
import * as dotenv from "dotenv";
import cors from "cors";

import { itemsRouter } from "./items/items.router";
import { Router } from "./api-routes";

let app = express();
var port = 3000;

app.use(json());
app.listen(port, () => {
  console.log("server is listening on port", port);
});

app.get("/", (req: Request, res: Response) =>
  res.send("Hello World with Express")
);
app.use("/api", Router);

dotenv.config();
app.use(cors());
app.use("/api/menu/items", itemsRouter);
