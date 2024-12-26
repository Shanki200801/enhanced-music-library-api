import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import { Artist } from "../models/Artist";
import { Album } from "../models/Album";
import { Track } from "../models/Track";
import { Favorite } from "../models/Favorite";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME || "music_library",
  dialect: "postgres",
  username: process.env.DATABASE_USER || "user",
  password: process.env.DATABASE_PASSWORD || "password",
  host: process.env.DATABASE_HOST || "db",
  models: [User, Artist, Album, Track, Favorite], // Add all models here
  logging: false,
});

export default sequelize;
