const express = require("express");
//tack what ecxported from Router
const mainRouter = express.Router();

const articles_data = [
  {
    id: 1,
    title: "eat fried chicken",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "jouza",
  },
  {
    id: 2,
    title: "how to studey react",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "abd",
  },
  {
    id: 3,
    title: "how to vote",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    author: "amr",
  },
];
let last_ID = 3;

const getAllArticles = (req, res) => {
  console.log("getAllArticles CALLED");
  res.json(articles_data);
};

const createNewArticle = (req, res) => {
  // const newArtical = {
  //   id: posts.length + 1,
  //   title: req.body.title,
  //   description: req.body.description,
  //   author:req.body.author

  // };

  console.log("createNewArticle CALLED");
  // console.log('REQ: ',req)
  console.log("REQ.BODY: ", req.body);
  // add a new key 'id' to an object
  req.body.id = ++last_ID;
  // Before adding the new article to the articles
  articles_data.push(req.body);
  res.json(articles_data);
};



module.exports = {
  // "getAllArticles":getAllArticles,
  getAllArticles,
  createNewArticle,
  changeArticleTitle,
};
