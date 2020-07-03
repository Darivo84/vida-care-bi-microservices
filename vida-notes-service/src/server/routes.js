import { Note } from "#root/db/models";

const setupRoutes = app => {
  app.get("/notes", async (req, res, next) => {
    const notes = await Note.findAll();
    return res.json(notes);
  });
  // Recently added below!!!
  app.post("/notes", async (req, res, next) => {
    if (!req.body.description || !req.body.title) {
      return next(new Error("Invalid body!"));
    }

    try {
      const note = await Note.create({
        description: req.body.description,
        title: req.body.title,
      });
      return res.json(note);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
