"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const employee_validator_1 = require("../validators/employee.validator");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeCreate'
 *     responses:
 *       201:
 *         description: Employee created
 */
router.post('/', (0, validation_middleware_1.validate)(employee_validator_1.createEmployeeSchema, 'body'), employee_controller_1.EmployeeController.create);
/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employee]
 *     responses:
 *       200:
 *         description: List of employees
 */
router.get('/', employee_controller_1.EmployeeController.getAll);
/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Get a single employee by ID
 *     tags: [Employee]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Employee found
 */
router.get('/:id', (0, validation_middleware_1.validate)(employee_validator_1.employeeIdParamSchema, 'params'), employee_controller_1.EmployeeController.getById);
/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Update an employee by ID
 *     tags: [Employee]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeUpdate'
 *     responses:
 *       200:
 *         description: Employee updated successfully
 */
router.put('/:id', (0, validation_middleware_1.validate)(employee_validator_1.employeeIdParamSchema, 'params'), (0, validation_middleware_1.validate)(employee_validator_1.updateEmployeeSchema, 'body'), employee_controller_1.EmployeeController.update);
/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     tags: [Employee]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */
router.delete('/:id', (0, validation_middleware_1.validate)(employee_validator_1.employeeIdParamSchema, 'params'), employee_controller_1.EmployeeController.delete);
exports.default = router;
