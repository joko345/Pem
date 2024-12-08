const {
  addNoteHandler,
  getAllNote,
  getNoteId,
  editNoteById,
  deleteNoteById,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/book",
    handler: addNoteHandler,
    // options: {
    //   cors: {
    //     //cors secara path
    //     origin: ["*"],
    //   },
    // },
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNote,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteId,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteById,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteById,
  },
];

module.exports = routes;
