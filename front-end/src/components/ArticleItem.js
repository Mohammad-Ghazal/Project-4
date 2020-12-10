import React,{useState} from "react";
import axios from 'axios'

export default function Article(props) {
  const { title, description, author,id } = props.article;//destructuring

  const [articles, setArticles] = useState([]);
  
  
  const btnDelete = () => {
   let a= window.confirm("are you sure you want delet?");
    
if(a)
    axios
    .delete(`http://localhost:5000/articles/${id}`)
    .then((responce) => {
      console.log("data: " + responce.data);
      //  if(responce.state===200)
      
      setArticles(responce.data);
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });

    if(a)
    window.alert('SUCESS DELETE ARTICLE')
    else
    window.alert('DELETE DISSMISSD')
    
   
  };

  return (
    
    <div className=" p-5 bg-dark text-white article-item">
      <h1>{title}</h1>
      <p  id={"/dsr" + id + "/"}>{description +id}</p>
      <p  id={"/aur" + id + "/"}>{author}</p>
      <div className = "buttons-branch">
      <button className="btn btn-info" id={"/upr" + id + 1 + "/"}>UPDATE</button>
      <button onClick={btnDelete} className="btn btn-danger" id={"/dlr" + id + 1 + "/"}>DELETE</button>
      </div>
    </div>
  );
}
