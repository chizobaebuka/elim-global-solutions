import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface InventoryItemAttributes {
    id: string;
    sku: string;
    name: string;
    quantity: number;
    metadata?: object | null;
    createdAt?: Date;
    updatedAt?: Date;
}

type InventoryItemCreation = Optional<InventoryItemAttributes, 'id' | 'metadata' | 'createdAt' | 'updatedAt'>;

export default (sequelize: Sequelize) => {
    class InventoryItem extends Model<InventoryItemAttributes, InventoryItemCreation> implements InventoryItemAttributes {
        id!: string;
        sku!: string;
        name!: string;
        quantity!: number;
        metadata?: object | null;
    }

    InventoryItem.init({
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        sku: { type: DataTypes.STRING, allowNull: false, unique: true },
        name: { type: DataTypes.STRING, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        metadata: { type: DataTypes.JSONB, allowNull: true },
    }, {
        sequelize,
        tableName: 'inventory_items',
        underscored: true,
    });

    return InventoryItem;
};