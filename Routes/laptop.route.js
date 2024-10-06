import * as laptopController from "../Controllers/laptop.controller.js";

import express from "express";
const router = express.Router();

router.post("/create", laptopController.createLaptop);
router.get("/get/:id", laptopController.getLaptopById);
router.get("/getAll", laptopController.getAllLaptops);
router.put("/update/:id", laptopController.updatelaptopById);
router.delete("/delete/:id", laptopController.deleteLaptopById);

export default router;