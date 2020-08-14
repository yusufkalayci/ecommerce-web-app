import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

const MenuIconButton = () => {
  const classes = useStyles();
  return (
    <IconButton edge='start' color='inherit' aria-label='open drawer'>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuIconButton;
