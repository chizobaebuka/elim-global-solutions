import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface IUserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
    userType: 'admin' | 'user';
    createdAt?: Date;
    updatedAt?: Date;
}

type IUserCreation = Optional<IUserAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export default (sequelize: Sequelize) => {
    class User extends Model<IUserAttributes, IUserCreation> implements IUserAttributes {
        id!: string;
        name!: string;
        email!: string;
        password!: string;
        userType!: 'admin' | 'user';
    }

    User.init(
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            name: { type: DataTypes.STRING, allowNull: false },
            email: { type: DataTypes.STRING, allowNull: false, unique: true },
            password: { type: DataTypes.STRING, allowNull: false },
            userType: { type: DataTypes.ENUM('admin', 'user'), allowNull: false, defaultValue: 'user' },
        },
        {
            sequelize,
            tableName: 'users',
            underscored: true,
        }
    );

    return User;
};