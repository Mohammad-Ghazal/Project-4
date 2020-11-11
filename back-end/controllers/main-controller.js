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
    id: 4,
    title: "how to studey react",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "abd",
  },
  {
    id: 7,
    title: "how to vote",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    author: "jouza",
  },
];
let last_ID = 7;

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
const changeArticleTitleByID = (req, res) => {
  // console.log("changeArticleTitleByID CALLED");
  // console.log("req.params.newTitle: ", req.params.newTitle);
  // console.log("areq.params.id: ", req.params.id);
  // console.log("articles_data[req.params.id-1]: ", articles_data[req.params.id-1]);

//   articles_data[req.params.id - 1].title = req.params.newTitle;
//   res.json(articles_data);
/*
id: 1,
title: "eat fried chicken",
description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
author: "jouza",
*/
console.log(req.params.id);
let id=req.params.id;
//   let art1 =articles_data.filter((art,index)=>art.id==req.params.id);//req.params.id
//  // art1.title=req.params.newTitle;
//   aer1[0].title=req.params.newTitle;
// console.log(  articles_data[1])
//   //art1.title=req.params.newTitle;
//   res.json(articles_data);


articles_data.map((article,index) => {
    if(article.id==req.params.id)
    articles_data[index].title=req.params.newTitle

});
res.json(articles_data)

};
module.exports = {
  // "getAllArticles":getAllArticles,
  getAllArticles,
  createNewArticle,
  changeArticleTitleByID,
};
