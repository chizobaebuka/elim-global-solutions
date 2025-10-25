"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_repo_1 = require("../repositories/category.repo");
class CategoryService {
    static async create(data) {
        return await category_repo_1.CategoryRepository.create(data);
    }
    static async getAll(query) {
        return await category_repo_1.CategoryRepository.findAll(query.limit, query.page);
    }
    static async getById(id) {
        return await category_repo_1.CategoryRepository.findById(id);
    }
    static async update(id, data) {
        return await category_repo_1.CategoryRepository.update(id, data);
    }
    static async delete(id) {
        return await category_repo_1.CategoryRepository.delete(id);
    }
}
exports.CategoryService = CategoryService;
