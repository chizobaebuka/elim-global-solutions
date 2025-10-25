"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isRenderOrRemote = process.env.DATABASE_URL?.includes("render.com") || process.env.NODE_ENV === "production";
exports.sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: isRenderOrRemote
        ? {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
        : {},
    pool: {
        max: 10,
        min: 1,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
});
const connectDB = async () => {
    try {
        await exports.sequelize.authenticate();
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
