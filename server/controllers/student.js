import mongoose from "mongoose";
import StudentModel from "../models/student.js";

export const addStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    faculty,
    department,
    year,
    address,
    graduatedSchool,
    description,
    imageFile,
  } = req.body;

  const newStudent = new StudentModel({
    name: `${firstName} ${lastName}`,
    email,
    phoneNumber,
    faculty,
    department,
    year,
    address,
    graduatedSchool,
    description,
    participationNumber: 0,
    imageFile,
    editor: req.userId,
    editedAt: new Date().toISOString(),
  });
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentModel.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No Student exist woth id: ${id}` });
    }
    await StudentModel.findByIdAndDelete(id);
    res.json({ message: "Cafe Deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    faculty,
    department,
    year,
    address,
    graduatedSchool,
    description,
    participationNumber,
    imageFile,
    editor
  } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(404)
          .json({ message: `No Student exist woth id: ${id}` });
    }
    const updatedStudent = {
        firstName,
        lastName,
        email,
        phoneNumber,
        faculty,
        department,
        year,
        address,
        graduatedSchool,
        description,
        participationNumber,
        imageFile,
        editor,
        _id:id
    }
    await StudentModel.findByIdAndUpdate(id, updatedStudent, {new:true});
    res.json(updatedStudent);
  } catch (error) {
    res.status(404).json({message:"Something went wrong"});
  }
};
