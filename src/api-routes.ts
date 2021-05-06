import express, { Request, Response } from "express";
export let Router = express.Router();


Router.get("/", (req: Request, res: Response) => {
  res.json({
    status: "API works",
    message: "Boilerprate prty cool, right?",
  });
});

