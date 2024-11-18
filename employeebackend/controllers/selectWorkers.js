import { conn } from "../database/connection.js"

export const GetAllWorkers = async (req, res) => {
    try {
      const [result] = await conn.promise().query(`SELECT * FROM workers`);
      return res.status(200).json({
        msg: "Workers retrieved successfully",
        data: result,
      });
    } catch (err) {
      return res.status(500).json({
        msg: "Error occurred while fetching workers",
        error: err.message,
      });
    }
  };
  