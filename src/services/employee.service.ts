import { EmployeeRepository } from '../repositories/employee.repo';
import { IEmployeeCreateDTO, IEmployeeUpdateDTO, IEmployeeQueryDTO } from '../dtos';

export class EmployeeService {
    static async create(data: IEmployeeCreateDTO) {
        return await EmployeeRepository.create(data);
    }

    static async getAll(query: IEmployeeQueryDTO) {
        return await EmployeeRepository.findAll(query.limit, query.page);
    }

    static async getById(id: string) {
        return await EmployeeRepository.findById(id);
    }

    static async update(id: string, data: IEmployeeUpdateDTO) {
        return await EmployeeRepository.update(id, data);
    }

    static async delete(id: string) {
        return await EmployeeRepository.delete(id);
    }
}