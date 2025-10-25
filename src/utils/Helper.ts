import jwt, { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { IPaginatedResponse } from '../dtos';

export class Helper {
    static generateToken(payload: object, expiresIn: string | number = '2d') {
        const secret = process.env.JWT_SECRET!;
        return jwt.sign(payload, secret as string, { expiresIn } as SignOptions);
    }

    static verifyToken(token: string): any {
        const secret = process.env.JWT_SECRET!;
        return jwt.verify(token, secret);
    }

    static getAuthToken(req: any): string | null {
        const authHeader = req.headers?.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
        return authHeader.split(' ')[1];
    }

    static async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    static async comparePassword(password: string, hashed: string): Promise<boolean> {
        return bcrypt.compare(password, hashed);
    }

    static paginateResponse<T>(
        data: T[],
        totalItems: number,
        page: number = 1,
        limit: number = 10
    ): IPaginatedResponse<T> {
        const totalPages = Math.ceil(totalItems / limit);
        return {
            data,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                pageSize: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
        };
    }
}