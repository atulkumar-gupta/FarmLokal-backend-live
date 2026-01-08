"use strict";
// import express from 'express';
// import { getToken } from './auth/oauth';
// import productRouter from './products/routes';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.use(express.json());
// app.use('/products', productRouter);
// app.get('/health', (_, res) => res.send('OK'));
// app.listen(3000, () => console.log('Server running on port 3000'));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./products/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/products', routes_1.default);
app.get('/health', (_req, res) => {
    res.send('OK');
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
