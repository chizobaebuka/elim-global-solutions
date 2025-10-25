"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepository = void 0;
const models_1 = require("../models");
const Helper_1 = require("../utils/Helper");
class EmployeeRepository {
    static async create(data) {
        return await models_1.Employee.create(data);
    }
    static async findAll(limit, page) {
        const pageNumber = page ?? 1;
        const pageSize = limit ?? 10;
        const offset = (pageNumber - 1) * pageSize;
        const { count, rows } = await models_1.Employee.findAndCountAll({
            limit: pageSize,
            offset,
            order: [['created_at', 'DESC']],
        });
        return Helper_1.Helper.paginateResponse(rows, count, pageNumber, pageSize);
    }
    static async findById(id) {
        return await models_1.Employee.findByPk(id);
    }
    static async update(id, data) {
        const employee = await models_1.Employee.findByPk(id);
        if (!employee)
            return null;
        return await employee.update(data);
    }
    static async delete(id) {
        const employee = await models_1.Employee.findByPk(id);
        if (!employee)
            return null;
        await employee.destroy();
        return true;
    }
}
exports.EmployeeRepository = EmployeeRepository;
