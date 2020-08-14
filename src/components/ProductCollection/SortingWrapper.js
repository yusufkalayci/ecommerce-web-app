import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/filterActions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'nowrap',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      border: '1px solid #ccc',
      '&:hover': {
        border: '1px solid #212529'
      }
    }
  },
  label: {
    fontSize: '14px',
    letterSpacing: '.05em',
    fontWeight: '400',
    marginRight: '.5em',
    color: '#212529',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  sortingWrapperIcon: {
    content:
      'url(https://cdn.shopify.com/s/files/1/1230/9376/t/356/assets/icon-order.svg)',
    width: '24px',
    height: '24px',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  selectIcon: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      width: '174px',
      border: '1px solid #ccc',
      '&:hover': {
        border: '1px solid #212529'
      }
    }
  },
  input: {
    flex: 'auto',
    fontSize: '14px',
    letterSpacing: '.05em',
    fontWeight: '400',
    margin: '0',
    padding: '0',
    color: '#212529',
    '&:focus': {
      backgroundColor: 'inherit'
    }
  }
}))(InputBase);

const sortOptions = [
  'Featured',
  'Lowest Price',
  'Highest Price',
  'Highest Rated',
  'Discount %'
];

const SortingWrapper = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('0');
  const handleChange = event => {
    setValue(event.target.value);
    console.log(event.target.value);

    switch (event.target.value) {
      case 0:
        return dispatch({
          type: actionTypes.SORT_BY_FEATURED
        });
      case 1:
        return dispatch({
          type: actionTypes.SORT_BY_LOWEST_PRICE
        });
      case 2:
        return dispatch({
          type: actionTypes.SORT_BY_HIGHEST_PRICE
        });
      case 3:
        return dispatch({
          type: actionTypes.SORT_BY_HIGHEST_RATE
        });
      case 4:
        return dispatch({
          type: actionTypes.SORT_BY_DISCOUNT
        });
      default:
        return dispatch({
          type: actionTypes.SORT_BY_FEATURED
        });
    }
  };

  return (
    <div className={classes.root}>
      <span className={classes.sortingWrapperIcon}></span>
      <label htmlFor='sort-customized-select' className={classes.label}>
        Sort By:
      </label>

      <Select
        value={value}
        onChange={handleChange}
        classes={{
          icon: classes.selectIcon
        }}
        input={<BootstrapInput />}
      >
        {sortOptions.map((value, index) => (
          <MenuItem key={index} value={index}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SortingWrapper;
