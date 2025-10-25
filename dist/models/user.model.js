"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class User extends sequelize_1.Model {
    }
    User.init({
        id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
        password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        userType: { type: sequelize_1.DataTypes.ENUM('admin', 'user'), allowNull: false, defaultValue: 'user' },
    }, {
        sequelize,
        tableName: 'users',
        underscored: true,
    });
    return User;
};
