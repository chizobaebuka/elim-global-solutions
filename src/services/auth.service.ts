import bcrypt from 'bcryptjs';
import { AuthRepository } from '../repositories/auth.repo';
import { IUserCreateDTO, IUserLoginDTO } from '../dtos/user.dto';
import { Helper } from '../utils/Helper';

export class AuthService {
    static async register(data: IUserCreateDTO) {
        const existing = await AuthRepository.findByEmail(data.email);
        if (existing) throw new Error('User already exists');

        const hashedPassword = await Helper.hashPassword(data.password);
        const newUser = await AuthRepository.create({ ...data, password: hashedPassword });
        return { id: newUser.id, name: newUser.name, email: newUser.email, userType: newUser.userType };
    }

    static async login(data: IUserLoginDTO) {
        const user = await AuthRepository.findByEmail(data.email);
        if (!user) throw new Error('Invalid credentials');

        const valid = await Helper.comparePassword(data.password, user.password);
        if (!valid) throw new Error('Invalid credentials');

        const token = Helper.generateToken({ id: user.id, userType: user.userType });
        return { token, user: { id: user.id, name: user.name, email: user.email, userType: user.userType } };
    }

    static async getAllUsers(page: number = 1, limit: number = 10) {
        return await AuthRepository.findAll(page, limit);
    }

    static async getUserById(id: string) {
        const user = await AuthRepository.findById(id);
        if (!user) throw new Error('User not found');
        return user;
    }

    static async updateUser(id: string, data: Partial<IUserCreateDTO>) {
        if (data.password) data.password = await bcrypt.hash(data.password, 10);
        const updated = await AuthRepository.update(id, data);
        if (!updated) throw new Error('User not found');
        return updated;
    }

    static async deleteUser(id: string) {
        const deleted = await AuthRepository.delete(id);
        if (!deleted) throw new Error('User not found');
        return { message: 'User deleted successfully' };
    }
}