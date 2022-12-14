"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var paymentController_1 = require("../controllers/paymentController");
var validateTokenMiddleware_1 = __importDefault(require("../middlewares/validateTokenMiddleware"));
var productRouter = (0, express_1.Router)();
productRouter.post('/purchase', validateTokenMiddleware_1["default"], paymentController_1.receivePurchase);
productRouter.post('/picpay', paymentController_1.receiveInfo);
exports["default"] = productRouter;
