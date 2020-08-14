import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  button: {
    background: '0 0',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '0 0 10px',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    outline: '0',
    transition: '0.4s',
    textDecoration: 'none',
    fontSize: '1.2em',
    color: '#000'
  }
}));

const ProductInfoDeatail = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.button}>{props.header}</div>
      <Divider></Divider>
      <p style={{ textAlign: 'left' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis metus
        ipsum. Pellentesque eget bibendum leo. Vestibulum ligula urna, vulputate
        sed maximus vel, interdum vel.
      </p>
      <ul style={{ paddingLeft: '12px' }}>
        {props.content.map((value, index) => (
          <li key={index} style={{ textAlign: 'left' }}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfoDeatail;
