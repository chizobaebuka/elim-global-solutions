"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    static async register(req, res) {
        const result = await auth_service_1.AuthService.register(req.body);
        res.status(201).json({ status: 'success', data: result });
    }
    static async login(req, res) {
        const result = await auth_service_1.AuthService.login(req.body);
        res.status(200).json({ status: 'success', data: result });
    }
    static async getAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const result = await auth_service_1.AuthService.getAllUsers(page, limit);
        res.status(200).json({ status: 'success', ...result });
    }
    static async getById(req, res) {
        const { id } = req.params;
        const result = await auth_service_1.AuthService.getUserById(id);
        res.status(200).json({ status: 'success', data: result });
    }
    static async update(req, res) {
        const result = await auth_service_1.AuthService.updateUser(req.params.id, req.body);
        res.status(200).json({ status: 'success', data: result });
    }
    static async delete(req, res) {
        const result = await auth_service_1.AuthService.deleteUser(req.params.id);
        res.status(200).json({ status: 'success', data: result });
    }
}
exports.AuthController = AuthController;
