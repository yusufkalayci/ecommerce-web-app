import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItem.module.css';
const NavigationItem = props => {
  return (
    <Link to={props.path} className={classes.NavigationItem}>
      {props.name}
    </Link>
  );
};

export default NavigationItem;
