import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Recipe } from "../Components/Recipe";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // },
}));

export const Recipes = () => {
  const classes = useStyles();

  const [recipes, setRecipes] = useState([]);

  const getData = async () => {
      const response = await fetch("/api/recipes");
    const recipes = await response.json();

    setRecipes(recipes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={3}>
            <Recipe {...recipe} />
          </Grid>
        ))}
        {/* <Grid item xs={3}>
          <Recipe />
        </Grid>
        <Grid item xs={3}>
          <Recipe />
        </Grid>
        <Grid item xs={3}>
          <Recipe />
        </Grid>
        <Grid item xs={3}>
          <Recipe />
        </Grid> */}
      </Grid>
    </div>
  );
};
