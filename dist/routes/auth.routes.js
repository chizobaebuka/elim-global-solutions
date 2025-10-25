"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreate'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post('/register', (0, validation_middleware_1.validate)(user_validator_1.createUserSchema, 'body'), auth_controller_1.AuthController.register);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', (0, validation_middleware_1.validate)(user_validator_1.loginUserSchema, 'body'), auth_controller_1.AuthController.login);
/**
 * @swagger
 * /api/auth/users:
 *   get:
 *     summary: Get all users
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)('admin'), auth_controller_1.AuthController.getAll);
/**
 * @swagger
 * /api/auth/user/{id}:
 *   get:
 *     summary: Get a single user by ID
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get('/user/:id', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)('admin', 'user'), (0, validation_middleware_1.validate)(user_validator_1.userIdParamSchema, 'params'), auth_controller_1.AuthController.getById);
/**
 * @swagger
 * /api/auth/user/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
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
 *             $ref: '#/components/schemas/UserCreate'
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put('/user/:id', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)('admin', 'user'), (0, validation_middleware_1.validate)(user_validator_1.updateUserSchema, 'body'), auth_controller_1.AuthController.update);
/**
 * @swagger
 * /api/auth/user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete('/user/:id', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)('admin'), (0, validation_middleware_1.validate)(user_validator_1.userIdParamSchema, 'params'), auth_controller_1.AuthController.delete);
exports.default = router;
