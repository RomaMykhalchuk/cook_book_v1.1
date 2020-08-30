import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const IngredientsList = ()=> {
  const classes = useStyles();
  const ingredients = useSelector(data => data.ingredients);
  const dispacth = useDispatch();

  return (
    <Paper component="ul" className={classes.root}>
      {ingredients.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.item}
              className={classes.chip}
            />
            <button onClick={(e)=>{
              e.preventDefault();
              dispacth({type:'delete', item: data.item});
            }
          }>delete</button>
          </li>
        );
      })}
    </Paper>
  );
}