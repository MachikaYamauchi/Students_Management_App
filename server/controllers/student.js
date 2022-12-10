import StudentModal from "../models/student.js";

export const addStudent = async (req, res) => {
    const student = req.body;
    const newStudent = new StudentModal({
        ...student,
        editor:req.userId,
        editedAt: new Date().toISOString()
    });
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(404).json({message:"Something went wrong"})
    }
};



