import React from "react";

export default function Item(props) {
    const{title,description,author}=props.artical;
  return (
    <div className="artical-item">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{author}</p>
    </div>
  );
}
