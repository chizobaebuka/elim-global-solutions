"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class JobInventory extends sequelize_1.Model {
    }
    JobInventory.init({
        id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
        jobId: { type: sequelize_1.DataTypes.UUID, allowNull: false },
        inventoryItemId: { type: sequelize_1.DataTypes.UUID, allowNull: false },
        quantity: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    }, {
        sequelize,
        tableName: 'job_inventories',
        underscored: true,
    });
    return JobInventory;
};
