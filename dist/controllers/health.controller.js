"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
const sequelize_1 = require("../lib/db/sequelize");
const health = (req, res) => {
    sequelize_1.sequelize.authenticate();
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
};
exports.health = health;
