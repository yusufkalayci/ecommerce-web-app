import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import classNames from 'classnames';

const CostumExpansionPanelSummary = withStyles(theme => ({
  root: {
    backgroundColor: 'inherit',
    borderBottom: '0',
    marginBottom: -1,
    padding: '0',
    '&$expanded': {}
  },
  content: {
    '&$expanded': {}
  },
  expanded: {}
}))(MuiExpansionPanelSummary);

export default function ExpansionPanelSummary(props) {
  const { children, className, ...rest } = props;
  const cardClasses = classNames({
    [className]: className !== undefined
  });

  return (
    <CostumExpansionPanelSummary className={cardClasses} {...rest}>
      {children}
    </CostumExpansionPanelSummary>
  );
}
