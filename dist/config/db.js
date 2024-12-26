"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
const Artist_1 = require("../models/Artist");
const Album_1 = require("../models/Album");
const Track_1 = require("../models/Track");
const Favorite_1 = require("../models/Favorite");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DATABASE_NAME || "music_library",
    dialect: "postgres",
    username: process.env.DATABASE_USER || "user",
    password: process.env.DATABASE_PASSWORD || "password",
    host: process.env.DATABASE_HOST || "db",
    models: [User_1.User, Artist_1.Artist, Album_1.Album, Track_1.Track, Favorite_1.Favorite], // Add all models here
    logging: false,
});
exports.default = sequelize;
