import { Sequelize, DataTypes, Model } from 'sequelize';

export default (sequelize: Sequelize) => {
    class JobInventory extends Model {
        id!: string;
        jobId!: string;
        inventoryItemId!: string;
        quantity!: number;
    }

    JobInventory.init({
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        jobId: { type: DataTypes.UUID, allowNull: false },
        inventoryItemId: { type: DataTypes.UUID, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    }, {
        sequelize,
        tableName: 'job_inventories',
        underscored: true,
    });

    return JobInventory;
};