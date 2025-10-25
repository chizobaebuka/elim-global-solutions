import { Employee } from '../models';
import { IEmployeeCreateDTO, IEmployeeUpdateDTO } from '../dtos';
import { Helper } from '../utils/Helper';

export class EmployeeRepository {
    static async create(data: IEmployeeCreateDTO) {
        return await Employee.create(data);
    }

    static async findAll(limit?: number, page?: number) {
        const pageNumber = page ?? 1;
        const pageSize = limit ?? 10;
        const offset = (pageNumber - 1) * pageSize;

        const { count, rows } = await Employee.findAndCountAll({
            limit: pageSize,
            offset,
            order: [['created_at', 'DESC']],
        });

        return Helper.paginateResponse(rows, count, pageNumber, pageSize);
    }

    static async findById(id: string) {
        return await Employee.findByPk(id);
    }

    static async update(id: string, data: IEmployeeUpdateDTO) {
        const employee = await Employee.findByPk(id);
        if (!employee) return null;

        return await employee.update(data);
    }

    static async delete(id: string) {
        const employee = await Employee.findByPk(id);
        if (!employee) return null;

        await employee.destroy();
        return true;
    }
}