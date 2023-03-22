const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");
const verifyToken = require("../middleware/verifyJwt");

router.use(verifyToken);

router
  .route("/")
  .get(notesController.getAllNotes)
  .post(notesController.createNewNote)
  .patch(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
