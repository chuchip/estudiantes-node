import express from "express";
import path from "path";

import { endPoints } from "./routers";
import { sequelize,testDB } from "./config/sequelize"
import cors  from 'cors';

// Create Express server
const app = express();
const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
testDB();
app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

endPoints(app);

export default app;
