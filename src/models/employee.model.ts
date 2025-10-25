import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface EmployeeAttributes {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

type EmployeeCreation = Optional<EmployeeAttributes, 'id' | 'phone' | 'role' | 'createdAt' | 'updatedAt'>;

export default (sequelize: Sequelize) => {
    class Employee extends Model<EmployeeAttributes, EmployeeCreation> implements EmployeeAttributes {
        id!: string;
        firstName!: string;
        lastName!: string;
        email!: string;
        phone?: string | null;
        role?: string;
    }

    Employee.init({
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
        phone: { type: DataTypes.STRING, allowNull: true },
        role: { type: DataTypes.STRING, allowNull: true, defaultValue: 'USER' },
    }, {
        sequelize,
        tableName: 'employees',
        underscored: true,
    });

    return Employee;
};