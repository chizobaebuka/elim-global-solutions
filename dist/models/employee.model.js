"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Employee extends sequelize_1.Model {
    }
    Employee.init({
        id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
        firstName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        lastName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
        phone: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        role: { type: sequelize_1.DataTypes.STRING, allowNull: true, defaultValue: 'USER' },
    }, {
        sequelize,
        tableName: 'employees',
        underscored: true,
    });
    return Employee;
};
