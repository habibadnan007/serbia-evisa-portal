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
exports.visaServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const appError_1 = __importDefault(require("../../errors/appError"));
const visa_model_1 = __importDefault(require("./visa.model"));
const createVisa = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistVisa = yield visa_model_1.default.findOne({ passportNumber: payload === null || payload === void 0 ? void 0 : payload.passportNumber });
    if (isExistVisa) {
        throw new appError_1.default(http_status_codes_1.StatusCodes.CONFLICT, 'Visa already exists with this passport number!');
    }
    const result = yield visa_model_1.default.create(payload);
    return result;
});
const getAllVisa = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const visaQuery = new QueryBuilder_1.default(visa_model_1.default.find(), query)
        .searchQuery(['name', 'eVisaId', 'passportNumber'])
        .filterQuery()
        .paginateQuery()
        .sortQuery()
        .fieldFilteringQuery();
    const visas = yield visaQuery.queryModel;
    // Fetch total count of documents that match the query without pagination
    const totalVisas = yield visa_model_1.default.countDocuments();
    return { visas, totalVisas };
});
const getSingleVisa = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield visa_model_1.default.findOne({ eVisaId: id });
    return result;
});
const deleteVisa = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield visa_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateVisa = (id, updatedVisaData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield visa_model_1.default.findByIdAndUpdate(id, updatedVisaData, { new: true });
    return result;
});
exports.visaServices = {
    createVisa,
    getAllVisa,
    getSingleVisa,
    deleteVisa,
    updateVisa
};
