
import { StatusCodes } from "http-status-codes";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/appError";
import { TVisa } from "./visa.interface";
import Visa from "./visa.model";

const createVisa = async (payload: TVisa) => {
  const isExistVisa = await Visa.findOne({passportNumber: payload?.passportNumber});
  if(isExistVisa){
    throw new AppError(StatusCodes.CONFLICT ,'Visa already exists with this passport number!')
  }
  const result = await Visa.create(payload);
  return result;
};
const getAllVisa = async (query:Record<string,unknown>) => {
  const visaQuery = new QueryBuilder(Visa.find(), query)
  .searchQuery(['name', 'eVisaId', 'passportNumber'])
  .filterQuery()
  .paginateQuery()
  .sortQuery()
  .fieldFilteringQuery()

const visas = await visaQuery.queryModel

  // Fetch total count of documents that match the query without pagination
  const totalVisas = await Visa.countDocuments();

return {visas, totalVisas}
};
const getSingleVisa = async (id: string) => {
  const result = await Visa.findOne({eVisaId: id});
  return result;
};
const deleteVisa = async (id: string) => {
  const result = await Visa.findByIdAndDelete(id);
  return result;
};
const updateVisa = async (id: string,updatedVisaData:Partial<TVisa>) => {
  const result = await Visa.findByIdAndUpdate(id, updatedVisaData, {new:true});
  return result;
};

export const visaServices = {
  createVisa,
  getAllVisa,
  getSingleVisa,
  deleteVisa,
  updateVisa
}