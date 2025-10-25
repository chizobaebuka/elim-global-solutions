import { execSync } from "child_process";
import path from "path";

const migrationsDir = path.resolve("src/lib/db/migrations");

try {
    console.log("Generating migration based on model changes...");

    // Run the sequelize-auto-migrations diff generator
    execSync(
        `npx sequelize-auto-migrations --migrations-path ${migrationsDir} --config src/lib/db/config/config.js`,
        { stdio: "inherit" }
    );

    console.log("Migration generated successfully!");
} catch (err) {
    console.error("Error generating migration:", err);
    process.exit(1);
}