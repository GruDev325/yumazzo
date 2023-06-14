import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAllRecipes } from './slices/recipeSlice';

axios.defaults.baseURL = "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo";

function App() {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state: any) => state.recipe.allRecipes);

  useEffect(() => {
    axios.get("/recipes").then(res => {
      const returnData = res.data.message;
      dispatch(setAllRecipes(returnData.map((item: any) => {
        const produces = item.produce.split(",").map((item: string) => item.trim());
        return {
          ...item,
          ingredient: [{
            name: "Protein",
            values: [{
              text: item.protein,
              className: 'lower'
            }]
          }, {
            name: "Produce",
            values: [{
              text: produces[0],
              className: 'foliage'
            }, {
              text: produces[1],
              className: 'red'
            }]
          }, {
            name: "Spices",
            values: [{
              text: item.spice,
              className: 'sunfire'
            }]
          }, {
            name: "Cooking Oil",
            values: [{
              text: item.cookingOil,
              className: 'sunfire'
            }]
          }, {
            name: "Volume/Weight",
            values: [{
              text: item.volume,
              className: 'lower'
            }]
          }, {
            name: "Serves",
            values: [{
              text: item.serves,
              className: 'lower'
            }]
          }, {
            name: "Authenticity",
            values: [{
              text: item.authenticity,
              className: 'sunfire'
            }]
          }, {
            name: "Stock",
            values: [{
              text: item.stock,
              className: 'sunfire'
            }]
          }]
        };
      })));
    })
  }, []);

  useEffect(() => {
    console.log(allRecipes);
  }, [allRecipes]);
  return allRecipes.length > 0 ? (
    <div className="App">
      <LandingPage />
    </div>
  ) : null;
}

export default App;
