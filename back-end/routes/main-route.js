//tack what ecxported from express library
const express = require("express");
//tack what ecxported from Router

const mainRouter = express.Router();
const {
  getAllArticles,
  createNewArticle,
  changeArticleTitleByID,
  changeArticleAuthorById,
  deleteArticleById,
  deleteArticleByAuthor,
  recoveryArticleById,
  getAllArticlesByAuthor,
  changeArticleDescriptionById,
  createNewUser,
  LogIn,
  getWeather
} = require("../controllers/main-controller");

mainRouter.get("/", (req, res) => {
  res.json("wellcome to ghzal project four");
});

mainRouter.get("/articles", getAllArticles);
mainRouter.get("/articlesByAuther/:author", getAllArticlesByAuthor);
mainRouter.post("/login", LogIn);

mainRouter.post("/articles", createNewArticle);
mainRouter.post("/users", createNewUser);

mainRouter.put("/articles/:id/:newTitle", changeArticleTitleByID);
mainRouter.put("/articles/:id", changeArticleDescriptionById);
mainRouter.put("/articles/:id", changeArticleAuthorById);

mainRouter.delete("/articles/:id", deleteArticleById);
mainRouter.delete("/articles/", deleteArticleByAuthor);
mainRouter.put("/articlesre/:id", recoveryArticleById);


mainRouter.get("/getWeather",getWeather);

module.exports = mainRouter;
