const {
  addBookHandler,
  getAllBook,
  getBookId,
  editBookById,
  deleteBookById,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/book",
    handler: addBookHandler,
    // options: {
    //   cors: {
    //     //cors secara path
    //     origin: ["*"],
    //   },
    // },
  },
  {
    method: "GET",
    path: "/Book",
    handler: getAllBook,
  },
  {
    method: "GET",
    path: "/Book/{id}",
    handler: getBookId,
  },
  {
    method: "PUT",
    path: "/Book/{id}",
    handler: editBookById,
  },
  {
    method: "DELETE",
    path: "/Book/{id}",
    handler: deleteBookById,
  },
];

module.exports = routes;
