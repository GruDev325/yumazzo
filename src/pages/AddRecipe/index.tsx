import { useState } from "react";
import { ChevronLeft } from "../../svg/chevron-left";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { TextArea } from "../../components/text-area";
import { Button } from "../../components/button";
import { COUNTRY_LIST } from "../../const";

import "./style.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../slices/recipeSlice";

const AddRecipe = () => {
  const [form, setForm] = useState<{ [key: string]: any }>({});
  const dispatch = useDispatch();

  const handleChange = (label: string, value: any) => {
    setForm({
      ...form,
      [label]: value,
    });
  };

  const handleClick = () => {
    axios
      .post("/recipes", form)
      .then((data) => {
        dispatch(addRecipe(form));
      })
      .catch((data) => {
        console.log(data);
      });
  };

  const difficult = [
    { label: "Easy", value: "0" },
    { label: "Medium", value: "1" },
    { label: "Hard", value: "2" },
  ];

  return (
    <div className="addrecipe">
      <div className="container">
        <div className="border-bottom">
          <ChevronLeft /> Add new recipe
        </div>
        <div className="row-wrapper">
          <Input
            label="Name"
            value={form.name}
            onChange={(value) => handleChange("name", value)}
          />
          <Select
            label="Origin"
            options={COUNTRY_LIST}
            value={form.country}
            onChange={(value) => handleChange("origin", value?.value)}
          />
        </div>
        <TextArea
          label="Description"
          placeholder="Describe your recipe..."
          onChange={(value) => handleChange("description", value)}
        />
        <div className="row-wrapper">
          <Select
            label="Difficulty"
            value={difficult.find((item) => item.value === form.difficulty)}
            options={difficult}
            onChange={(value) => handleChange("difficulty", value?.value)}
          />
          <Input
            label="Protein"
            value={form.protein}
            onChange={(value) => handleChange("protein", value)}
          />
          <Input
            label="Spices"
            value={form.spice}
            onChange={(value) => handleChange("spice", value)}
          />
          <Input
            label="Cooking Oil"
            value={form.cookingOil}
            onChange={(value) => handleChange("cookingOil", value)}
          />
          <Input
            label="Volume/Weight"
            value={form.volume}
            type="number"
            onChange={(value) => handleChange("volume", value)}
          />
          <Input
            label="Produce"
            value={form.produce}
            onChange={(value) => handleChange("produce", value)}
          />
          <Input
            label="Serves"
            type="number"
            value={form.serves}
            onChange={(value) => handleChange("serves", value)}
          />
          <Input
            label="Authenticity"
            value={form.authenticity}
            onChange={(value) => handleChange("authenticity", value)}
          />
        </div>
        <Input
          label="Stock"
          type="number"
          value={form.stock}
          onChange={(value) => handleChange("stock", value)}
        />
        <Button onClick={handleClick} full>
          Add Recipe
        </Button>
      </div>
    </div>
  );
};

export default AddRecipe;
