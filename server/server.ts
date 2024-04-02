//require("dotenv").config();
//const express = require("express");
import express, { Request, Response } from "express";
//const logger = require("morgan");
//const cors = require("cors");

//const authRouter = require("./routes/api/auth");
//const monitoringRouter = require("./routes/api/monitoring");
// const shoppingListRouter = require("./routes/api/shopping-list");
// const ingredientsRouter = require("./routes/api/ingredients");

const server = express();

//const formatsLogger = app.get("env") === "development" ? "dev" : "short";

//app.use(logger(formatsLogger));
//app.use(cors());
server.use(express.json());
//app.use(express.static("public"));

//app.use("/api/users", authRouter);
server.use("/api/users", (req,res) => { res.status(200).json({ answer:"api/users"});});

//app.use("/api/monitoring", monitoringRouter);
// app.use("/api/shopping-list", shoppingListRouter);
// app.use("/api/ingredients", ingredientsRouter);

// const specs = swaggerJsdoc(swaggerOptions);
// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs, { explorer: true })
// );




// server.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

export default server;
