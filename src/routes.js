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
    path: "/books",
    handler: getAllBook,
  },
  {
    method: "GET",
    path: "/books/{bookid}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookid}",
    handler: editBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookid}",
    handler: deleteBookById,
  },
];

module.exports = routes;
