import mongoose from "mongoose";
import config from "./config";

// se ejecuta automaticamente
(async () => {
  try {
    const db = await mongoose.connect(config.MONGODB_DATABASE);
    console.log("database is connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
