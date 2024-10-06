import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import db from './Models/index.js';
import studentRoutes from './Routes/student.route.js'
import laptopRoutes from "./Routes/laptop.route.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type", "content-type: multipart/form-data");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synced.");
  app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });
});

app.use('/student', studentRoutes);
app.use('/laptop', laptopRoutes);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});