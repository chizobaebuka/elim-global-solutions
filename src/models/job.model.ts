import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface JobAttributes {
    id: string;
    reference: string;
    equipmentId?: string | null;
    assignedToId?: string | null; // employee id
    status: string;
    details?: object | null;
    startAt?: Date | null;
    endAt?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}

type JobCreation = Optional<JobAttributes, 'id' | 'equipmentId' | 'assignedToId' | 'details' | 'startAt' | 'endAt' | 'createdAt' | 'updatedAt'>;

export default (sequelize: Sequelize) => {
    class Job extends Model<JobAttributes, JobCreation> implements JobAttributes {
        id!: string;
        reference!: string;
        equipmentId?: string | null;
        assignedToId?: string | null;
        status!: string;
        details?: object | null;
        startAt?: Date | null;
        endAt?: Date | null;
    }

    Job.init({
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        reference: { type: DataTypes.STRING, allowNull: false, unique: true },
        equipmentId: { type: DataTypes.UUID, allowNull: true },
        assignedToId: { type: DataTypes.UUID, allowNull: true },
        status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'PENDING' },
        details: { type: DataTypes.JSONB, allowNull: true },
        startAt: { type: DataTypes.DATE, allowNull: true },
        endAt: { type: DataTypes.DATE, allowNull: true },
    }, {
        sequelize,
        tableName: 'jobs',
        underscored: true,
    });

    return Job;
};