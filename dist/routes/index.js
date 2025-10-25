"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_routes_1 = __importDefault(require("../routes/health.routes"));
// import jobRouter from './job.routes'; // we'll create a minimal health route and a placeholder job route later
const router = (0, express_1.Router)();
router.use('/', health_routes_1.default);
// keep docs for later routes; safe if job.routes.ts not present yet
try {
    // router.use('/jobs', jobRouter);
}
catch (e) { }
exports.default = router;
