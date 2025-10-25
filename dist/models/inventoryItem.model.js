"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class InventoryItem extends sequelize_1.Model {
    }
    InventoryItem.init({
        id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
        sku: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        quantity: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        metadata: { type: sequelize_1.DataTypes.JSONB, allowNull: true },
    }, {
        sequelize,
        tableName: 'inventory_items',
        underscored: true,
    });
    return InventoryItem;
};
