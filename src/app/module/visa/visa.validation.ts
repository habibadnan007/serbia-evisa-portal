import { z } from "zod";




const createVisaZodValidation = z.object({
    userImg: z.string(),
    dateOfApplication: z.string(),
    surName: z.string(),
    name: z.string(),
    dob: z.string(),
    sex: z.enum(['MALE', 'FEMALE', 'OTHER']),
    travelDocumentNumber: z.string(),
    validityStart: z.string(),
    validityEnd: z.string(),
    duration: z.string(),
    numberOfentries: z.string(),
    grantDecisionNumber: z.string(),
    grantDecisionDate: z.string(),
    passportNumber: z.string(),
});

const updateVisaZodValidation = z.object({
    userImg: z.string().optional(),
    dateOfApplication: z.string().optional(),
    surName: z.string().optional(),
    name: z.string().optional(),
    dob: z.string().optional(),
    sex: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
    travelDocumentNumber: z.string().optional(),
    validityStart: z.string().optional(),
    validityEnd: z.string().optional(),
    duration: z.string().optional(),
    numberOfentries: z.string().optional(),
    grantDecisionNumber: z.string().optional(),
    grantDecisionDate: z.string().optional(),
    passportNumber: z.string().optional(),
});

    export const visaZodValidation = {createVisaZodValidation, updateVisaZodValidation};