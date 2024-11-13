import { Router } from "express";
import { visaControllers } from "./visa.controller";
import zodValidateHandler from "../../middleware/zodValidateHandler";
import { visaZodValidation } from "./visa.validation";

const router = Router()



// Need update and create qr code zod schema
router.post('/', zodValidateHandler(visaZodValidation.createVisaZodValidation), visaControllers.createVisa)
router.get('/', visaControllers.getAllVisa)
router.get('/:id', visaControllers.getSingleVisa) //By visa id
router.delete('/:id', visaControllers.deleteVisa) //By Object Id
router.patch('/:id',zodValidateHandler(visaZodValidation.updateVisaZodValidation), visaControllers.updateVisa) //By Object Id

export {router as visaRouter}