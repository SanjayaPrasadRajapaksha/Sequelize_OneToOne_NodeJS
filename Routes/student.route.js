import * as studentReposity from "../Controllers/student.controller.js";

import express from "express";

const router = express.Router();

router.post("/create", studentReposity.createStudent);
router.get("/get/:id", studentReposity.getStudentById);
router.get("/getAll", studentReposity.getAllStudents);
router.put("/update/:id", studentReposity.updateStudentById);
router.delete("/delete/:id", studentReposity.deleteStudentById);

export default router;


