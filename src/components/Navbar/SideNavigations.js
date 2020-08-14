import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import clsx from 'clsx';
import { Button, Grid, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '240px',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4)
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

export default function SideNavigations(props) {
  const classes = useStyles();
  const { className, ...rest } = props;
  return (
    <div className={clsx(classes.root)}>
      <Grid container spacing={2} justify='space-around' align='center'>
        <Grid item xs>
          <Button variant='contained' className={classes.button}>
            Help
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant='contained' className={classes.button}>
            Sign In
          </Button>
        </Grid>
      </Grid>

      <TreeView className={clsx(classes.root)} defaultExpanded={['4']}>
        <StyledTreeItem nodeId='1' label='New Arrivals' />
        <Divider />
        <StyledTreeItem nodeId='2' label='Brands' />
        <Divider />
        <StyledTreeItem nodeId='3' label="Women's" />
        <Divider />
        <StyledTreeItem nodeId='4' label="Men's">
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
        <Divider />
        <StyledTreeItem nodeId='15' label='Footwear' />
        <Divider />
        <StyledTreeItem nodeId='16' label='Gear' />
        <Divider />
        <StyledTreeItem nodeId='17' label='Youth' />
        <Divider />
        <StyledTreeItem nodeId='18' label='Activities' />
        <Divider />
        <StyledTreeItem nodeId='19' label='Sales' />
        <Divider />
        <StyledTreeItem nodeId='20' label='Blog' />
        <Divider />
      </TreeView>
    </div>
  );
}
