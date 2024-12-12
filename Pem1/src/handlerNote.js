const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      error: false,
      status: "success",
      message: "note added",
      data: {
        noteId: id,
      },
    });
    response.header("Access-Control-Allow-Origin", "*");
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "note failed to add",
  });
  response.code(500);
  return response;
};

const getAllNote = () => ({
  status: "success",
  data: {
    notes,
  },
});

const getNoteId = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: "success",
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: "fail",
    message: "note not found",
  });
  response.code(404);
  return response;
};

const editNoteById = (request, h) => {
  const { id } = request.params;

  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);
  //ubah data berdasarkan id

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: "success",
      message: "note updated",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "no id found",
  });
  response.code(404);
  return response;
};

const deleteNoteById = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "note deleted",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "delete failed",
  });
  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  deleteNoteById,
  editNoteById,
  getNoteId,
  getAllNote,
};
