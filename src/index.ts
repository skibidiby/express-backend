import express, { Request, Response } from "express";
import {json} from "body-parser";
let app = express();
var port = 3000;

app.use(json());
app.listen(port, () => {
  console.log("server is listening on port", port);
});

app.get("/", (req:Request, res:Response) => res.send("Hello World with Express"));