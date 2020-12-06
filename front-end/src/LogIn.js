import React, { useState } from "react";
import axios from "axios";


let id = 0;
// const USER_NAME = "user_name",
//   PASSWORD = "password",
//   AGE = "age";
export default function LogIn(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const LogIn = () => {
    console.log("LogIn called");
    if (!userName) window.confirm("user name is empty");
    else if (!password) window.confirm("password is empty");
    // else if (password !== rePassword) window.confirm("password not identical");
    // else if (!userAge) window.confirm("userAge must be set");
    // else {
      
    //   let data = {
    //     user_Name: userName,
    //     password: password,
    //     age: userAge
    //   };
    //   axios
    //     .post(`http://localhost:5000/users`,data)
    //     .then((responce) => {
    //       console.log("data: " + responce.data);
    //       //  if(responce.state===200)
    //       window.confirm("success");
    //     })
    //     .catch((err) => {
    //       console.log("ERR: ", err);
    //       window.confirm("faild");
    //     });
      
    // }
  };

  return (
    <div className="bg  p-3 sign_in">
      <h2>Log In</h2>
      <h4>Welcome back.</h4>
      <input className ="m-1"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        type="text"
        name=""
        id={"/t" + id + 1 + "/"}
        placeholder="user name..."
      />
      <input className ="m-1"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        name=""
        id={"/t" + id + 1 + "/"}
        placeholder="password..."
      />
      {/*
      
      <input id={"/age"+id+1+"/"} inputMode="number">age</input> */}

      <button  className="btn btn-primary" onClick={LogIn}>LogIn</button>
    </div>
  );
}
