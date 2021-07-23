/* eslint-disable quotes */
const {
  addBookshelfHandler,
  getAllBookShelfHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

/* eslint-disable quotes */
const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookshelfHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookShelfHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
