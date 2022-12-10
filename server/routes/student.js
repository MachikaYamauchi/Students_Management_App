import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { addStudent } from "../controllers/student.js";

router.post("/", auth, addStudent);

export default router;