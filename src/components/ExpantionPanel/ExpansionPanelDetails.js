import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import classNames from 'classnames';

const CostumExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(0)
  }
}))(MuiExpansionPanelDetails);

export default function ExpansionPanelDetails(props) {
  const { children, className, ...rest } = props;
  const cardClasses = classNames({
    [className]: className !== undefined
  });

  return (
    <CostumExpansionPanelDetails className={cardClasses} {...rest}>
      {children}
    </CostumExpansionPanelDetails>
  );
}
