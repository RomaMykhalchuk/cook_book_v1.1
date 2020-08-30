import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Ingredient } from "../Components/Ingredient";
import { IngredientsList } from "../Components/IngredientsList";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: "25ch",
//   },
// }));

export const NewRecipe = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(data => data.ingredients);

 // const deleteIngredient = (ingredient) => {
  //   setIngredients((prev) =>
  //     prev.filter((current) => current.item !== ingredient)
  //   );
  // };

  return (
    <fieldset>
      <Typography variant="h4">
        <legend>ADD A NEW RECIPE</legend>
      </Typography>
      <form>
      <Ingredient/>
        <IngredientsList
          // handleDelete={deleteIngredient}
        />
      </form>
    </fieldset>
  );
};
