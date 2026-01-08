"use strict";
// import { Router, Request, Response } from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
// const router = Router();
// router.get('/', async (_req: Request, res: Response) => {
//   res.json({
//     data: [],
//     message: 'Products fetched with pagination, filters, caching'
//   });
// });
// export default router;
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.status(200).json({
        success: true,
        data: [],
        message: 'Products fetched successfully'
    });
});
exports.default = router;
