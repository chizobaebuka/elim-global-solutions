import { Request, Response, NextFunction } from 'express';
import { Helper } from '../utils/Helper';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return res.status(401).json({ message: 'Unauthorized' });

        const token = authHeader.split(' ')[1];
        const decoded = Helper.verifyToken(token) as any;
        console.log('Decoded token:', decoded);
        (req as any).user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export const authorize = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;
        if (!roles.includes(user.userType))
            return res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
        next();
    };
};