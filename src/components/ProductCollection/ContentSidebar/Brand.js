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
import { withStyles } from '@material-ui/core/styles';

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
  listItem: {
    textTransform: 'capitalize'
  }
}));

const CostumCheckbox = withStyles({
  root: {
    color: '#000',
    '&$checked': {
      color: '#000'
    }
  },
  checked: {}
})(props => <Checkbox color='default' {...props} />);

const brandList = [
  'brand 1',
  'brand 2',
  'brand 3',
  'brand 4',
  'brand 5',
  'brand 6',
  'brand 7',
  'brand 8'
];
const heading = 'brand';

const Brand = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const checked = useSelector(state => state.filter.brand);

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
      value: { filterName: 'brand', filterValue: newChecked }
    });
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{heading}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List className={classes.list}>
          {brandList.map(brandName => {
            const labelId = `checkbox-list-label-${brandName}`;

            return (
              <ListItem
                key={brandName}
                role={undefined}
                dense
                button
                onClick={handleToggle(brandName)}
              >
                <ListItemIcon>
                  <CostumCheckbox
                    edge='start'
                    checked={checked.indexOf(brandName) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={brandName}
                  className={classes.listItem}
                />
              </ListItem>
            );
          })}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Brand;
