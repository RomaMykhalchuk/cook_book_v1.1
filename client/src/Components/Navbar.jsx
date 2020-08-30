import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const goTo = () => {
    history.push('/new');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Cook Book
          </Typography>
          <Button color="inherit" onClick={goTo}>Create Recipe</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}