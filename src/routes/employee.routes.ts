import { Router } from 'express';
import { EmployeeController } from '../controllers/employee.controller';
import { validate } from '../middlewares/validation.middleware';
import { createEmployeeSchema, updateEmployeeSchema, employeeIdParamSchema } from '../validators/employee.validator';

const router = Router();

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
router.post('/', validate(createEmployeeSchema, 'body'), EmployeeController.create);

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
router.get('/', EmployeeController.getAll);

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
router.get('/:id', validate(employeeIdParamSchema, 'params'), EmployeeController.getById);

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
router.put('/:id', validate(employeeIdParamSchema, 'params'), validate(updateEmployeeSchema, 'body'), EmployeeController.update);

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
router.delete('/:id', validate(employeeIdParamSchema, 'params'), EmployeeController.delete);

export default router;