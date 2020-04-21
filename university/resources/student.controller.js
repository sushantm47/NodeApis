const Student = require("../db/models/student.model");

const createStudent = async (req, res) => {
  const newStudent = new Student({
    ...req.body,
  });

  try {
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
};

const generateHallTickets = async (req, res) => {
  try {
    const user = await Student.find(
      { attendance: { $gt: 80 } },
      {
        name: 1,
        usn: 1,
        branch: 1,
      }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const eligibleNames = async (req, res) => {
  try {
    const user = await Student.find(
      { attendance: { $gt: 80 } }, //$gt selects the docs having value greater than 80
      {
        name: 1,
      }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createStudent,
  generateHallTickets,
  eligibleNames,
};
