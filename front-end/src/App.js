import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Article from "./ArticleItem";
import NewArticle from "./NewArticle";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);
  let i = 0;

  const addOne = () => {
    setCount(count + 1);
  };

  const getAllArticles = () => {
    axios
      .get(`http://localhost:5000/articles`)
      .then((responce) => {
        console.log("data: " + responce.data);
        //  if(responce.state===200)
        setArticles(responce.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const renderArticles = articles.map((art) => {
    return <Article  className="col-4 article-item" article={art} />;
    
  });
  return (
    <div className="app text-center">
      <span class="d-block p-2 bg-dark text-white">GHAZAL Project 4-5</span>
     
      <h2 className="text-success">Wlecome again</h2>
      <h1>Conter : : : {count} </h1>
      <button className="btn btn-primary" onClick={getAllArticles}>
        Get articles
      </button>
      <button className="btn btn-primary" onClick={addOne}>
        plus one
      </button>


  {/* <div className="container d-block  bg-dark ">
        <div className="row">
          <div className="col bg-primary">1</div>
          <div className="col bg-secondary">2</div>
          <div className="col bg-warning">3</div>
        </div> 
        <div className="row">
          <div className="col bg-primary">4</div>
          <div className="col bg-warning">5</div>
        </div>
      </div> */}
     
      <LogIn />
      <SignUp />
      <NewArticle id="addItem" data={articles} />
      <div className="row ">
          <div className="row">{renderArticles}</div>
          </div>
    
    </div>
  );

  // render(){
  // return (
  //   <div  className="app">
  //     <h1>HELLO WORLD</h1>
  //   </div>
  // );
  // }
}

/* 
// functional component
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};
export default App;
*/
/*export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }*/
