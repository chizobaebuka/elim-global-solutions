"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const models_1 = require("../models");
const Helper_1 = require("../utils/Helper");
class CategoryRepository {
    static async create(data) {
        return await models_1.Category.create(data);
    }
    static async findAll(limit, page) {
        const pageNumber = page ?? 1;
        const pageSize = limit ?? 10;
        const offset = (pageNumber - 1) * pageSize;
        const { count, rows } = await models_1.Category.findAndCountAll({
            limit: pageSize,
            offset,
            order: [['created_at', 'DESC']],
        });
        return Helper_1.Helper.paginateResponse(rows, count, pageNumber, pageSize);
    }
    static async findById(id) {
        return await models_1.Category.findByPk(id);
    }
    static async update(id, data) {
        const category = await models_1.Category.findByPk(id);
        if (!category)
            return null;
        return await category.update(data);
    }
    static async delete(id) {
        const category = await models_1.Category.findByPk(id);
        if (!category)
            return null;
        await category.destroy();
        return true;
    }
}
exports.CategoryRepository = CategoryRepository;
