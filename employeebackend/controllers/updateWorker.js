import { conn } from "../database/connection";

export const UpdateWorker = async (req, res) => {
  const { employeeId } = req.params;
  const { phoneNumber } = req.body;  // Assuming phoneNumber is sent in the request body

  if (!employeeId) {
    return res.status(400).json({
      msg: "Please provide the employee Id",
    });
  }

  if (!phoneNumber) {
    return res.status(400).json({
      msg: "Please provide the phone number",
    });
  }

  try {
    const [result] = await conn.promise().query(
      `UPDATE workers SET phoneNumber = ? WHERE id = ?`, 
      [phoneNumber, employeeId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        msg: "Employee not found",
      });
    }

    return res.status(200).json({
      msg: "Phone number updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};
