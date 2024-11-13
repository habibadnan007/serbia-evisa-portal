"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visaZodValidation = void 0;
const zod_1 = require("zod");
const createVisaZodValidation = zod_1.z.object({
    userImg: zod_1.z.string(),
    dateOfApplication: zod_1.z.string(),
    surName: zod_1.z.string(),
    name: zod_1.z.string(),
    dob: zod_1.z.string(),
    sex: zod_1.z.enum(["MALE", "FEMALE", "OTHER"]),
    category: zod_1.z.enum(["РАД / WORK", "ТУРИСТ / TOURIST", "БИЗНИС / BUSINESS"]),
    travelDocumentNumber: zod_1.z.string(),
    validityStart: zod_1.z.string(),
    validityEnd: zod_1.z.string(),
    duration: zod_1.z.string(),
    numberOfentries: zod_1.z.string(),
    grantDecisionNumber: zod_1.z.string(),
    grantDecisionDate: zod_1.z.string(),
    passportNumber: zod_1.z.string(),
});
const updateVisaZodValidation = zod_1.z.object({
    userImg: zod_1.z.string().optional(),
    dateOfApplication: zod_1.z.string().optional(),
    surName: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    dob: zod_1.z.string().optional(),
    sex: zod_1.z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
    category: zod_1.z
        .enum(["РАД / WORK", "ТУРИСТ / TOURIST", "БИЗНИС / BUSINESS"])
        .optional(),
    travelDocumentNumber: zod_1.z.string().optional(),
    validityStart: zod_1.z.string().optional(),
    validityEnd: zod_1.z.string().optional(),
    duration: zod_1.z.string().optional(),
    numberOfentries: zod_1.z.string().optional(),
    grantDecisionNumber: zod_1.z.string().optional(),
    grantDecisionDate: zod_1.z.string().optional(),
    passportNumber: zod_1.z.string().optional(),
});
exports.visaZodValidation = {
    createVisaZodValidation,
    updateVisaZodValidation,
};
