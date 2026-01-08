"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchExternalData = fetchExternalData;
const axios_1 = __importDefault(require("axios"));
async function fetchExternalData() {
    return axios_1.default.get('https://jsonplaceholder.typicode.com/posts', {
        timeout: 3000
    });
}
