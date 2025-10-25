import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
    static async register(req: Request, res: Response) {
        const result = await AuthService.register(req.body);
        res.status(201).json({ status: 'success', data: result });
    }

    static async login(req: Request, res: Response) {
        const result = await AuthService.login(req.body);
        res.status(200).json({ status: 'success', data: result });
    }

    static async getAll(req: Request, res: Response) {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const result = await AuthService.getAllUsers(page, limit);
        res.status(200).json({ status: 'success', ...result });
    }

    static async getById(req: Request, res: Response) {
        const { id } = req.params;
        const result = await AuthService.getUserById(id);
        res.status(200).json({ status: 'success', data: result });
    }

    static async update(req: Request, res: Response) {
        const result = await AuthService.updateUser(req.params.id, req.body);
        res.status(200).json({ status: 'success', data: result });
    }

    static async delete(req: Request, res: Response) {
        const result = await AuthService.deleteUser(req.params.id);
        res.status(200).json({ status: 'success', data: result });
    }
}