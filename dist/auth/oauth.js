"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = getToken;
const axios_1 = __importDefault(require("axios"));
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default();
async function getToken() {
    const cached = await redis.get('oauth_token');
    if (cached)
        return cached;
    const res = await axios_1.default.post('https://mock.oauth/token');
    const token = res.data.access_token;
    await redis.set('oauth_token', token, 'EX', 300);
    return token;
}
