import NotesService from "#root/adapters/NotesService";

const createNoteResolver = async (obj, { description, title }, context) => {
  if (!context.res.locals.userSession) throw new Error("Not logged in!");
  return NotesService.createNote({ description, title });
};

export default createNoteResolver;
