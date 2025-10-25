"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const employee_service_1 = require("../services/employee.service");
class EmployeeController {
    static async create(req, res) {
        const employee = await employee_service_1.EmployeeService.create(req.body);
        res.status(201).json({ status: 'success', data: employee });
    }
    static async getAll(req, res) {
        const employees = await employee_service_1.EmployeeService.getAll(req.query);
        res.status(200).json({ status: 'success', data: employees });
    }
    static async getById(req, res) {
        const employee = await employee_service_1.EmployeeService.getById(req.params.id);
        if (!employee)
            return res.status(404).json({ status: 'fail', message: 'Employee not found' });
        res.status(200).json({ status: 'success', data: employee });
    }
    static async update(req, res) {
        const updated = await employee_service_1.EmployeeService.update(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ status: 'fail', message: 'Employee not found' });
        res.status(200).json({ status: 'success', data: updated });
    }
    static async delete(req, res) {
        const deleted = await employee_service_1.EmployeeService.delete(req.params.id);
        if (!deleted)
            return res.status(404).json({ status: 'fail', message: 'Employee not found' });
        res.status(204).send();
    }
}
exports.EmployeeController = EmployeeController;
