//tack what ecxported from express library
const express = require("express");
//tack what ecxported from Router
const mainRouter = express.Router();
const {
  getAllArticles,
  createNewArticle,
  changeArticleTitleByID,
} = require("../controllers/main-controller");

mainRouter.get("/", (req, res) => {
  res.json("wellcome to ghzal project four");
});

mainRouter.get("/articles", getAllArticles);

mainRouter.post("/articles", createNewArticle);

mainRouter.put("/articles/:id/:newTitle", changeArticleTitleByID);

module.exports = mainRouter;
