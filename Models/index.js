import { Sequelize } from "sequelize";
import dbConfig from "../Configs/db.config.js";
import initStudentModel from "./student.model.js";
import initLaptopModel from "./laptop.model.js";

const db = {};
db.Sequelize = Sequelize;
db.sequelize = dbConfig;

// Initialize Models
db.Student = initStudentModel(dbConfig, Sequelize.DataTypes);
db.Laptop = initLaptopModel(dbConfig, Sequelize.DataTypes);

// Establish the One-to-One Relationship
db.Student.hasOne(db.Laptop, {
  foreignKey: "studentID",
  as: "laptop",
});
db.Laptop.belongsTo(db.Student, {
  foreignKey: "studentID",
  as: "student",
});

export default db;
