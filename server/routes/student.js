import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { addStudent, getStudents } from "../controllers/student.js";

// Auth
router.post("/", auth, addStudent);


// NO Auth
router.get("/", getStudents);


export default router;