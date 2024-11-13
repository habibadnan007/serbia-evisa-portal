import { Response } from "express";

const sendResponse = (
  res: Response,
  statusCode: number,
  format: {
    success: boolean;
    message: string;
    meta?: { total: number; page: number; totalPages: number; limit: number };
    data: any;
  }
) => {
  res
    .status(statusCode)
    .send({
      success: format?.success,
      meta: {
        total: format?.meta?.total,
        totalPages: format?.meta?.totalPages,
        page: format?.meta?.page,
        limit: format?.meta?.limit,
      },
      message: format?.message,
      data: format?.data || null,
    });
};

export default sendResponse;
