import OperationsService from "#root/adapters/OperationsService";

const createAppointmentResolver = async (obj, { start, end }, context) => {
  if (!context.res.locals.userSession) throw new Error("Not logged in!");

  return await OperationsService.fetchAllAppointments({ start, end });
};
export default createAppointmentResolver;
