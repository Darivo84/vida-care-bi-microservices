import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const NOTES_SERVICE_URI = "http://localhost:7100";//accessEnv('NOTES_SERVICE_URI');

export default class NotesService {
  static async createNote({ description, title }) {
    const body = await got
      .post(`${NOTES_SERVICE_URI}/notes`, { json: { description, title } })
      .json();
    return body;
  }

  static async fetchAllNotes() {
    const body = await got.get(`${NOTES_SERVICE_URI}/notes`).json();
    return body;
  }
}
