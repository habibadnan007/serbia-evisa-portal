"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const generateRandomString_1 = require("../../utils/generateRandomString");
const generateVisaId_1 = require("../../utils/generateVisaId");
const visaSchema = new mongoose_1.default.Schema({
    userImg: { type: String, required: true },
    applicationId: { type: String },
    dateOfApplication: { type: String, required: true },
    surName: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    sex: { type: String, enum: ["MALE", "FEMALE", "OTHER"], required: true },
    category: {
        type: String,
        enum: ["РАД / WORK", "ТУРИСТ / TOURIST", "БИЗНИС / BUSINESS"],
        required: true,
    },
    travelDocumentNumber: { type: String, required: true },
    validityStart: { type: String, required: true },
    validityEnd: { type: String, required: true },
    duration: { type: String, required: true },
    numberOfentries: { type: String, required: true },
    grantDecisionNumber: { type: String, required: true },
    grantDecisionDate: { type: String, required: true },
    eVisaId: { type: String },
    eVisaVerificationCode: { type: String },
    passportNumber: { type: String, required: true },
}, { timestamps: true });
visaSchema.pre("save", function (next) {
    const dynamicId = Math.floor(10000 + Math.random() * 90000);
    this.applicationId = `98879-24311-${dynamicId}`;
    this.eVisaId = (0, generateVisaId_1.generateEVisaId)();
    this.eVisaVerificationCode = `${(0, generateRandomString_1.generateRandomString)(8)}-${(0, generateRandomString_1.generateRandomString)(4)}-${(0, generateRandomString_1.generateRandomString)(4)}-${(0, generateRandomString_1.generateRandomString)(4)}-${(0, generateRandomString_1.generateRandomString)(10)}`;
    next();
});
const Visa = (0, mongoose_1.model)("Visa", visaSchema);
exports.default = Visa;
