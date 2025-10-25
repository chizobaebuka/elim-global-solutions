import { IPaginatedResponse } from '../dtos';
import { IUserCreateDTO } from '../dtos/user.dto';
import { User } from '../models';
import { Helper } from '../utils/Helper';

export class AuthRepository {
    static async create(data: IUserCreateDTO) {
        return await User.create(data);
    }

    static async findByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    static async findById(id: string) {
        return await User.findByPk(id);
    }

    static async findAll(page: number = 1, limit: number = 10): Promise<IPaginatedResponse<any>> {
        const offset = (page - 1) * limit;
        const { count, rows } = await User.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']],
        });
        return Helper.paginateResponse(rows, count, page, limit);
    }

    static async update(id: string, data: Partial<IUserCreateDTO>) {
        const user = await User.findByPk(id);
        if (!user) return null;
        return await user.update(data);
    }

    static async delete(id: string) {
        const user = await User.findByPk(id);
        if (!user) return null;
        await user.destroy();
        return true;
    }
}