import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const OPERATIONS_SERVICE_URI = "http://localhost:7101";//accessEnv("OPERATIONS_SERVICE_URI");

export default class OperationsService {
  static async fetchAllAppointments({ start, end }) {
    const body = await got
      .get(`${OPERATIONS_SERVICE_URI}/appointments?start=${start}&end=${end}`)
      .json();
    return body;
  }
}
