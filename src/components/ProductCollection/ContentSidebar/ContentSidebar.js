import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import clsx from 'clsx';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs';
import PropTypes from 'prop-types';
import Brand from './Brand';
import Size from './Size';
import Rating from './Rating';
import Sale from './Sale';
import MadeInCanada from './MadeInCanada';

const useStyles = makeStyles(theme => ({
  contentSidebar: {
    position: 'sticky',
    top: '0',
    width: '100%',
    padding: theme.spacing(1),
    overflow: 'auto',
    maxHeight: '80vh',
    textAlign: 'left'
  },
  treeView: {
    maxWidth: 400,
    textAlign: 'left',
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1)
  },
  p: {
    color: '#000',
    fontSize: '14px',

    '&:hover': {
      backgroundColor: 'inherit',
      transition: 'color .3s ease-in-out',
      cursor: 'pointer',
      color: '#5d6c7a'
    }
  }
}));

const StyledTreeItem = withStyles(theme => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3
    }
  },
  root: {
    color: '#000',
    fontSize: '14px',
    paddingTop: '12px',
    '& :hover': {
      backgroundColor: 'inherit',
      transition: 'color .3s ease-in-out',
      cursor: 'pointer',
      color: '#5d6c7a'
    },
    '&:focus > $content': {
      backgroundColor: 'inherit'
    }
  },
  content: {},
  label: {
    fontSize: '14px',
    fontWeight: '700'
  },
  group: {
    marginLeft: 12,
    paddingLeft: 12
  }
}))(props => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
    }
  });
  TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool
  };

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const ContentSidebar = props => {
  const classes = useStyles();

  const { className, ...rest } = props;
  const menuList = ['Men', 'Woman', 'Footwear', 'Youth', 'Gear'];

  return (
    <div className={clsx(classes.contentSidebar, className)} {...rest}>
      <strong>CATEGORY</strong>
      <TreeView className={classes.treeView} defaultExpanded={['0']}>
        {menuList.map((item, index) => (
          <StyledTreeItem key={index} nodeId={String(index)} label={item}>
            <p className={classes.p}> Jackets & Vests (1147) </p>
            <p className={classes.p}> Bottoms (774) </p>
            <p className={classes.p}> Headwear & Neckwear (584) </p>
            <p className={classes.p}> Socks (448) </p>
            <p className={classes.p}> Gloves & Mitts (328) </p>
            <p className={classes.p}> Underwear (142) </p>
            <p className={classes.p}> Accessories (129) </p>
            <p className={classes.p}> Base Layers (117) </p>
            <p className={classes.p}> Swimwear (45) </p>
          </StyledTreeItem>
        ))}
      </TreeView>
      <Divider />
      <Brand />
      <Divider />
      <Size />
      <Divider />
      <Sale />
      <Divider />
      <Rating />
      <Divider />
      <MadeInCanada />
    </div>
  );
};

export default ContentSidebar;
