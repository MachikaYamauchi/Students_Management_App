import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { addStudent, getStudent, getStudents, deleteStudent, updateStudent } from "../controllers/student.js";

// Auth
router.post("/", auth, addStudent);
router.delete("/:id", auth, deleteStudent);
router.patch("/:id", updateStudent);


// NO Auth
router.get("/", getStudents);
router.get("/:id", getStudent);


export default router;