"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.visaRouter = void 0;
const express_1 = require("express");
const visa_controller_1 = require("./visa.controller");
const zodValidateHandler_1 = __importDefault(require("../../middleware/zodValidateHandler"));
const visa_validation_1 = require("./visa.validation");
const router = (0, express_1.Router)();
exports.visaRouter = router;
// Need update and create qr code zod schema
router.post('/', (0, zodValidateHandler_1.default)(visa_validation_1.visaZodValidation.createVisaZodValidation), visa_controller_1.visaControllers.createVisa);
router.get('/', visa_controller_1.visaControllers.getAllVisa);
router.get('/:id', visa_controller_1.visaControllers.getSingleVisa); //By visa id
router.delete('/:id', visa_controller_1.visaControllers.deleteVisa); //By Object Id
router.patch('/:id', (0, zodValidateHandler_1.default)(visa_validation_1.visaZodValidation.updateVisaZodValidation), visa_controller_1.visaControllers.updateVisa); //By Object Id
