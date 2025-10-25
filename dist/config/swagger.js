"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: { title: 'Equipment Dispatch API (MVP)', version: '1.0.0' },
        servers: [{ url: process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}/api` }]
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};
