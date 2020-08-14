import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  List
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../../store/actions/filterActions';
import ExpansionPanel from '../../ExpantionPanel/ExpansionPanel';
import ExpansionPanelSummary from '../../ExpantionPanel/ExpentionPanelSummary';
import ExpansionPanelDetails from '../../ExpantionPanel/ExpansionPanelDetails';

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
  }
}));

const priceList = ['Price 1', 'Price 2', 'Price 3', 'Price 4'];
const heading = 'price';

const Price = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const checked = useSelector(state => state.filter.price);

  const handleToggle = (value, filterName) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    dispatch({
      type: actionTypes.SET_FILTER_CRITERIA,
      value: newChecked
    });
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{heading}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List className={classes.list}>
          {priceList.map(price => {
            const labelId = `checkbox-list-label-${price}`;

            return (
              <ListItem
                key={price}
                role={undefined}
                dense
                button
                onClick={handleToggle(price)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.indexOf(price) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={price} />
              </ListItem>
            );
          })}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Price;
