"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const migrationsDir = path_1.default.resolve("src/lib/db/migrations");
try {
    console.log("Generating migration based on model changes...");
    // Run the sequelize-auto-migrations diff generator
    (0, child_process_1.execSync)(`npx sequelize-auto-migrations --migrations-path ${migrationsDir} --config src/lib/db/config/config.js`, { stdio: "inherit" });
    console.log("Migration generated successfully!");
}
catch (err) {
    console.error("Error generating migration:", err);
    process.exit(1);
}
