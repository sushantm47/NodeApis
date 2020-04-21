const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  environment: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
