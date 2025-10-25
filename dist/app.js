"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const logger_1 = require("./lib/logger/logger");
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./config/swagger");
const error_middleware_1 = require("./middlewares/error.middleware");
const health_routes_1 = __importDefault(require("./routes/health.routes"));
class App {
    static async init() {
        const app = (0, express_1.default)();
        app.use((0, helmet_1.default)());
        app.use((0, cors_1.default)());
        app.use(express_1.default.json({ limit: '10mb' }));
        app.use(express_1.default.urlencoded({ extended: true }));
        // morgan -> winston
        app.use((0, morgan_1.default)('combined', { stream: logger_1.stream }));
        // swagger
        const swaggerSpec = (0, swagger_jsdoc_1.default)(swagger_1.swaggerOptions);
        app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
        // routes
        app.use('/api', routes_1.default);
        app.use('/health', health_routes_1.default);
        // error handler
        app.use(error_middleware_1.errorHandler);
        return app;
    }
}
exports.App = App;
