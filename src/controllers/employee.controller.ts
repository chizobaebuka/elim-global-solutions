import { Request, Response } from 'express';
import { EmployeeService } from '../services/employee.service';

export class EmployeeController {
    static async create(req: Request, res: Response) {
        const employee = await EmployeeService.create(req.body);
        res.status(201).json({ status: 'success', data: employee });
    }

    static async getAll(req: Request, res: Response) {
        const employees = await EmployeeService.getAll(req.query);
        res.status(200).json({ status: 'success', data: employees });
    }

    static async getById(req: Request, res: Response) {
        const employee = await EmployeeService.getById(req.params.id);
        if (!employee) return res.status(404).json({ status: 'fail', message: 'Employee not found' });

        res.status(200).json({ status: 'success', data: employee });
    }

    static async update(req: Request, res: Response) {
        const updated = await EmployeeService.update(req.params.id, req.body);
        if (!updated) return res.status(404).json({ status: 'fail', message: 'Employee not found' });

        res.status(200).json({ status: 'success', data: updated });
    }

    static async delete(req: Request, res: Response) {
        const deleted = await EmployeeService.delete(req.params.id);
        if (!deleted) return res.status(404).json({ status: 'fail', message: 'Employee not found' });

        res.status(204).send();
    }
}