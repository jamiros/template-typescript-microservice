"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** src/routes/posts.ts */
const express_1 = __importDefault(require("express"));
const endpoints_1 = __importDefault(require("../controllers/endpoints"));
const router = express_1.default.Router();
router.get('/', endpoints_1.default.mainEndpoint);
module.exports = router;
