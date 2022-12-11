import StudentModel from "../models/student.js";

export const addStudent = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, year, address, graduatedSchool, description, imageFile } = req.body;

    const newStudent = new StudentModel({
        name: `${firstName} ${lastName}`,
        email,
        phoneNumber,
        year,
        address,
        graduatedSchool,
        description,
        participationNumber:0,
        imageFile,
        editor: req.userId,
        editedAt: new Date().toISOString()
    });
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(404).json({message:"Something went wrong"})
    }
};



