import React, { useState } from "react";
import axios from "axios";

let id = 0;
// const USER_NAME = "user_name",
//   PASSWORD = "password",
//   AGE = "age";
export default function SignUp(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [userAge, setUserAge] = useState("");

  const signUp = () => {
    console.log("signUp called");
    if (!userName) window.confirm("user name is empty");
    else if (!password) window.confirm("password is empty");
    else if (password !== rePassword) window.confirm("password not identical");
    else if (!userAge) window.confirm("userAge must be set");
    else {
      let data = {
        user_name: userName,
        password: password,
        age: userAge,
      };


      axios
      .post(`http://localhost:5000/login`, data)
      .then((responce) => {
        console.log("data responce: " + responce.data);
        if(responce.data[0]){
        if (responce.data[0].user_name) {
            window.confirm(
              "user name exist \n try another username or login if that is your account " + responce.data[0].user_name
            );
        }} else {
          



          axios
          .post(`http://localhost:5000/users`, data)
          .then((responce) => {
            console.log("data: " + responce.data);
            //  if(responce.state===200)
            window.confirm("success signUp, "+data.user_name+" you are regetered ");
          })
          .catch((err) => {
            console.log("ERR: ", err);
            window.confirm("faild to signUp "+err);
          });








        }
      })
      .catch((err) => {
        window.confirm("ERR: ", err);
        console.log(err);
        //  window.confirm("faild");
      });

      



 
    }
  };

  return (
    <div className="bg-warning p-3 sign_up">
      <h2>Sign Up</h2>
      <h4>It’s quick and easy.</h4>
      <input
        className="m-1"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        type="text"
        name=""
        id={"/t" + id + 1 + "/"}
        placeholder="user name..."
      />
      <input
        className="m-1"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        name=""
        id={"/t" + id + 1 + "/"}
        placeholder="password..."
      />
      <input
        className="m-1"
        onChange={(e) => {
          setRePassword(e.target.value);
        }}
        type="password"
        name=""
        id={"/t" + id + 1 + "/"}
        placeholder="confirm password..."
      />
      <input
        className="m-1"
        onChange={(e) => {
          setUserAge(e.target.value);
        }}
        type="number"
        name=""
        id={"/t" + id + 1 + "/"}
        placeholder="user age..."
      />
      {/*
      
      <input id={"/age"+id+1+"/"} inputMode="number">age</input> */}

      <button className="btn btn-primary" onClick={signUp}>
        signUp
      </button>
    </div>
  );
}
