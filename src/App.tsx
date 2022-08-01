import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Recipe from "./components/Recipe/Recipe";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditRecipe from "./components/EditRecipe/EditRecipe";

const App: FC = () => {
  const recipesArr = [
    {
      id: "1",
      title: "Placek z jagodami",
      ingredients: "olej, masło, 1/2 łyżeczki cukru, 500g jagód",
      desc: "Cukier rozetrzyj z masłem, dodaj olej i resztę składników",
      date: "2022-04-10",
    },
    {
      id: "2",
      title: "Pizza domowa",
      ingredients: "drożdże, olej, masło, 1/2 łyżeczki cukru",
      desc: "	Świeże drożdże ocieplić w temperaturze pokojowej. Przygotować rozczyn: drożdże rozpuścić w ciepłej wodzie, dodać 2 łyżki mąki oraz cukier, dokładnie wymieszać i odstawić na ok. 10 minut do wyrośnięcia (rozczyn ze świeżych drożdży zwiększa objętość o ok. 3 razy - jeśli tak się nie stanie proces przygotowania rozczynu trzeba powtórzyć od nowa, natomiast rozczyn z drożdży instant może się tylko trochę spienić).",
      date: "2022-06-10",
    },
    {
      id: "3",
      title: "Pierogi z kapustą",
      ingredients: "mąka, masło, 1/2 łyżeczki cukru",
      desc: "Do szerokiej miski przesiej mąkę. Dodaj sól oraz olej np. rzepakowy. Olej z pestek winogron oraz inne oleje o delikatnym smaku również się sprawdzą. Wlej szklankę gorącej, przegotowanej wody (250 ml) i wyrabiaj chwilę ciasto - najlepiej ręcznie.",
      date: "2022-01-10",
    },
    {
      id: "4",
      title: "Zupa pomidorowa",
      ingredients: "kości, woda, koncentrat pomidorowy",
      desc: "Wlej wode, wrzuć resztę składników i gotuj",
      date: "2022-02-12",
    },
    {
      id: "5",
      title: "Burger klasyczny",
      ingredients: "bułka, 200g wołowiny, 1/2 łyżeczki cukru",
      desc: "Usmaż wołowinę, przypiecz bułki, złóż w całość",
      date: "2022-01-10",
    },
    {
      id: "6",
      title: "Shake owocowy",
      ingredients: "200g owoców(różnych), odżywka białkowa, woda, skyr",
      desc: "Zblenduj wszytko na raz i gotowe",
      date: "2022-01-10",
    },
    {
      id: "7",
      title: "Kluski śląskie",
      ingredients: "olej, masło, 1/2 łyżeczki cukru, 1kg jabłek",
      desc: "Do miski wbij też jedno średniej wielkości jajko (można je pominąć, ale ja zazwyczaj daję jedno jajko) i wsyp pół płaskiej łyżeczki soli. Całość bardzo dokładnie wymieszaj np. dłońmi. Masa powinna być bardzo plastyczna. Kolor masy na kluski śląskie zależy od tego jakich ziemniaków użyjesz oraz od tego, czy dodasz jajko czy też nie. Kluski mogą zatem wyjść bardzo jasne lub też lekko żółte.",
      date: "2022-01-10",
    },
  ];
  const [recipes, setRecipes] = useState(recipesArr);

  const addRecipeFn = (
    title: string,
    date: string,
    desc: string,
    ingredients: string
  ) => {
    setRecipes((prevState) => [
      ...prevState,
      {
        id: (recipes.length + 1).toString(),
        title: title,
        date: date,
        desc: desc,
        ingredients: ingredients,
      },
    ]);
    console.log(recipes);
  };
  const removeRecipeFn = (id: string | undefined) => {
    const newRecpiesList = recipes.filter((item) => item.id !== id);
    setTimeout(() => {
      setRecipes(newRecpiesList);
    });
  };

  const editRecipeFn = (
    id: string | undefined,
    newTitle: string,
    newIngredients: string,
    newDesc: string,
    newDate: string
  ) => {
    

    recipes.forEach((el) => {
      if (el.id === id) {
        el.title = newTitle;
        el.ingredients = newIngredients;
        el.desc = newDesc;
        el.date = newDate;
      }
    });
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route
            path="/recipes/:id"
            element={<Recipe recipes={recipes} remove={removeRecipeFn} />}
          />
          <Route
            path="/recipes/:id/editrecipe"
            element={<EditRecipe recipes={recipes} edit={editRecipeFn} />}
          />
          <Route path="/addrecipe" element={<AddRecipe add={addRecipeFn} />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
