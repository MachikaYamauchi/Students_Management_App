import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    faculty:String,
    department:String,
    year: String,
    address: String,
    graduatedSchool: String,
    description: String,
    participationNumber: String,
    imageFile: String,
    editor: String,
    editedAt: {
        type: Date,
        default: new Date()
    }
});

const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;