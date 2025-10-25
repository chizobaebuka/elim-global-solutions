import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';

export class CategoryController {
    static async create(req: Request, res: Response) {
        const category = await CategoryService.create(req.body);
        res.status(201).json({ status: 'success', data: category });
    }

    static async getAll(req: Request, res: Response) {
        const categories = await CategoryService.getAll(req.query);
        res.status(200).json({ status: 'success', data: categories });
    }

    static async getById(req: Request, res: Response) {
        const category = await CategoryService.getById(req.params.id);
        if (!category) return res.status(404).json({ status: 'fail', message: 'Category not found' });

        res.status(200).json({ status: 'success', data: category });
    }

    static async update(req: Request, res: Response) {
        const updated = await CategoryService.update(req.params.id, req.body);
        if (!updated) return res.status(404).json({ status: 'fail', message: 'Category not found' });

        res.status(200).json({ status: 'success', data: updated });
    }

    static async delete(req: Request, res: Response) {
        const deleted = await CategoryService.delete(req.params.id);
        if (!deleted) return res.status(404).json({ status: 'fail', message: 'Category not found' });

        res.status(204).send();
    }
}