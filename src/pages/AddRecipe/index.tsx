import React from "react";

import './style.scss';

const style: React.CSSProperties = {
  backgroundColor: "red",
};
const AddRecipe = () => {
  return (
    <div className="addrecipe">
      <div className="container">
        <div><span>&#60;</span>AddRecipe</div>
        <hr />
      </div>
    </div>
  );
};

export default AddRecipe;
