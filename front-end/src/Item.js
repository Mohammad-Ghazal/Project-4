import React from "react";
let id =0;
export default function Item(props) {
    const{title,description,author}=props.artical;
  return (
    <div className="artical-item">
      <h1>{title}</h1>
      <p id={"/dsr"+id+1+"/"}>{description}</p>
      <p id={"/aur"+id+1+"/"}>{author}</p>
      <button  id={"/dlr"+id+1+"/"}>DELETE</button>
      <button  id={"/upr"+id+1+"/"}>UPDATE</button>

    </div>
  );
}
