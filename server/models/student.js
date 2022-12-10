import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: String,
    year: String,
    address: String,
    email: String,
    phoneNumber: String,
    graduationHighSchool: String,
    gender: String,
    description: String,
    participationNumber: String,
    imageFile: String,
    editor: String,
    editedAt: {
        type: Date,
        default: new Date()
    }
});

const StudentModal = mongoose.model("Student", studentSchema);

export default StudentModal;