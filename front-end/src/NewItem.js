import React from "react";

export default function NewItem() {
  return (
    <div className="new-item">
      <input type="text" name="" id="" placeholder="article title..." />
      <input type="text" name="" id="" placeholder="article author..." />
      <input
        type="textarea"
        name=""
        rows="4"
        cols="40"
        id=""
        placeholder="article description..."
      />
    

      <button>Add New Artical</button>
    </div>
  );
}
