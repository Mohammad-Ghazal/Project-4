import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Article from "./components/ArticleItem";
import NewArticle from "./components/NewArticle";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/alertify.min.js";

export default function App() {
  

  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);
  const[search,setSearch]=useState('');
  const [allArticales, setAllArticales] = useState([])

  let i = 0;

  const addOne = () => {


    setCount(count + 1);
  };
  
  const searchNow = () => {

   console.log(articles);
  }

  

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
    return <Article className="col-4 article-item" article={art} />;
  });
  return (
    <Router>
      <div className="app text-center">
        <span className="d-block p-2 bg text-white">GHAZAL Project 4-5</span>

        <h2 className="text-success">Wlecome again</h2>
        <h1>Conter : : : {count} </h1>

        <div className="container d-block  bg  block">
          <div className=" container row f-row">
            <div className="col -md-2">
            <form ACTION="/">
            </form>
              <button className="btn btn-primary" onClick={getAllArticles}>
               articles
              </button>

            </div>

            <div className="col -md-2">
              <button className="btn btn-primary" onClick={addOne}>
                plus one
              </button>
            </div>

            <div className="col -md-2">
              <form ACTION="/newArticles">

              <button className="btn btn-primary" >
                newArticle
              </button>
              </form>
              <input id='searchInput' type="input text" onChange={search} herf="serch" />

            </div>

            <div className="col -md-2">
              <form action="/LogIn">
                <button className="btn btn-primary">LogIn</button>
              </form>
            </div>

            <div className="col -md-2">
              <form action="/signup">
                <button className="btn btn-primary">signUp</button>
              </form>
            </div>



          </div>
          <div className="row ">
            <div className="row">{renderArticles}</div>
            
          </div>
        </div>
        {/* 
        <div className="container d-block  bg-dark ">
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
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/newArticles">
          <NewArticle id="addItem" data={articles} />
        </Route>
     
      </div>
    </Router>
  );

 





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
