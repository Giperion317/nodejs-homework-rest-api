const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Not found" });
  next();
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode);
  res.json({
    code: statusCode,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
