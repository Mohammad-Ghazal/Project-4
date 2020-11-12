const { compareSync } = require("bcrypt");
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
    author: "jouza",
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
  let id = req.params.id;
  //   let art1 =articles_data.filter((art,index)=>art.id==req.params.id);//req.params.id
  //  // art1.title=req.params.newTitle;
  //   aer1[0].title=req.params.newTitle;
  // console.log(  articles_data[1])
  //   //art1.title=req.params.newTitle;
  //   res.json(articles_data);

  articles_data.map((article, index) => {
    if (article.id == req.params.id)
      articles_data[index].title = req.params.newTitle;
  });
  res.json(articles_data);
};
const changeArticleAuthorById = (req, res) => {
  console.log("changeArticleAuthorById CALLED");
  articles_data.map((article, index) => {
    if (article.id == req.params.id)
      // articles_data[index].author=req.body.newAuthor
      article.author = req.body.newAuthor;
  });
  res.json(articles_data);
};

const deleteArticleById = (req, res) => {
  console.log("deleteArticleById CALLED");

  //articles_data=articles_data.filter(article =>article.id!=req.params.id)//can't change const like this
  //articles_data.filter(article =>article.id!=req.params.id)

  articles_data.map((article, index) => {
    if (article.id == req.params.id) articles_data.splice(index, 1);
  });

  res.json(articles_data);
};

const deleteArticleByAuthor = (req, res) => {
  console.log("deleteArticleByAuthor CALLED");

  //   articles_data1 = articles_data.filter((art) => {
  //     if (art.author !== req.body.author) return art;
  //   });
  //   res.json(articles_data1);

  let haveToDeleteIndex = [];
  articles_data.map((article, index) => {
    if (article.author === req.body.author) {
      haveToDeleteIndex.unshift(index);
    }
  });

  haveToDeleteIndex.forEach((element) => {
    articles_data.splice(element, 1);
  });

  res.json(articles_data);
};

module.exports = {
  // "getAllArticles":getAllArticles,
  getAllArticles,
  createNewArticle,
  changeArticleTitleByID,
  changeArticleAuthorById,
  deleteArticleById,
  deleteArticleByAuthor,
};

// function User(firstName,lastName,birth){

//   this.firstName=firstName;
//   this.lastName= lastName;
//   this.birth =new Date(birth);
//   //  this.getFullName=function(){return `${this.firstName} ${this.lastName}`}

//   }
//   //best practic to not load alot of data
//   User.prototype.getFullName=function(){return `${this.firstName} ${this.lastName}`}
//   User.prototype.getBirthYear=function(){return this.birth.getFullYear()}

//   const user1=new User('John','Doe','4-3-1970');
//   const user2=new User('John','Doe','12-29-1988');

//   console.log('here a birth year for u1 : ',user1.getFullName());
//   console.log('here a birth year for u2 : ',user2.getBirthYear());
