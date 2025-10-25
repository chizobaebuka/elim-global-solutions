import { sequelize } from '../lib/db/sequelize';
import EquipmentModel from './equipment.model';
import EmployeeModel from './employee.model';
import CategoryModel from './category.model';
import JobModel from './job.model';
import InventoryItemModel from './inventoryItem.model';
import JobInventoryModel from './jobInventory.model';

// Initialize models
const Equipment = EquipmentModel(sequelize);
const Employee = EmployeeModel(sequelize);
const Category = CategoryModel(sequelize);
const Job = JobModel(sequelize);
const InventoryItem = InventoryItemModel(sequelize);
const JobInventory = JobInventoryModel(sequelize);

// Associations
Category.hasMany(Equipment, { foreignKey: 'category_id', as: 'equipment' });
Equipment.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

Equipment.hasMany(Job, { foreignKey: 'equipment_id', as: 'jobs' });
Job.belongsTo(Equipment, { foreignKey: 'equipment_id', as: 'equipment' });

Employee.hasMany(Job, { foreignKey: 'assigned_to_id', as: 'assignedJobs' });
Job.belongsTo(Employee, { foreignKey: 'assigned_to_id', as: 'assignee' });

// Many-to-many Job <-> InventoryItem through JobInventory
Job.belongsToMany(InventoryItem, {
    through: JobInventory,
    foreignKey: 'job_id',
    otherKey: 'inventory_item_id',
    as: 'items',
});
InventoryItem.belongsToMany(Job, {
    through: JobInventory,
    foreignKey: 'inventory_item_id',
    otherKey: 'job_id',
    as: 'jobs',
});

export {
    sequelize,
    Equipment,
    Employee,
    Category,
    Job,
    InventoryItem,
    JobInventory
};