import React from "react";

import "./style.scss";
import { ChevronLeft } from "../../svg/chevron-left";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { TextArea } from "../../components/text-area";
import { Button } from "../../components/button";

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
          <Select
            label="test"
            options={[
              { label: "Easy", value: "easy" },
              { label: "Medium", value: "medium" },
            ]}
          />
        </div>
        <TextArea label="Description" placeholder="Describe your recipe..." />
        <div className="test-00001">
          <Select
            label="test"
            options={[
              { label: "Easy", value: "easy" },
              { label: "Medium", value: "medium" },
            ]}
          />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
          <Input label="test" />
        </div>
        <Input label="test" />
        <Button full>Add Recipe</Button>
      </div>
    </div>
  );
};

export default AddRecipe;
