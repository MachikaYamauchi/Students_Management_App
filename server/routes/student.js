import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { addStudent, getStudent, getStudents } from "../controllers/student.js";

// Auth
router.post("/", auth, addStudent);


// NO Auth
router.get("/", getStudents);
router.get("/:id", getStudent);


export default router;