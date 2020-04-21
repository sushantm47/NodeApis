const Employee = require("../db/models/employee.model");

const createEmployee = async (req, res) => {
  const newEmployee = new Employee({
    ...req.body,
  });

  try {
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getEmployees = async (req, res) => {
  try {
    const { gender, minsalary = 0, environment } = req.query;

    let filter = {};

    if (minsalary) {
      filter = {
        ...filter,
        salary: { $gt: minsalary },
      };
    }

    if (environment) {
      filter = {
        ...filter,
        environment,
      };
    }

    if (gender) {
      filter = {
        ...filter,
        gender,
      };
    }
    const user = await Employee.find(
      {
        ...filter,
      },
      {
        name: 1,
        salary: 1,
        gender: 1,
        environment: 1,
      }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createEmployee,
  getEmployees,
};
