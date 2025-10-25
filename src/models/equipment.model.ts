import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface EquipmentAttributes {
    id: string;
    name: string;
    serialNumber: string;
    categoryId?: string | null;
    metadata?: object | null;
    createdAt?: Date;
    updatedAt?: Date;
}

type EquipmentCreation = Optional<EquipmentAttributes, 'id' | 'categoryId' | 'metadata' | 'createdAt' | 'updatedAt'>;

export default (sequelize: Sequelize) => {
    class Equipment extends Model<EquipmentAttributes, EquipmentCreation> implements EquipmentAttributes {
        id!: string;
        name!: string;
        serialNumber!: string;
        categoryId?: string | null;
        metadata?: object | null;
    }

    Equipment.init(
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            name: { type: DataTypes.STRING, allowNull: false },
            serialNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
            categoryId: { type: DataTypes.UUID, allowNull: true },
            metadata: { type: DataTypes.JSONB, allowNull: true },
        },
        {
            sequelize,
            tableName: 'equipments',
            underscored: true,
        }
    );

    return Equipment;
};