const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  usn: {
    type: String,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
  cie: {
    type: Number,
    required: true,
    max: 20,
  },
  branch: {
    type: String,
    required: true,
  },
});

const Student = model("Student", studentSchema);

module.exports = Student;
