"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const category_validator_1 = require("../validators/category.validator");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeCreate'
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', (0, validation_middleware_1.validate)(category_validator_1.createCategorySchema, 'body'), category_controller_1.CategoryController.create);
/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories (paginated)
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of categories
 */
router.get('/', category_controller_1.CategoryController.getAll);
/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get a single category by ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category data
 *       404:
 *         description: Category not found
 */
router.get('/:id', (0, validation_middleware_1.validate)(category_validator_1.categoryIdParamSchema, 'params'), category_controller_1.CategoryController.getById);
/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Update category by ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeUpdate'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       404:
 *         description: Category not found
 */
router.put('/:id', (0, validation_middleware_1.validate)(category_validator_1.categoryIdParamSchema, 'params'), (0, validation_middleware_1.validate)(category_validator_1.updateCategorySchema, 'body'), category_controller_1.CategoryController.update);
/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete category by ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Category ID
 *     responses:
 *       204:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete('/:id', (0, validation_middleware_1.validate)(category_validator_1.categoryIdParamSchema, 'params'), category_controller_1.CategoryController.delete);
exports.default = router;
