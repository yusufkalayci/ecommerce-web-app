import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import * as modalActions from '../../store/actions/modalActions';
import * as checkOutActions from '../../store/actions/checkOutActions';
import { useDispatch } from 'react-redux';
import classes2 from '../../components/Product/ProductInfo.module.css';
import { Divider, AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  listContainer: {
    listStyleType: 'none',
    padding: '0'
  },
  itemContainer: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridColumnGap: '16px',
    gridRowGap: '0px',
    alignItems: 'end',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)'
    }
  },
  productImage: {
    padding: theme.spacing(1),
    margin: theme.spacing(0),
    borderRadius: '10%',
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    gridArea: '1 / 1 / 4 / 2',
    [theme.breakpoints.down('sm')]: { gridArea: '1 / 1 / 5 / 2' }
  },
  productName: {
    padding: theme.spacing(1),
    margin: theme.spacing(0),
    gridArea: '1 / 2 / 2 / 5',
    [theme.breakpoints.down('sm')]: { gridArea: '1 / 2 / 2 / 4' }
  },
  productSize: {
    padding: theme.spacing(1),
    margin: theme.spacing(0),
    gridArea: '2 / 2 / 3 / 3',
    [theme.breakpoints.down('sm')]: { gridArea: '2 / 2 / 3 / 4' }
  },
  productQuantity: {
    padding: theme.spacing(1),
    margin: theme.spacing(0),
    gridArea: '3 / 2 / 4 / 3',
    [theme.breakpoints.down('sm')]: { gridArea: '3 / 2 / 4 / 4' }
  },
  productPrice: {
    padding: theme.spacing(1),
    margin: theme.spacing(0),
    gridArea: '2 / 3 / 4 / 4',
    [theme.breakpoints.down('sm')]: { gridArea: '4 / 2 / 5 / 3' }
  },
  deleteIcon: {
    padding: theme.spacing(1),
    margin: theme.spacing(0),
    gridArea: '2 / 4 / 4 / 5',
    justifySelf: 'center',
    [theme.breakpoints.down('sm')]: { gridArea: '4 / 3 / 5 / 4' }
  }
}));

const CheckOutModal = props => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const checkOutItems = useSelector(state => state.checkout.checkOutItems);
  let history = useHistory();

  const handleClose = () => {
    dispatch({
      type: modalActions.TOGGLE_CHECKOUT_MODAL
    });
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      {fullScreen ? (
        <React.Fragment>
          <AppBar color='inherit'>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                onClick={handleClose}
                aria-label='close'
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </React.Fragment>
      ) : null}

      <DialogContent>
        <ul className={classes.listContainer}>
          {checkOutItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li key={index} className={classes.itemContainer}>
                  <p className={classes.productName}>{item.productName}</p>
                  <div
                    className={classes.productImage}
                    style={{ backgroundImage: `${item.productImage}` }}
                  />
                  <p className={classes.productSize}>
                    Size: {item.productSize}
                  </p>
                  <p className={classes.productQuantity}>
                    Quantity: {item.productQuantity}
                  </p>
                  <p className={classes.productPrice}>
                    <strong>
                      {item.productQuantity + ' x ' + item.productPrice}$
                    </strong>
                  </p>

                  <IconButton
                    className={classes.deleteIcon}
                    onClick={() => {
                      dispatch({
                        type: checkOutActions.REMOVE_ITEM_FROM_CHECKOUT,
                        value: index
                      });
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </li>
                <Divider />
              </React.Fragment>
            );
          })}
        </ul>
      </DialogContent>
      <DialogActions>
        <button
          className={classes2.btn + ' ' + classes2.red}
          type='button'
          onClick={() => {
            dispatch({ type: modalActions.TOGGLE_CHECKOUT_MODAL });
            history.push('/checkout');
          }}
        >
          <span>Continue To CheckOut</span>
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckOutModal;
