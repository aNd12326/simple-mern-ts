import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URI);

export default {
  MONGODB_DATABASE: `${process.env.MONGO_URI}`,
  PORT: process.env.PORT,
};
