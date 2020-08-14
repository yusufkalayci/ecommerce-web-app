import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import * as modalActions from '../../store/actions/modalActions';
import { useDispatch, useSelector } from 'react-redux';
import ContentSidebar from '../ProductCollection/ContentSidebar/ContentSidebar';
import SideNavigations from '../Navbar/SideNavigations';

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
    width: 240
  },
  list: { width: 240 },
  sidebar: {
    width: '240px'
  }
});

export default function SideBar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sideBarOpen = useSelector(state => state.modal.sideBarOpen);
  const navigationBarOpen = useSelector(state => state.modal.navigationBarOpen);

  const toggleSideBar = () => {
    dispatch({
      type: modalActions.TOGGLE_SIDEBAR
    });
  };
  const toggleNavigationBar = () => {
    dispatch({
      type: modalActions.TOGGLE_NAVIGATIONBAR
    });
  };

  return (
    <React.Fragment>
      {sideBarOpen ? (
        <Drawer
          open={sideBarOpen}
          onClose={toggleSideBar}
          className={classes.root}
        >
          <ContentSidebar className={classes.sidebar} />
        </Drawer>
      ) : null}
      {navigationBarOpen ? (
        <Drawer
          open={navigationBarOpen}
          onClose={toggleNavigationBar}
          className={classes.root}
        >
          <SideNavigations className={classes.sidebar} />
        </Drawer>
      ) : null}
    </React.Fragment>
  );
}
