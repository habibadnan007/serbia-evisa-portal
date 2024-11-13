"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, statusCode, format) => {
    var _a, _b, _c, _d;
    res
        .status(statusCode)
        .send({
        success: format === null || format === void 0 ? void 0 : format.success,
        meta: {
            total: (_a = format === null || format === void 0 ? void 0 : format.meta) === null || _a === void 0 ? void 0 : _a.total,
            totalPages: (_b = format === null || format === void 0 ? void 0 : format.meta) === null || _b === void 0 ? void 0 : _b.totalPages,
            page: (_c = format === null || format === void 0 ? void 0 : format.meta) === null || _c === void 0 ? void 0 : _c.page,
            limit: (_d = format === null || format === void 0 ? void 0 : format.meta) === null || _d === void 0 ? void 0 : _d.limit,
        },
        message: format === null || format === void 0 ? void 0 : format.message,
        data: (format === null || format === void 0 ? void 0 : format.data) || null,
    });
};
exports.default = sendResponse;
