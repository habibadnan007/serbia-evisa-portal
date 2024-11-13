import mongoose, { model } from "mongoose";
import { TVisa } from "./visa.interface";
import { generateRandomString } from "../../utils/generateRandomString";
import { generateEVisaId } from "../../utils/generateVisaId";

const visaSchema = new mongoose.Schema<TVisa>({
  userImg: { type: String, required: true },
  applicationId: { type: String, },
  dateOfApplication: { type: String, required: true },
  surName: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
  sex: { type: String, enum: ['MALE', 'FEMALE', 'OTHER'], required: true },
  travelDocumentNumber: { type: String, required: true },
  validityStart: { type: String, required: true },
  validityEnd: { type: String, required: true },
  duration: { type: String, required: true },
  numberOfentries: { type: String, required: true },
  grantDecisionNumber: { type: String, required: true },
  grantDecisionDate: { type: String, required: true },
  eVisaId: { type: String },
  eVisaVerificationCode: { type: String },
  passportNumber: { type: String, required: true }
}, { timestamps: true });


visaSchema.pre('save', function(next) {

  const dynamicId = Math.floor(10000 + Math.random() * 90000)
  this.applicationId = `98879-24311-${dynamicId}`
  
  this.eVisaId = generateEVisaId()
  this.eVisaVerificationCode =`${generateRandomString(8)}-${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(10)}`;


  next()
 


})

const Visa = model<TVisa>("Visa", visaSchema);

export default Visa;
