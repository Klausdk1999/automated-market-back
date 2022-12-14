"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addPicPay = exports.addPurchase = exports.create_purchase = exports.getByEPC = exports.insert = exports.findAll = void 0;
var database_1 = __importDefault(require("../config/database"));
function findAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].ePC.findMany()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.findAll = findAll;
function insert(code, product_id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].$queryRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["INSERT INTO epcs (code, product_id ,purchase_id) VALUES (", ", ", ", 0);"], ["INSERT INTO epcs (code, product_id ,purchase_id) VALUES (", ", ", ", 0);"])), code, product_id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.insert = insert;
function getByEPC(codigo) {
    return __awaiter(this, void 0, void 0, function () {
        var product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].$queryRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      SELECT * FROM products\n      JOIN epcs ON products.id = epcs.product_id\n      WHERE epcs.code = ", ";"], ["\n      SELECT * FROM products\n      JOIN epcs ON products.id = epcs.product_id\n      WHERE epcs.code = ", ";"])), codigo)];
                case 1:
                    product = _a.sent();
                    console.log(product);
                    return [2 /*return*/, product];
            }
        });
    });
}
exports.getByEPC = getByEPC;
function create_purchase() {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].$queryRaw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["INSERT INTO purchases (owner_id) VALUES (1) RETURNING id;"], ["INSERT INTO purchases (owner_id) VALUES (1) RETURNING id;"])))];
                case 1:
                    id = _a.sent();
                    return [2 /*return*/, id[0].id];
            }
        });
    });
}
exports.create_purchase = create_purchase;
function addPurchase(epc, purchase_id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: // update EPC com purchase id
                return [4 /*yield*/, database_1["default"].$queryRaw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["UPDATE epcs SET purchase_id=", " WHERE epcs.code=", " ;"], ["UPDATE epcs SET purchase_id=", " WHERE epcs.code=", " ;"])), purchase_id, epc)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addPurchase = addPurchase;
function addPicPay(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].$queryRaw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["UPDATE purchases SET reference_id = ", ", payment_url=", "  WHERE purchases.id = ", " ;"], ["UPDATE purchases SET reference_id = ", ", payment_url=", "  WHERE purchases.id = ", " ;"])), data.reference_id, data.payment_url, data.id)];
                case 1: // update picpay info no purchase
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.addPicPay = addPicPay;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
