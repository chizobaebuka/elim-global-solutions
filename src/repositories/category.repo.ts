import { Category } from '../models';
import { ICategoryCreateDTO, ICategoryUpdateDTO } from '../dtos';
import { Helper } from '../utils/Helper';

export class CategoryRepository {
    static async create(data: ICategoryCreateDTO) {
        return await Category.create(data);
    }

    static async findAll(limit?: number, page?: number) {
        const pageNumber = page ?? 1;
        const pageSize = limit ?? 10;
        const offset = (pageNumber - 1) * pageSize;

        const { count, rows } = await Category.findAndCountAll({
            limit: pageSize,
            offset,
            order: [['created_at', 'DESC']],
        });

        return Helper.paginateResponse(rows, count, pageNumber, pageSize);
    }

    static async findById(id: string) {
        return await Category.findByPk(id);
    }

    static async update(id: string, data: ICategoryUpdateDTO) {
        const category = await Category.findByPk(id);
        if (!category) return null;

        return await category.update(data);
    }

    static async delete(id: string) {
        const category = await Category.findByPk(id);
        if (!category) return null;

        await category.destroy();
        return true;
    }
}