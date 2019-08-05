import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={classes.container}>
      <NavigationItem name='Home' path='/' />
      <NavigationItem name='About' path='/about' />
    </nav>
  );
};

export default NavigationBar;
