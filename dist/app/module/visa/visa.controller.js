"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.visaControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const visa_service_1 = require("./visa.service");
const createVisa = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const visa = yield visa_service_1.visaServices.createVisa(payload);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Visa inserted successfully!",
        data: visa,
    });
}));
const getAllVisa = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { visas, totalVisas } = yield visa_service_1.visaServices.getAllVisa(req.query);
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const totalPages = Math.ceil(totalVisas / limit);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        meta: { total: totalVisas, page, totalPages, limit },
        message: "Visas are retrieved successfully!",
        data: visas,
    });
}));
const getSingleVisa = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const visa = yield visa_service_1.visaServices.getSingleVisa((_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
    if (!visa) {
        throw new Error("Visa is not found!");
    }
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Visa is retrieved successfully!",
        data: visa,
    });
}));
const deleteVisa = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const visa = yield visa_service_1.visaServices.deleteVisa((_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Visa is deleted successfully!",
        data: visa,
    });
}));
const updateVisa = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const payload = req.body;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    const visa = yield visa_service_1.visaServices.updateVisa(id, payload);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Visa inserted successfully!",
        data: visa,
    });
}));
exports.visaControllers = {
    createVisa,
    getAllVisa,
    getSingleVisa,
    deleteVisa,
    updateVisa,
};
