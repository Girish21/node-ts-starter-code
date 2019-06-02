import express from "express";

export const routes = (app: express.Application) => {
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "Hello TS!"
    });
  });
};
