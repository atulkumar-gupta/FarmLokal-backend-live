"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookHandler = webhookHandler;
const uuid_1 = require("uuid");
const processed = new Set();
function webhookHandler(req, res) {
    const id = req.headers['x-event-id'] || (0, uuid_1.v4)();
    if (processed.has(id))
        return res.sendStatus(200);
    processed.add(id);
    res.sendStatus(200);
}
