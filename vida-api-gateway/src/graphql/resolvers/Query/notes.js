import NotesService from '#root/adapters/NotesService';

const notesResolver = async () => {
    return await NotesService.fetchAllNotes();
};

export default notesResolver;