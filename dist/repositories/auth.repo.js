"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const models_1 = require("../models");
const Helper_1 = require("../utils/Helper");
class AuthRepository {
    static async create(data) {
        return await models_1.User.create(data);
    }
    static async findByEmail(email) {
        return await models_1.User.findOne({ where: { email } });
    }
    static async findById(id) {
        return await models_1.User.findByPk(id);
    }
    static async findAll(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const { count, rows } = await models_1.User.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']],
        });
        return Helper_1.Helper.paginateResponse(rows, count, page, limit);
    }
    static async update(id, data) {
        const user = await models_1.User.findByPk(id);
        if (!user)
            return null;
        return await user.update(data);
    }
    static async delete(id) {
        const user = await models_1.User.findByPk(id);
        if (!user)
            return null;
        await user.destroy();
        return true;
    }
}
exports.AuthRepository = AuthRepository;
