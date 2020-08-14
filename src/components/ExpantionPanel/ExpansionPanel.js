import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import classNames from 'classnames';

const CostumExpansionPanel = withStyles(theme => ({
  root: {
    backgroundColor: 'inherit',
    border: '0',
    padding: theme.spacing(1),
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
}))(MuiExpansionPanel);

export default function ExpansionPanel(props) {
  const { children, className, ...rest } = props;
  const cardClasses = classNames({
    [className]: className !== undefined
  });

  return (
    <CostumExpansionPanel className={cardClasses} {...rest}>
      {children}
    </CostumExpansionPanel>
  );
}
