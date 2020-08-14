import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/filterActions';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));

const filterName = ['size', 'brand', 'rating', 'color', 'price', 'tag'];

const FilterSummary = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { className } = props;
  const filterData = useSelector(state => state.filter);

  const handleDelete = (chipToDelete, name) => () => {
    dispatch({
      type: actionTypes.REMOVE_CRITERIA_FROM_FILTER,
      value: chipToDelete,
      filterName: name
    });
  };

  return (
    <div className={clsx(classes.root, className)}>
      {filterName.map((name, index) =>
        filterData[name].map((data, index) => (
          <Chip
            key={data}
            label={data}
            onDelete={handleDelete(data, name)}
            className={classes.chip}
            deleteIcon={<ClearSharpIcon />}
          />
        ))
      )}
    </div>
  );
};

export default FilterSummary;
