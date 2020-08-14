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
import ExpansionPanel from '../../ExpantionPanel/ExpansionPanel';
import ExpansionPanelSummary from '../../ExpantionPanel/ExpentionPanelSummary';
import ExpansionPanelDetails from '../../ExpantionPanel/ExpansionPanelDetails';
import costumRating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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

const StyledRating = withStyles({
  iconFilled: {
    color: '#000'
  }
})(costumRating);

const ratingList = [5, 4, 3, 2, 1];
const heading = 'rating';

const Rating = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value, filterName) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{heading}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List className={classes.list}>
          {ratingList.map(rate => {
            const labelId = `checkbox-list-label-${rate}`;

            return (
              <ListItem
                key={rate}
                role={undefined}
                dense
                button
                onClick={handleToggle(rate)}
              >
                <ListItemIcon>
                  <CostumCheckbox
                    edge='start'
                    checked={checked.indexOf(rate) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <StyledRating
                  name='customized-color'
                  size='small'
                  readOnly
                  value={rate}
                  emptyIcon={<StarBorderIcon fontSize='inherit' />}
                />
                <ListItemText id={labelId} primary={' & up'} />
              </ListItem>
            );
          })}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Rating;
