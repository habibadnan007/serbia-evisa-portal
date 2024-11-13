type TVisa = {
  userImg: string;
  applicationId: string;
  dateOfApplication: string;
  surName: string;
  name: string;
  dob: string;
  sex: "MALE" | "FEMALE" | "OTHER";
  category: "РАД / WORK" | "Тоурист/ Tourist" | "Бизнис / Business";
  travelDocumentNumber: string;
  validityStart: string;
  validityEnd: string;
  duration: string;
  numberOfentries: string;
  grantDecisionNumber: string;
  grantDecisionDate: string;
  eVisaId: string;
  eVisaVerificationCode: string;
  passportNumber: string;
};

export { TVisa };
