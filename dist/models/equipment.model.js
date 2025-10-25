"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Equipment extends sequelize_1.Model {
    }
    Equipment.init({
        id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        serialNumber: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
        categoryId: { type: sequelize_1.DataTypes.UUID, allowNull: true },
        metadata: { type: sequelize_1.DataTypes.JSONB, allowNull: true },
    }, {
        sequelize,
        tableName: 'equipments',
        underscored: true,
    });
    return Equipment;
};
