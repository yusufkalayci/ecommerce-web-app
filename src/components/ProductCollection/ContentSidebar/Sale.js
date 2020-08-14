import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Switch } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions/filterActions';
import { withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'inherit',
    border: '0',
    padding: theme.spacing(1),
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '62px'
  },
  heading: {
    color: '#000',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'inherit',
      transition: 'color .3s ease-in-out',
      cursor: 'pointer',
      color: '#5d6c7a'
    }
  }
}));

const CostumSwitch = withStyles(theme => ({
  root: {
    width: '40px',
    height: '20px',
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 3,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(20px)',
      color: '#000',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#fff',
        borderColor: '#000'
      }
    }
  },
  thumb: {
    width: '14px',
    height: '14px',
    boxShadow: 'none'
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

const heading = 'Sale';

const Sale = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
    dispatch({
      type: actionTypes.SET_FILTER_CRITERIA,
      value: { filterName: 'sale', filterValue: !checked }
    });
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>{heading}</Typography>
      <CostumSwitch checked={checked} onChange={toggleChecked} />
    </div>
  );
};

export default Sale;
