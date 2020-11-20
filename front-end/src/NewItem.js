import React, { useState } from "react";
import axios from "axios";
let id = 0;
export default function NewItem(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const addNewArtical = () => {
    let data = {
      title: title,
      description: description,
      author: author,
    }
    axios
    .post(`http://localhost:5000/articles`, data)
    .then((responce) => {
      console.log("data: " + responce.data);
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
  
  };

    const changeInputText = (e) => {
      console.log("changeTi called");
    };

   

    return (
      <div id={"/i" + id + 1 + "/"} className="new-item">
        <h1>{props.articales}</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          name=""
          id={"/t" + id + 1 + "/"}
          placeholder="article title..."
        />
        <input
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type="text"
          name=""
          id={"/a" + id + 1 + "/"}
          placeholder="article author..."
        />
        <textarea
          name=""
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows="4"
          cols="30"
          id={"/ds" + id + 1 + "/"}
          placeholder="article description..."
        />
        <button onClick={addNewArtical}>Add New Artical</button>
      </div>
    );
  };

