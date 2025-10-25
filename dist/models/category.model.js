"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Category extends sequelize_1.Model {
    }
    Category.init({
        id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
        description: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    }, {
        sequelize,
        tableName: 'categories',
        underscored: true,
    });
    return Category;
};
