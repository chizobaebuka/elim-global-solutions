"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobInventory = exports.InventoryItem = exports.Job = exports.Employee = exports.sequelize = void 0;
const sequelize_1 = require("../lib/db/sequelize");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return sequelize_1.sequelize; } });
// import EquipmentModel from './equipment.model';
const employee_model_1 = __importDefault(require("./employee.model"));
// import CategoryModel from './category.model';
const job_model_1 = __importDefault(require("./job.model"));
const inventoryItem_model_1 = __importDefault(require("./inventoryItem.model"));
const jobInventory_model_1 = __importDefault(require("./jobInventory.model"));
// Initialize models
// const Equipment = EquipmentModel(sequelize);
const Employee = (0, employee_model_1.default)(sequelize_1.sequelize);
exports.Employee = Employee;
// const Category = CategoryModel(sequelize);
const Job = (0, job_model_1.default)(sequelize_1.sequelize);
exports.Job = Job;
const InventoryItem = (0, inventoryItem_model_1.default)(sequelize_1.sequelize);
exports.InventoryItem = InventoryItem;
const JobInventory = (0, jobInventory_model_1.default)(sequelize_1.sequelize);
exports.JobInventory = JobInventory;
// Associations
// Category.hasMany(Equipment, { foreignKey: 'category_id', as: 'equipment' });
// Equipment.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
// Equipment.hasMany(Job, { foreignKey: 'equipment_id', as: 'jobs' });
// Job.belongsTo(Equipment, { foreignKey: 'equipment_id', as: 'equipment' });
Employee.hasMany(Job, { foreignKey: 'assigned_to_id', as: 'assignedJobs' });
Job.belongsTo(Employee, { foreignKey: 'assigned_to_id', as: 'assignee' });
// Many-to-many Job <-> InventoryItem through JobInventory
Job.belongsToMany(InventoryItem, { through: JobInventory, foreignKey: 'job_id', otherKey: 'inventory_item_id', as: 'items' });
InventoryItem.belongsToMany(Job, { through: JobInventory, foreignKey: 'inventory_item_id', otherKey: 'job_id', as: 'jobs' });
