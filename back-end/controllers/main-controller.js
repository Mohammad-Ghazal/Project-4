const { compareSync } = require("bcrypt");
const express = require("express");
const { query } = require("../db");
const connection = require("../db");

const ARTICLES_TABLE = "articles",
  TITLE = "title",
  DESCRIPTION = "description",
  AUTHOR = "author",
  ID = "id",
  IS_DELETED = "is_deleted";

//tack what ecxported from Router
const mainRouter = express.Router();

let articles_table = [
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
    author: "amer",
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
  const query = `SELECT * FROM ${ARTICLES_TABLE}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
const getAllArticles_Express = (req, res) => {
  console.log("getAllArticles CALLED");
  res.json(articles_table);
};
const createNewArticle = (req, res) => {
  {
    let { title, author, description } = req.body;
    console.log("createNewArticle CALLED");
    console.log(TITLE, AUTHOR, DESCRIPTION, title, author, description);

    const query = `INSERT INTO ${ARTICLES_TABLE} (${TITLE},${AUTHOR},${DESCRIPTION}) VALUES ("${title}","${author}","${description}"); `;

    connection.query(query, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }
};
const createNewArticle_Express = (req, res) => {
  console.log("createNewArticle CALLED");
  // console.log('REQ: ',req)
  console.log("REQ.BODY: ", req.body);
  // add a new key 'id' to an object
  req.body.id = ++last_ID;
  // Before adding the new article to the articles
  articles_table.push(req.body);
  res.json(articles_table);
};
const changeArticleTitleByID = (req, res) => {
  console.log("changeArticleTitleByID CALLED");

  {
    const query = `UPDATE ${ARTICLES_TABLE}
    SET ${TITLE} = "${req.params.newTitle}"
    WHERE ${ID} = "${req.params.id}";`;

    connection.query(query, (err, result) => {
      if (err) throw err;
      res.json(TITLE + " for id '" + req.params.id + "' edited sucsesfully");
    });
  }
};
const changeArticleTitleByID_Express = (req, res) => {
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

  articles_table.map((article, index) => {
    if (article.id == req.params.id)
      articles_table[index].title = req.params.newTitle;
  });
  res.json(articles_table);
};
const changeArticleAuthorById = (req, res) => {
  let { newAuthor } = req.body;
  console.log("changeArticleAuthorById CALLED");

  const query = `UPDATE ${ARTICLES_TABLE}
    SET ${AUTHOR} = "${newAuthor}"
    WHERE ${ID} = ${req.params.id};`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(AUTHOR + " for id '" + req.params.id + "' edited sucsesfully");
  });
};
const changeArticleAuthorById_Express = (req, res) => {
  console.log("changeArticleAuthorById CALLED");
  articles_table.map((article, index) => {
    if (article.id == req.params.id)
      // articles_data[index].author=req.body.newAuthor
      article.author = req.body.newAuthor;
  });
  res.json(articles_table);
};
const deleteArticleById = (req, res) => {
  console.log("deleteArticleById CALLED");
  //const query = `DELETE FROM ${ARTICLES_TABLE} WHERE  ${ID} = ${req.params.id};`; //hard way
  const query = `UPDATE ${ARTICLES_TABLE}
  SET ${IS_DELETED} = 1
  WHERE ${ID} = ${req.params.id};`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json("article for id '" + req.params.id + "' deleted sucsesfully");
  });
};
const deleteArticleById_Express = (req, res) => {
  console.log("deleteArticleById CALLED");

  //articles_data=articles_data.filter(article =>article.id!=req.params.id)//can't change const like this
  //articles_data.filter(article =>article.id!=req.params.id)

  articles_table.map((article, index) => {
    if (article.id == req.params.id) articles_table.splice(index, 1);
  });

  res.json(articles_table);
};
const deleteArticleByAuthor = (req, res) => {
  console.log("deleteArticleByAuthor CALLED");
  //const query = `DELETE FROM ${ARTICLES_TABLE} WHERE  ${AUTHOR} = "${req.body.author}";`;//hard way
  const query = `UPDATE ${ARTICLES_TABLE}
  SET ${IS_DELETED} = 1
  WHERE ${AUTHOR} = "${req.body.author}";`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(
      "article/s for auther '" + req.body.author + "' deleted sucsesfully"
    );
  });
};
const deleteArticleByAuthor_express = (req, res) => {
  console.log("deleteArticleByAuthor CALLED");

  // articles_data_new = articles_data.filter((art) => {
  //   if (art.author !== req.body.author)return art;
  //   });

  articles_table = articles_table.filter(
    (art) => art.author !== req.body.author
  );
  // articles_table.splice(0, articles_data.length, ...filltered_articles);

  // let haveToDeleteIndex = [];
  // articles_data.map((article, index) => {
  //   if (article.author === req.body.author) {
  //     haveToDeleteIndex.unshift(index);
  //   }
  // });

  // haveToDeleteIndex.forEach((element) => {
  //   articles_data.splice(element, 1);
  // });

  res.json(articles_table);
};
const recoveryArticleById = (req, res) => {
  console.log("recoveryArticleById CALLED");
  const query = `UPDATE ${ARTICLES_TABLE}
  SET ${IS_DELETED} = 0
  WHERE ${ID} = ${req.params.id};`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json("the article id '" + req.params.id + "'recovered sucsesfully");
  });
};
module.exports = {
  // "getAllArticles":getAllArticles,
  getAllArticles,
  createNewArticle,
  changeArticleTitleByID,
  changeArticleAuthorById,
  deleteArticleById,
  deleteArticleByAuthor,
  recoveryArticleById
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
