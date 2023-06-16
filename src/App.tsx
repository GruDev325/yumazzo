import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import LandingPage from "./pages/LandingPage";
import AddRecipe from "./pages/AddRecipe";
import { setAllRecipes } from "./slices/recipeSlice";

axios.defaults.baseURL =
  "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo";

function App() {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state: any) => state.recipe.allRecipes);

  useEffect(() => {
    axios.get("/recipes").then((res) => {
      const returnData = res.data.message;
      dispatch(
        setAllRecipes(
          returnData.map((item: any) => {
            const produces = item.produce
              .split(",")
              .map((item: string) => item.trim());
            return {
              ...item,
              ingredient: [
                {
                  name: "Protein",
                  values: [
                    {
                      text: item.protein,
                      className: "lower",
                    },
                  ],
                },
                {
                  name: "Produce",
                  values: [
                    {
                      text: produces[0],
                      className: "foliage",
                    },
                    {
                      text: produces[1],
                      className: "red",
                    },
                  ],
                },
                {
                  name: "Spices",
                  values: [
                    {
                      text: item.spice,
                      className: "sunfire",
                    },
                  ],
                },
                {
                  name: "Cooking Oil",
                  values: [
                    {
                      text: item.cookingOil,
                      className: "sunfire",
                    },
                  ],
                },
                {
                  name: "Volume/Weight",
                  values: [
                    {
                      text: item.volume,
                      className: "lower",
                    },
                  ],
                },
                {
                  name: "Serves",
                  values: [
                    {
                      text: item.serves,
                      className: "lower",
                    },
                  ],
                },
                {
                  name: "Authenticity",
                  values: [
                    {
                      text: item.authenticity,
                      className: "sunfire",
                    },
                  ],
                },
                {
                  name: "Stock",
                  values: [
                    {
                      text: item.stock,
                      className: "sunfire",
                    },
                  ],
                },
              ],
            };
          })
        )
      );
    });
  }, []);

  useEffect(() => {
    console.log(allRecipes);
  }, [allRecipes]);
  return allRecipes.length > 0 ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/add" element={<AddRecipe />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  ) : null;
}

export default App;
