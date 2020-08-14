import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';
import CardMedia from '../Card/CardMedia';
import Card from '../Card/Card';
import CardActionArea from '../Card/CardActionArea';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/checkOutActions';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles(theme => ({
  root: { paddingTop: theme.spacing(2) },
  selectWrapper: {},

  select: {
    display: 'flex',
    fontSize: '14px',
    letterSpacing: '.05em',
    fontWeight: '400',
    color: '#212529',
    width: '100%',
    height: '36px',
    padding: theme.spacing(1),
    border: '1px solid #ccc',
    '&:hover': {
      border: '1px solid #212529'
    }
  },
  inputQuantity: {
    height: '36px',
    paddingLeft: '2px',
    fontSize: '14px',
    letterSpacing: '.05em',
    fontWeight: '400',
    color: '#212529',
    width: '100%',
    border: '1px solid #ccc',
    textAlign: 'center',
    '&:hover': {
      border: '1px solid #212529'
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield'
    }
  },

  selectIcon: {
    display: 'none'
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
    border: '1px solid #ccc',
    '&:hover': {
      border: '1px solid #212529'
    }
  },
  input: {
    flex: 'auto',
    fontSize: '14px',
    letterSpacing: '.05em',
    fontWeight: '400',
    margin: '0',
    padding: '0',
    color: '#212529',
    '&:focus': {
      backgroundColor: 'inherit'
    }
  }
}))(InputBase);

const ProductSizeQuantity = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [sizeOptions] = React.useState(props.product.sizeOptions);
  const [quantity, setQuantity] = React.useState(1);

  const hadleColorChange = index => () => {
    dispatch({
      type: actionTypes.UPDATE_CURRENT_ITEM,
      value: props.product.colors[index],
      fieldName: 'productColor'
    });
    dispatch({
      type: actionTypes.UPDATE_CURRENT_ITEM,
      value: props.product.images[index],
      fieldName: 'productImage'
    });
  };
  return (
    <React.Fragment>
      <Grid item container xs={12} spacing={1} alignItems='center'>
        {props.product.images.map((value, index) => (
          <Grid item xs={3} key={index} zeroMinWidth>
            <Card key={index} className={classes.root}>
              <CardActionArea onClick={hadleColorChange(index)}>
                <CardMedia image={value} />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={7} className={classes.root}>
        <div className={classes.selectWrapper}>
          <form autoComplete='off' style={{ width: '100%' }}>
            <FormControl error={props.hasError} style={{ width: '100%' }}>
              <Select
                value={props.value}
                onChange={props.handleSizeChange}
                classes={{
                  icon: classes.selectIcon
                }}
                className={classes.select}
                input={<BootstrapInput />}
              >
                <MenuItem value={0} disabled>
                  {'Select Size'}
                </MenuItem>
                {sizeOptions.map((size, index) => (
                  <MenuItem value={size} key={index}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
              {props.hasError && (
                <FormHelperText>This is required!</FormHelperText>
              )}
            </FormControl>
          </form>
        </div>
      </Grid>

      <Grid
        item
        xs={5}
        container
        justify='flex-end'
        alignItems='center'
        className={classes.root}
      >
        <Grid item xs={3}>
          <IconButton
            onClick={() => {
              setQuantity(quantity <= 1 ? 1 : quantity - 1);
              dispatch({
                type: actionTypes.UPDATE_CURRENT_ITEM,
                value: quantity,
                fieldName: 'productQuantity'
              });
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M19 13H5v-2h14v2z' />
              <path d='M0 0h24v24H0z' fill='none' />
            </svg>
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <input
            className={classes.inputQuantity}
            type='number'
            name='quantity'
            min='1'
            value={quantity}
            readOnly
          />
        </Grid>
        <Grid item xs={3}>
          <IconButton
            onClick={() => {
              setQuantity(quantity + 1);
              dispatch({
                type: actionTypes.UPDATE_CURRENT_ITEM,
                value: quantity,
                fieldName: 'productQuantity'
              });
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
              <path d='M0 0h24v24H0z' fill='none' />
            </svg>
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProductSizeQuantity;
