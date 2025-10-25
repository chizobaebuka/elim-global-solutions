import { CategoryRepository } from '../repositories/category.repo';
import { ICategoryCreateDTO, ICategoryUpdateDTO, ICategoryQueryDTO } from '../dtos';

export class CategoryService {
    static async create(data: ICategoryCreateDTO) {
        return await CategoryRepository.create(data);
    }

    static async getAll(query: ICategoryQueryDTO) {
        return await CategoryRepository.findAll(query.limit, query.page);
    }

    static async getById(id: string) {
        return await CategoryRepository.findById(id);
    }

    static async update(id: string, data: ICategoryUpdateDTO) {
        return await CategoryRepository.update(id, data);
    }

    static async delete(id: string) {
        return await CategoryRepository.delete(id);
    }
}