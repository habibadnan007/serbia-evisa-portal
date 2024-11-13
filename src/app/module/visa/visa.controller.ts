import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { TVisa } from "./visa.interface";
import { visaServices } from "./visa.service";

const createVisa: RequestHandler = catchAsync(async (req, res, next) => {
  const payload = req.body as TVisa;
  const visa = await visaServices.createVisa(payload);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Visa inserted successfully!",
    data: visa,
  });
});

const getAllVisa: RequestHandler = catchAsync(async (req, res, next) => {
  const { visas, totalVisas } = await visaServices.getAllVisa(req.query);

  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const totalPages = Math.ceil(totalVisas / limit);

  sendResponse(res, StatusCodes.OK, {
    success: true,
    meta: { total: totalVisas, page, totalPages, limit },
    message: "Visas are retrieved successfully!",
    data: visas,
  });
});

const getSingleVisa: RequestHandler = catchAsync(async (req, res, next) => {
  const visa = await visaServices.getSingleVisa(req.params?.id as string);
  if (!visa) {
    throw new Error("Visa is not found!");
  }
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Visa is retrieved successfully!",
    data: visa,
  });
});

const deleteVisa: RequestHandler = catchAsync(async (req, res, next) => {
  const visa = await visaServices.deleteVisa(req.params?.id as string);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Visa is deleted successfully!",
    data: visa,
  });
});

const updateVisa: RequestHandler = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const id = req.params?.id as string;
  const visa = await visaServices.updateVisa(id, payload);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Visa inserted successfully!",
    data: visa,
  });
});

export const visaControllers = {
  createVisa,
  getAllVisa,
  getSingleVisa,
  deleteVisa,
  updateVisa,
};
