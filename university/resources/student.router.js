const { Router } = require("express");

const {
  createStudent,
  generateHallTickets,
  eligibleNames,
} = require("./student.controller");

const studentRouter = Router();

studentRouter.post("/create", createStudent);
studentRouter.get("/hallticket", generateHallTickets);
studentRouter.get("/eligible", eligibleNames);

module.exports = studentRouter;
