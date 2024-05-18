import React from "react";
import pool from "../../../server/database";
const Message = () => {
  pool.query(`select * from locations`);
};

export default Message;
