import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: true }) // Automatically sync schema; use `{force: true}` in development to reset DB
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection failed:', err));

// Fixing the app.get callback by explicitly typing req and res
app.get('/', (req: Request, res: Response) => {
  res.send('Music Library API is running!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app; // Ensure this is exported for testing purposes
