import { conn } from "../database/connection.js";
import GenerateEmployeeId from "../utils/generateId.js";

export const RegisterWorkers = async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    email,
    department,
    dateofbirth,
    phoneNumber,
  } = req.body;
  if (
    !firstname ||
    !lastname ||
    !gender ||
    !email ||
    !department ||
    !dateofbirth ||
    !phoneNumber
  ) {
    return res.status(400).json({
      msg: "Please provide the missing details",
    });
  }

  const employeeId = GenerateEmployeeId(department, 1);
  console.log(employeeId);

  try {
    const [result] = await conn
      .promise()
      .query(
        "INSERT INTO workers (employeeId, firstname, lastname, dateofbirth, gender, department, email, phoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          employeeId,
          firstname,
          lastname,
          dateofbirth,
          gender,
          department,
          email,
          phoneNumber,
        ]
      );
    console.log("eeeee",result);
    
    return res.status(200).json({
      msg: "Worker registered successfully",
      data: { employeeId, firstname, lastname },
    });
  } catch (err) {
    return res.status(500).json({
      msg: "Error occurred while entering data",
      error: err.message,
    });
  }
};
