import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface CategoryAttributes {
    id: string;
    name: string;
    description?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

type CategoryCreation = Optional<CategoryAttributes, 'id' | 'description' | 'createdAt' | 'updatedAt'>;

export default (sequelize: Sequelize) => {
    class Category extends Model<CategoryAttributes, CategoryCreation> implements CategoryAttributes {
        id!: string;
        name!: string;
        description?: string | null;
    }

    Category.init(
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            name: { type: DataTypes.STRING, allowNull: false, unique: true },
            description: { type: DataTypes.TEXT, allowNull: true },
        },
        {
            sequelize,
            tableName: 'categories',
            underscored: true,
        }
    );

    return Category;
};