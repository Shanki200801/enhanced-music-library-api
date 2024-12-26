import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Only sync database when not in test environment
if (process.env.NODE_ENV !== 'test') {
  sequelize
    .sync({ alter: true })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection failed:", err));
}

app.get("/", (req: Request, res: Response) => {
  res.send("Music Library API is running!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export { app, sequelize };
