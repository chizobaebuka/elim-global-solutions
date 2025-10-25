import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const isRenderOrRemote = process.env.DATABASE_URL?.includes("render.com") || process.env.NODE_ENV === "production";

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
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

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
};