export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: { title: 'Equipment Dispatch API (MVP)', version: '1.0.0' },
        servers: [{ url: process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}/api` }]
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};
