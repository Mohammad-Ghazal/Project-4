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
    console.log("LogIn clicked");
    if (!userName) window.confirm("user name is empty");
    else if (!password) window.confirm("password is empty");
    // else if (password !== rePassword) window.confirm("password not identical");
    // else if (!userAge) window.confirm("userAge must be set");
    else {
      let data = {
        user_name: userName,
        password: password,
      };
      //   console.log('data befor send req '+data.user_name+' '+data.password);

      axios
        .post(`http://localhost:5000/login`, data)
        .then((responce) => {
          console.log("data responce: " + responce.data);
          if (responce.data[0].user_name) {
            if (responce.data[0].password === password)
              window.confirm(
                "success login \n welcome back " + responce.data[0].user_name
              );
            else window.confirm("wrong password ...try again");
          } else window.confirm("faild");
        })
        .catch((err) => {
          window.confirm("faild to login , user name is not exist ");
          console.log(err);
          //  window.confirm("faild");
        });
    }
  };

  return (
    <div className="bg  p-3 sign_in">
      <h2>Log In</h2>
      <h4>Welcome back.</h4>
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
      {/*
      
      <input id={"/age"+id+1+"/"} inputMode="number">age</input> */}

      <button className="btn btn-primary" onClick={LogIn}>
        LogIn
      </button>
    </div>
  );
}
