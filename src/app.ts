import express from "express";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";
import { sequelize,testDB } from "./config/sequelize"


// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
testDB();
app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

loadApiEndpoints(app);

export default app;
