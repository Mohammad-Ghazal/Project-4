import React,{ useState } from "react";//{ useState } for use it also
import axios from "axios";

let id = 0;
export default function NewArticle(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");//"":initial value
  const [author, setAuthor] = useState("");

  
  const addNewArticle = () => {
    let data = {
      title: title,
      description: description,
      author: author,
    };
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




    <div id={"/i" + id + 1 + "/"} className=" new-article ">
      <h2>New Article</h2>
      <h1>{props.articles}</h1>
      <input className ="m-1"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        name=""
        id={"/t" + id + 1 + "/"}
        placeholder="article title..."
      />
      <input className ="m-1"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        type="text"
        name=""
        id={"/a" + id + 1 + "/"}
        placeholder="article author..."
      />
      <textarea className ="m-1"
        name=""
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        rows="4"
        cols="30"
        id={"/ds" + id + 1 + "/"}
        placeholder="article description..."
      />
      <button className="btn btn-primary" onClick={addNewArticle}>Add New article</button>
    </div>
  );
}
