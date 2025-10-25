export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Equipment Dispatch API (MVP)',
            version: '1.0.0',
        },
        servers: [
            { url: process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}` },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                UserCreate: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                        name: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        userType: { type: 'string', enum: ['admin', 'user'] },
                    },
                },
                UserLogin: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: { email: { type: 'string' }, password: { type: 'string' } },
                },
                EmployeeCreate: {
                    type: 'object',
                    required: ['firstName', 'lastName', 'email'],
                    properties: {
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        email: { type: 'string' },
                        phone: { type: 'string' },
                        role: { type: 'string', enum: ['USER', 'ADMIN'] },
                    },
                },
                EmployeeUpdate: {
                    type: 'object',
                    properties: {
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        email: { type: 'string' },
                        phone: { type: 'string' },
                        role: { type: 'string', enum: ['USER', 'ADMIN'] },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // your JSDoc files
};