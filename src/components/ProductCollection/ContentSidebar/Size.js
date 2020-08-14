import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions/filterActions';
import ExpansionPanel from '../../ExpantionPanel/ExpansionPanel';
import ExpansionPanelSummary from '../../ExpantionPanel/ExpentionPanelSummary';
import ExpansionPanelDetails from '../../ExpantionPanel/ExpansionPanelDetails';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%'
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
  },
  item: {
    color: '#212529',
    backgroundColor: '#fff',
    cursor: 'pointer',
    display: 'table',
    width: '22.5%',
    height: '44px',
    margin: '0 1.25% 1.5% !important',
    padding: '0 !important',
    border: '1px solid #ccc',

    textIndent: 0,
    left: 0,
    lineHeight: '28px',
    textAlign: 'center',
    wordWrap: 'break-word',
    transition: 'all .4s ease-in-out',

    '&:hover': {
      backgroundColor: 'inherit',
      transition: 'color .3s ease-in-out',
      cursor: 'pointer',
      color: '#5d6c7a'
    }
  },
  selected: {
    color: '#fff',
    backgroundColor: '#000',
    transition: 'color .4s ease-in-out',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff'
    }
  },
  span: {
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '0 5px'
  }
}));

const sizeList = ['XXL', 'XL', 'L', 'M', 'S', 'XS'];
const heading = 'size';

const Size = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    dispatch({
      type: actionTypes.SET_FILTER_CRITERIA,
      value: { filterName: heading, filterValue: newChecked }
    });
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{heading}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          {sizeList.map((size, index) => (
            <div
              key={index}
              className={clsx(
                classes.item,
                checked.indexOf(size) !== -1 && classes.selected
              )}
              onClick={handleToggle(size)}
            >
              <span className={classes.span}>{size}</span>
            </div>
          ))}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Size;
