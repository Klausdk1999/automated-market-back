"use strict";
exports.__esModule = true;
var express_1 = require("express");
var paymentController_1 = require("../controllers/paymentController");
var paymentRouter = (0, express_1.Router)();
paymentRouter.post('/purchase', paymentController_1.receivePurchase);
paymentRouter.post('/picpay', paymentController_1.receiveInfo);
exports["default"] = paymentRouter;
