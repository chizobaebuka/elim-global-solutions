"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_repo_1 = require("../repositories/auth.repo");
const Helper_1 = require("../utils/Helper");
class AuthService {
    static async register(data) {
        const existing = await auth_repo_1.AuthRepository.findByEmail(data.email);
        if (existing)
            throw new Error('User already exists');
        const hashedPassword = await Helper_1.Helper.hashPassword(data.password);
        const newUser = await auth_repo_1.AuthRepository.create({ ...data, password: hashedPassword });
        return { id: newUser.id, name: newUser.name, email: newUser.email, userType: newUser.userType };
    }
    static async login(data) {
        const user = await auth_repo_1.AuthRepository.findByEmail(data.email);
        if (!user)
            throw new Error('Invalid credentials');
        const valid = await Helper_1.Helper.comparePassword(data.password, user.password);
        if (!valid)
            throw new Error('Invalid credentials');
        const token = Helper_1.Helper.generateToken({ id: user.id, userType: user.userType });
        return { token, user: { id: user.id, name: user.name, email: user.email, userType: user.userType } };
    }
    static async getAllUsers(page = 1, limit = 10) {
        return await auth_repo_1.AuthRepository.findAll(page, limit);
    }
    static async getUserById(id) {
        const user = await auth_repo_1.AuthRepository.findById(id);
        if (!user)
            throw new Error('User not found');
        return user;
    }
    static async updateUser(id, data) {
        if (data.password)
            data.password = await bcryptjs_1.default.hash(data.password, 10);
        const updated = await auth_repo_1.AuthRepository.update(id, data);
        if (!updated)
            throw new Error('User not found');
        return updated;
    }
    static async deleteUser(id) {
        const deleted = await auth_repo_1.AuthRepository.delete(id);
        if (!deleted)
            throw new Error('User not found');
        return { message: 'User deleted successfully' };
    }
}
exports.AuthService = AuthService;
