"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Job extends sequelize_1.Model {
    }
    Job.init({
        id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
        reference: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
        equipmentId: { type: sequelize_1.DataTypes.UUID, allowNull: true },
        assignedToId: { type: sequelize_1.DataTypes.UUID, allowNull: true },
        status: { type: sequelize_1.DataTypes.STRING, allowNull: false, defaultValue: 'PENDING' },
        details: { type: sequelize_1.DataTypes.JSONB, allowNull: true },
        startAt: { type: sequelize_1.DataTypes.DATE, allowNull: true },
        endAt: { type: sequelize_1.DataTypes.DATE, allowNull: true },
    }, {
        sequelize,
        tableName: 'jobs',
        underscored: true,
    });
    return Job;
};
