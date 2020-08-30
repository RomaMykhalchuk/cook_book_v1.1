import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar.jsx";
import { Recipes } from "./Components/Recipes.jsx";
import { NewRecipe } from "./Pages/NewRecipe.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Recipes />
        </Route>
        <Route path="/new" exact>
          <NewRecipe />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
