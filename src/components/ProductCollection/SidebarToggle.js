import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import * as modalActions from '../../store/actions/modalActions';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'nowrap',
    textAlign: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    border: '1px solid #ccc',
    '&:hover': {
      border: '1px solid #212529'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  icon: {
    content:
      'url(https://cdn.shopify.com/s/files/1/1230/9376/t/358/assets/icon-filters.svg)',
    width: '24px',
    height: '24px'
  },
  label: {
    fontSize: '14px',
    letterSpacing: '.05em',
    fontWeight: '400',
    marginRight: '.5em',
    color: '#212529',
    flex: 'auto'
  }
}));

const SidebarToggle = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch({
      type: modalActions.TOGGLE_SIDEBAR
    });
  };

  return (
    <div className={classes.root} onClick={toggleSideBar}>
      <span className={classes.icon}></span>
      <span className={classes.label}>Filter</span>
    </div>
  );
};

export default SidebarToggle;
