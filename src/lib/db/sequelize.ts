import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: console.log,
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Db connected successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
};
