"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../services/category.service");
class CategoryController {
    static async create(req, res) {
        const category = await category_service_1.CategoryService.create(req.body);
        res.status(201).json({ status: 'success', data: category });
    }
    static async getAll(req, res) {
        const categories = await category_service_1.CategoryService.getAll(req.query);
        res.status(200).json({ status: 'success', data: categories });
    }
    static async getById(req, res) {
        const category = await category_service_1.CategoryService.getById(req.params.id);
        if (!category)
            return res.status(404).json({ status: 'fail', message: 'Category not found' });
        res.status(200).json({ status: 'success', data: category });
    }
    static async update(req, res) {
        const updated = await category_service_1.CategoryService.update(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ status: 'fail', message: 'Category not found' });
        res.status(200).json({ status: 'success', data: updated });
    }
    static async delete(req, res) {
        const deleted = await category_service_1.CategoryService.delete(req.params.id);
        if (!deleted)
            return res.status(404).json({ status: 'fail', message: 'Category not found' });
        res.status(204).send();
    }
}
exports.CategoryController = CategoryController;
