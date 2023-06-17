import React from "react";

import "./style.scss";
import { ChevronLeft } from "../../svg/chevron-left";
import { Input } from "../../components/input";

const style: React.CSSProperties = {
  backgroundColor: "red",
};

const AddRecipe = () => {
  return (
    <div className="addrecipe">
      <div className="container">
        <div className="test-border-bottom">
          <ChevronLeft /> AddRecipe
        </div>
        <div className="test-00001">
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
