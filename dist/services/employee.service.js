"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const employee_repo_1 = require("../repositories/employee.repo");
class EmployeeService {
    static async create(data) {
        return await employee_repo_1.EmployeeRepository.create(data);
    }
    static async getAll(query) {
        return await employee_repo_1.EmployeeRepository.findAll(query.limit, query.page);
    }
    static async getById(id) {
        return await employee_repo_1.EmployeeRepository.findById(id);
    }
    static async update(id, data) {
        return await employee_repo_1.EmployeeRepository.update(id, data);
    }
    static async delete(id) {
        return await employee_repo_1.EmployeeRepository.delete(id);
    }
}
exports.EmployeeService = EmployeeService;
